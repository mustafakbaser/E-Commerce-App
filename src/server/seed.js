import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import Category from './models/Category.js';
import Product from './models/Product.js';
import User from './models/User.js';
import Order from './models/Order.js';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    // Clear existing data
    await Category.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Order.deleteMany();

    // Create categories
    const categories = await Category.insertMany([
      {
        name: 'Electronics',
        slug: 'electronics',
        image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&q=80',
        description: 'Latest electronic gadgets and devices'
      },
      {
        name: 'Fashion',
        slug: 'fashion',
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&q=80',
        description: 'Trendy fashion items and accessories'
      },
      {
        name: 'Home & Living',
        slug: 'home-living',
        image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500&q=80',
        description: 'Home decor and living essentials'
      },
      {
        name: 'Beauty',
        slug: 'beauty',
        image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&q=80',
        description: 'Beauty and personal care products'
      }
    ]);

    // Create products
    const products = await Product.insertMany([
      {
        name: 'Premium Wireless Headphones',
        slug: 'premium-wireless-headphones',
        description: 'High-quality wireless headphones with noise cancellation',
        price: 299.99,
        comparePrice: 349.99,
        images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80'],
        category: categories[0]._id,
        stock: 50,
        specifications: [
          { name: 'Battery Life', value: '30 hours' },
          { name: 'Bluetooth', value: '5.0' }
        ],
        rating: 4.5,
        reviewCount: 128,
        isNew: true,
        isFeatured: true
      },
      {
        name: 'Smart Watch Pro',
        slug: 'smart-watch-pro',
        description: 'Advanced smartwatch with health monitoring',
        price: 499.99,
        comparePrice: 599.99,
        images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80'],
        category: categories[0]._id,
        stock: 30,
        specifications: [
          { name: 'Display', value: 'AMOLED' },
          { name: 'Water Resistance', value: '5ATM' }
        ],
        rating: 4.8,
        reviewCount: 89,
        isNew: true,
        isFeatured: true
      },
      {
        name: 'Designer Handbag',
        slug: 'designer-handbag',
        description: 'Luxury designer handbag made from genuine leather',
        price: 899.99,
        comparePrice: 999.99,
        images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80'],
        category: categories[1]._id,
        stock: 15,
        specifications: [
          { name: 'Material', value: 'Genuine Leather' },
          { name: 'Size', value: 'Medium' }
        ],
        rating: 4.7,
        reviewCount: 45,
        isNew: false,
        isFeatured: true
      }
    ]);

    // Create users
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash('password123', salt);

    const users = await User.insertMany([
      {
        name: 'Admin User',
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'admin',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
        phone: '1234567890',
        address: {
          street: '123 Admin St',
          city: 'Admin City',
          state: 'AS',
          zipCode: '12345',
          country: 'USA'
        }
      },
      {
        name: 'Test User',
        email: 'user@example.com',
        password: hashedPassword,
        role: 'user',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
        phone: '9876543210',
        address: {
          street: '456 User St',
          city: 'User City',
          state: 'US',
          zipCode: '67890',
          country: 'USA'
        }
      }
    ]);

    // Create sample order
    await Order.create({
      user: users[1]._id,
      items: [
        {
          product: products[0]._id,
          quantity: 1,
          price: products[0].price
        },
        {
          product: products[1]._id,
          quantity: 1,
          price: products[1].price
        }
      ],
      totalAmount: products[0].price + products[1].price,
      shippingAddress: users[1].address,
      status: 'processing',
      paymentStatus: 'completed',
      paymentMethod: 'Credit Card'
    });

    console.log('Data seeded successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB().then(() => {
  seedData();
});