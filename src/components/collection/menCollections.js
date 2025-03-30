import React, { useState } from "react";
import { 
  Filter, 
  ChevronDown, 
  ChevronRight, 
  ArrowUpDown, 
  Star, 
  ShoppingCart 
} from "lucide-react";
import Navbar from "../layouts/navbar";
import Footer from "../layouts/Footer";

const MensCollection = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [sortBy, setSortBy] = useState('featured');

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Nike Air Jordan 1 Retro",
      category: "Basketball",
      price: 249.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      colors: ['Black', 'White', 'Red']
    },
    {
      id: 2,
      name: "Nike Air Max 270",
      category: "Running",
      price: 179.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2",
      colors: ['Gray', 'Blue', 'Green']
    },
    {
      id: 3,
      name: "Nike Blazer Mid '77",
      category: "Lifestyle",
      price: 129.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      colors: ['White', 'Black']
    },
    // Add more products...
  ];

  const filters = [
    { 
      name: 'Category', 
      options: ['Running', 'Basketball', 'Lifestyle', 'Training'] 
    },
    { 
      name: 'Price', 
      options: ['$0 - $100', '$100 - $200', '$200 - $300', '$300+'] 
    },
    { 
      name: 'Size', 
      options: ['6', '7', '8', '9', '10', '11', '12'] 
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gradient-to-r from-gray-900 to-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a')"
          }}
        />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                Men's Collection
              </h1>
              <p className="text-xl text-white/80 mb-6 max-w-xl">
                Elevate your style with our curated selection of men's footwear and apparel.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-4">
            {filters.map((filter) => (
              <div key={filter.name} className="relative">
                <button 
                  onClick={() => setActiveFilter(activeFilter === filter.name ? null : filter.name)}
                  className="flex items-center bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition"
                >
                  {filter.name}
                  <ChevronDown size={20} className="ml-2" />
                </button>
                {activeFilter === filter.name && (
                  <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg p-4 z-10 min-w-[200px]">
                    {filter.options.map((option) => (
                      <div 
                        key={option} 
                        className="py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sorting */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <ArrowUpDown size={20} className="text-gray-600" />
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white border rounded-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform"
                />
                <button className="absolute bottom-4 left-4 right-4 bg-white/90 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ShoppingCart size={20} className="mr-2" /> Add to Cart
                </button>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <div className="flex items-center text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="ml-1 text-gray-600">{product.rating}</span>
                  </div>
                </div>
                <p className="text-gray-500 mb-2">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xl">${product.price}</span>
                  <div className="flex space-x-2">
                    {product.colors.slice(0, 3).map((color) => (
                      <div 
                        key={color} 
                        className="w-4 h-4 rounded-full" 
                        style={{ 
                          backgroundColor: 
                            color === 'Black' ? '#000' : 
                            color === 'White' ? '#fff' : 
                            color === 'Red' ? '#ff0000' : 
                            color === 'Blue' ? '#0000ff' : 
                            color === 'Green' ? '#00ff00' : 
                            color === 'Gray' ? '#808080' : '#000'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-4">
          <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
            Previous
          </button>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button 
                key={page} 
                className={`w-10 h-10 rounded-full ${
                  page === 1 ? 'bg-black text-white' : 'bg-gray-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300">
            Next
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default MensCollection;