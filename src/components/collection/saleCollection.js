import React from 'react';
import Navbar from "../layouts/navbar";
import Footer from "../layouts/Footer";
import CatCard from "../card/catCard";
import Category from "../layouts/Category";
const SaleCollection= () => {

    const highlights = [
      {
        title: "0%",
        subtitle: "Referral fees on products under",
        note: "₹300",
      },
      {
        title: "₹65",
        subtitle: "National shipping rates now,",
        note: "from ₹77",
      },
      {
        title: "90%",
        small: "Up to",
        subtitle: "Savings in selling fees on the sale",
        note: "of second unit",
      },
    ];

  return (
    <div>
    <Navbar />
    <div className="bg-[#eef8fa] py-12 px-6 pt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">

        <div className="max-w-xl mb-10 md:mb-0">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Become an LUXE seller
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Sell on LUXE, India's most visited shopping destination.
            <br/>
            Shop Now...
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-md transition duration-300">
            Sign up
          </button>
        </div>
 
        <div className="relative">
          <div className="rounded-full border-8 border-orange-400 p-2">
            <div className='rounded-full w-72 h-72 object-cover'></div>
          
          </div>
          <div className="absolute top-0 right-0 transform translate-x-5 -translate-y-3 space-x-1">
            <span className="inline-block w-2 h-2 bg-orange-400 rounded-full"></span>
            <span className="inline-block w-3 h-3 bg-orange-400 rounded-full"></span>
          </div>
        </div>

      </div>
    </div>




    <div className="bg-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 relative">
        <span className="relative inline-block">
          Fee drop highlights
          <span className="absolute -top-4 -left-6 text-xs text-yellow-600 font-bold">✨ NEW</span>
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="bg-sky-200 text-center p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-4xl font-bold text-gray-800">
              {item.small && <span className="block text-xs font-medium -mb-1">{item.small}</span>}
              {item.title}
            </h3>
            <p className="text-gray-700 mt-2">{item.subtitle}</p>
            <p className="text-gray-700 font-medium">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
     <Category/>
     <CatCard/>
     <Footer />
     </div>
  );
};

export default SaleCollection;
