import React from 'react';

const categories = [
  {
    title: 'Apparel',
    image: 'https://images.unsplash.com/photo-1622760807800-66cf1466fc08',
    discount: '16.5%',
  },
  {
    title: 'Home',
    image: 'https://images.unsplash.com/photo-1622760807800-66cf1466fc08',
    discount: '15.5%',
  },
  {
    title: 'Shoes',
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782',
    discount: '15%',
  },
  {
    title: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782',
    discount: '17.5%',
  },
];

export default function CategoryImpact() {
  return (
    <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">Category level impact</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {categories.map((item, index) => (
          <div key={index} className="bg-cream p-5 rounded-xl shadow-md flex flex-col justify-between hover:shadow-lg transition duration-300">
            <div>
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-sm mb-4">See up to <span className="font-semibold">{item.discount}</span> reduction in referral fee for products &lt;= Rs.300.</p>
            </div>
            <img src={item.image} alt={item.title} className="rounded-lg object-cover h-40 w-full mb-4" />
            <div className="text-blue-600 font-semibold cursor-pointer flex items-center justify-between">
              <span>Check here</span>
              <span className="text-xl">+</span>
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>
    </section>
  );
}
