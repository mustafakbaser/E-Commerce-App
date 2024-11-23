import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ShoppingCart, Share2, Star } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id: 1,
    name: "Premium Wireless Kulaklık",
    price: 1299.99,
    description: "Yüksek kaliteli ses deneyimi sunan premium wireless kulaklık. Active Noise Cancelling özelliği ile çevresel sesleri engelleyerek müziğinize odaklanmanızı sağlar.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=500&q=80"
    ],
    category: "Elektronik",
    stock: 10,
    rating: 4.5,
    reviews: 128,
    specifications: [
      { name: "Bluetooth Versiyon", value: "5.0" },
      { name: "Pil Ömrü", value: "30 saat" },
      { name: "Su Dayanıklılık", value: "IPX4" }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative rounded-lg overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <img src={image} alt="" className="w-full h-24 object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                  />
                ))}
                <span className="ml-2 text-gray-600">({product.reviews} değerlendirme)</span>
              </div>
              <span className="text-gray-600">|</span>
              <span className="text-green-600">{product.stock} adet stokta</span>
            </div>
          </div>

          <div className="text-3xl font-bold">₺{product.price.toLocaleString()}</div>

          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <label htmlFor="quantity" className="font-medium">Adet:</label>
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
                  className="w-16 text-center border-x"
                />
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center space-x-2">
                <ShoppingCart size={20} />
                <span>Sepete Ekle</span>
              </button>
              <button className="p-3 border rounded-lg hover:bg-gray-100 transition">
                <Heart size={20} className="text-gray-600" />
              </button>
              <button className="p-3 border rounded-lg hover:bg-gray-100 transition">
                <Share2 size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Specifications */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Teknik Özellikler</h3>
            <div className="grid grid-cols-2 gap-4">
              {product.specifications.map((spec) => (
                <div key={spec.name} className="flex justify-between">
                  <span className="text-gray-600">{spec.name}</span>
                  <span className="font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;