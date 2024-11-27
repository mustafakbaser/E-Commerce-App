import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import Category from './models/Category.js';

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

const products = [
  {
    name: 'iPhone 15 Pro Max',
    slug: 'iphone-15-pro-max',
    description: 'Latest iPhone with advanced features and powerful camera system',
    price: 64999.99,
    comparePrice: 67999.99,
    images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80'],
    stock: 50,
    specifications: [
      { name: 'Screen', value: '6.7" Super Retina XDR' },
      { name: 'Processor', value: 'A17 Pro' },
      { name: 'Camera', value: '48MP Main Camera' }
    ],
    rating: 4.8,
    reviewCount: 156,
    isNew: true,
    isFeatured: true
  },
  {
    name: 'MacBook Pro M3',
    slug: 'macbook-pro-m3',
    description: 'Powerful laptop with M3 chip for professional use',
    price: 55999.99,
    comparePrice: 59999.99,
    images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80'],
    stock: 35,
    specifications: [
      { name: 'Processor', value: 'M3 Pro' },
      { name: 'RAM', value: '16GB' },
      { name: 'Storage', value: '512GB SSD' }
    ],
    rating: 4.9,
    reviewCount: 89,
    isNew: true,
    isFeatured: true
  },
  {
    name: 'Samsung OLED TV',
    slug: 'samsung-oled-tv',
    description: '65" OLED TV with stunning picture quality',
    price: 39499.99,
    comparePrice: 44999.99,
    images: ['https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80'],
    stock: 20,
    specifications: [
      { name: 'Screen', value: '65" OLED' },
      { name: 'Resolution', value: '4K UHD' },
      { name: 'HDR', value: 'HDR10+' }
    ],
    rating: 4.7,
    reviewCount: 67,
    isNew: false,
    isFeatured: true
  }
];

const categories = [
  {
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&q=80',
    description: 'Latest electronic gadgets and devices'
  },
  {
    name: 'Computers',
    slug: 'computers',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80',
    description: 'Laptops, desktops and accessories'
  },
  {
    name: 'Smartphones',
    slug: 'smartphones',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80',
    description: 'Latest smartphones and accessories'
  }
];

const seedData = async () => {
  try {
    // Clear existing data
    await Category.deleteMany();
    await Product.deleteMany();

    // Create categories
    const createdCategories = await Category.insertMany(categories);
    console.log('Categories seeded successfully');

    // Add category reference to products
    const productsWithCategories = products.map(product => ({
      ...product,
      category: createdCategories[0]._id // Assigning all to Electronics for simplicity
    }));

    // Create products
    await Product.insertMany(productsWithCategories);
    console.log('Products seeded successfully');

    console.log('Data seeding completed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

connectDB().then(() => {
  seedData();
});