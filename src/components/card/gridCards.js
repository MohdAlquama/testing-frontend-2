import React from 'react';
import SimpleCard from "./simpleCards";

const GridCard = () => {
  const shoes = [
    { name: "Nike Air Max", price: 6999, image: "https://via.placeholder.com/150" },
    { name: "Adidas Ultraboost", price: 7999, image: "https://via.placeholder.com/150" },
    { name: "Puma RS-X", price: 5999, image: "https://via.placeholder.com/150" },
    { name: "Reebok Classic", price: 4999, image: "https://via.placeholder.com/150" },
    { name: "New Balance 574", price: 5499, image: "https://via.placeholder.com/150" },
    { name: "Asics Gel-Lyte", price: 6299, image: "https://via.placeholder.com/150" }
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Shoe Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shoes.map((shoe, index) => (
          <SimpleCard key={index} {...shoe} />
        ))}
      </div>
    </div>
  );
};

export default GridCard;
