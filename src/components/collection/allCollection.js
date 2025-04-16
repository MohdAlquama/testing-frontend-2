import React from 'react'
import GridCard from "../card/gridCards";
import ShoeSlider from "../layouts/ShoeSlider";
import CatCard from "../card/catCard";
import Navbar from "../layouts/navbar";
import Footer from "../layouts/Footer";
import Category from "../layouts/Category";
function AllCollection() {
  return (
    <div>
      <Navbar/>
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-gradient-to-r from-gray-900 to-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2')",
          }}
        />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-black text-white mb-6 leading-tight tracking-tight">
               All Collection
              </h1>
              <p className="text-xl text-white/80 mb-6 max-w-xl">
                Discover our latest All collection – elegant, stylish, and
                comfortable footwear designed for every occasion. Step into
                fashion today!
              </p>
            </div>
          </div>
        </div>
      </div>
      <GridCard />
       {/* Additional Sections: Shop Now & Women's Collection */}
       <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900">
              All Collection
            </h2>
            <p className="text-xl text-gray-600 mt-4">
              Styles that celebrate femininity and strength
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 overflow-hidden">
            <div className="flex flex-col">
              <CatCard image={"/assets/nike-just-do-it.png"} />
              <div class="p-4">
                <h2 class="text-lg font-semibold">Product 1</h2>
                <p class="text-gray-600">
                  Explore the elegant style of our latest collection.
                </p>
                <button class="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <CatCard image={"/assets/nike-just-do-it.jpg"} />
              <div class="p-4">
                <h2 class="text-lg font-semibold">Product 2</h2>
                <p class="text-gray-600">
                  Explore the elegant style of our latest collection.
                </p>
                <button class="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <CatCard image={"/assets/nike-just-do-its.jpg"} />
              <div class="p-4">
                <h2 class="text-lg font-semibold">Product 3</h2>
                <p class="text-gray-600">
                  Explore the elegant style of our latest collection.
                </p>
                <button class="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ShoeSlider />
      <Category/>
      <Footer/>
    </div>
  );
}

export default AllCollection




   

     
