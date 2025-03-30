import React from 'react'
import CatCard from '../card/catCard';
import Navbar from "../layouts/navbar";
import Footer from "../layouts/Footer";
const WomenCollection = () => {
  return (
    <div>
     <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900">Women's Collection</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <CatCard image={"/assets/image121.jpg"} />
          </div>
        </div>
      </section>     
    </div>
    // <h1>nothing </h1>
  )
}

export default WomenCollection