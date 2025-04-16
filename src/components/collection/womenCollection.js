import React from "react";
import { ChevronRight, Star } from "lucide-react";
import CatCard from "../card/catCard";
import Navbar from "../layouts/navbar";
import Footer from "../layouts/Footer";
import Category from "../layouts/Category";
const WomenCollection = () => {
  return (
    <div>
      <Navbar />
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
                Women's Collection
              </h1>
              <p className="text-xl text-white/80 mb-6 max-w-xl">
                Discover our latest women's collection – elegant, stylish, and
                comfortable footwear designed for every occasion. Step into
                fashion today!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections: Shop Now & Women's Collection */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900">
              Women's Collection
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

      <Category/>
      
      {/* Categories Section - Enhanced */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Casual Collection",
                image:
                  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
                description: "Bold designs for the modern man",
              },
              {
                title: "Luxury Collection",
                image:
                  "https://images.unsplash.com/photo-1622760807800-66cf1466fc08",
                description: "Elegant styles that empower",
              },
              {
                title: "Sport Collection",
                image:
                  "https://images.unsplash.com/photo-1514989940723-e8e51635b782",
                description: "Performance meets innovation",
              },
            ].map((category) => (
              <div
                key={category.title}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url('${category.image}')` }}
                />
                <div className="absolute inset-0 bg-black/40 hover:bg-black/50 transition-colors" />
                <div className="relative p-8 text-white h-[500px] flex flex-col justify-end">
                  <h3 className="text-3xl font-bold mb-4">{category.title}</h3>
                  <p className="text-lg mb-6 opacity-80">
                    {category.description}
                  </p>
                  <button className="flex items-center text-white font-semibold hover:text-gray-200 group">
                    Shop Now
                    <ChevronRight
                      size={24}
                      className="ml-2 group-hover:translate-x-2 transition-transform"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       
      <Footer />
    </div>
    // <h1>nothing </h1>
  );
};

export default WomenCollection;
