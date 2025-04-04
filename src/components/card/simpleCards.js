
import React from 'react'

const SimpleCard = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-4">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-3">{name}</h2>
      <p className="text-blue-600 font-bold">₹{price}</p>
    </div>
  );
};

export default SimpleCard;

