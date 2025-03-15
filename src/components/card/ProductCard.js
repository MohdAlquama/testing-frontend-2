import React from 'react';
import { Heart, Star } from 'lucide-react';



const ProductCard = ({ image, name, price, rating }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={name}
          className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart size={20} />
        </button>
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-1 mb-2">
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-600">{rating}</span>
        </div>
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="text-gray-900 font-medium">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;