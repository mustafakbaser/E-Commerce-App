import { Product } from '../types/product';

export const getMockProducts = (): Product[] => [
  {
    _id: '1',
    name: 'iPhone 15 Pro Max',
    slug: 'iphone-15-pro-max',
    description: 'Latest iPhone with advanced features and powerful camera system',
    price: 64999.99,
    comparePrice: 67999.99,
    images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80'],
    category: {
      _id: '1',
      name: 'Smartphones',
      slug: 'smartphones'
    },
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
    _id: '2',
    name: 'MacBook Pro M3',
    slug: 'macbook-pro-m3',
    description: 'Powerful laptop with M3 chip for professional use',
    price: 55999.99,
    comparePrice: 59999.99,
    images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80'],
    category: {
      _id: '2',
      name: 'Computers',
      slug: 'computers'
    },
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
    _id: '3',
    name: 'Samsung OLED TV',
    slug: 'samsung-oled-tv',
    description: '65" OLED TV with stunning picture quality',
    price: 39499.99,
    comparePrice: 44999.99,
    images: ['https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80'],
    category: {
      _id: '3',
      name: 'TVs',
      slug: 'tvs'
    },
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
  },
  {
    _id: '4',
    name: 'Sony WH-1000XM5',
    slug: 'sony-wh-1000xm5',
    description: 'Premium noise-cancelling headphones with superior sound quality',
    price: 19999.99,
    comparePrice: 22999.99,
    images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80'],
    category: {
      _id: '4',
      name: 'Headphones',
      slug: 'headphones'
    },
    stock: 100,
    specifications: [
      { name: 'Battery Life', value: '30 hours' },
      { name: 'Noise Cancelling', value: 'Active' },
      { name: 'Connectivity', value: 'Bluetooth 5.2' }
    ],
    rating: 4.6,
    reviewCount: 234,
    isNew: false,
    isFeatured: true
  },
  {
    _id: '5',
    name: 'Fitbit Charge 5',
    slug: 'fitbit-charge-5',
    description: 'Advanced fitness tracker with heart rate monitoring and GPS',
    price: 7999.99,
    comparePrice: 8999.99,
    images: ['https://images.unsplash.com/photo-1584670493203-03ddc294db1c?w=500&q=80'],
    category: {
      _id: '5',
      name: 'Wearables',
      slug: 'wearables'
    },
    stock: 150,
    specifications: [
      { name: 'Battery Life', value: '7 days' },
      { name: 'Heart Rate Monitor', value: 'Yes' },
      { name: 'GPS', value: 'Built-in' }
    ],
    rating: 4.5,
    reviewCount: 345,
    isNew: true,
    isFeatured: false
  },
  {
    _id: '6',
    name: 'Canon EOS R6',
    slug: 'canon-eos-r6',
    description: 'Full-frame mirrorless camera with high-speed shooting and 4K video',
    price: 99999.99,
    comparePrice: 104999.99,
    images: ['https://images.unsplash.com/photo-1516035069371-2e2931cdd7e9?w=500&q=80'],
    category: {
      _id: '6',
      name: 'Cameras',
      slug: 'cameras'
    },
    stock: 40,
    specifications: [
      { name: 'Sensor', value: 'Full-frame CMOS' },
      { name: 'Resolution', value: '20.1 MP' },
      { name: 'Video', value: '4K UHD' }
    ],
    rating: 4.8,
    reviewCount: 123,
    isNew: false,
    isFeatured: true
  },
  {
    _id: '7',
    name: 'Dyson V15 Detect',
    slug: 'dyson-v15-detect',
    description: 'Powerful cordless vacuum with advanced dust detection',
    price: 34999.99,
    comparePrice: 37999.99,
    images: ['https://images.unsplash.com/photo-1592298139844-130m3437038f?w=500&q=80'],
    category: {
      _id: '7',
      name: 'Home Appliances',
      slug: 'home-appliances'
    },
    stock: 60,
    specifications: [
      { name: 'Battery Life', value: '60 minutes' },
      { name: 'Dust Detection', value: 'Laser' },
      { name: 'Suction Power', value: '230 AW' }
    ],
    rating: 4.7,
    reviewCount: 98,
    isNew: true,
    isFeatured: true
  },
  {
    _id: '8',
    name: 'Nintendo Switch OLED',
    slug: 'nintendo-switch-oled',
    description: 'Portable gaming console with vibrant OLED screen',
    price: 19999.99,
    comparePrice: 21999.99,
    images: ['https://images.unsplash.com/photo-1606144042614-95417bc65c98?w=500&q=80'],
    category: {
      _id: '8',
      name: 'Gaming',
      slug: 'gaming'
    },
    stock: 80,
    specifications: [
      { name: 'Screen', value: '7" OLED' },
      { name: 'Battery Life', value: '4.5-9 hours' },
      { name: 'Storage', value: '64GB' }
    ],
    rating: 4.9,
    reviewCount: 456,
    isNew: false,
    isFeatured: true
  },
  {
    _id: '9',
    name: 'Bose SoundLink Revolve+',
    slug: 'bose-soundlink-revolve-plus',
    description: 'Portable Bluetooth speaker with 360-degree sound',
    price: 14999.99,
    comparePrice: 16999.99,
    images: ['https://images.unsplash.com/photo-1564424224827-cd24b891587e?w=500&q=80'],
    category: {
      _id: '9',
      name: 'Audio',
      slug: 'audio'
    },
    stock: 120,
    specifications: [
      { name: 'Battery Life', value: '16 hours' },
      { name: 'Connectivity', value: 'Bluetooth' },
      { name: 'Water Resistance', value: 'IPX4' }
    ],
    rating: 4.6,
    reviewCount: 289,
    isNew: false,
    isFeatured: true
  },
  {
    _id: '10',
    name: 'Philips Hue Smart Bulb',
    slug: 'philips-hue-smart-bulb',
    description: 'Smart LED bulb with customizable colors and voice control',
    price: 4999.99,
    comparePrice: 5499.99,
    images: ['https://images.unsplash.com/photo-1555939594-d27d900a5d1e?w=500&q=80'],
    category: {
      _id: '10',
      name: 'Smart Home',
      slug: 'smart-home'
    },
    stock: 200,
    specifications: [
      { name: 'Lumens', value: '800' },
      { name: 'Color Temperature', value: '2000-6500K' },
      { name: 'Connectivity', value: 'Wi-Fi, Bluetooth' }
    ],
    rating: 4.8,
    reviewCount: 398,
    isNew: true,
    isFeatured: true
  }
];
