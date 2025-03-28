import React from "react";
import { ChevronRight, Star } from "lucide-react";
import Navbar from "./layouts/navbar";
import ProductCard from "./card/ProductCard";
import CatCard from "./card/catCard";
import Footer from "./layouts/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Refined */}
      <div className="relative h-[90vh] bg-gradient-to-r from-gray-900 to-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80')"
          }}
        />
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl">
              <h1 className="text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                Elevate Your Stride
              </h1>
              <p className="text-2xl text-white/80 mb-10 max-w-xl">
                Innovative design meets unparalleled comfort. Experience footwear that transforms every step.
              </p>
              <div className="flex items-center space-x-6">
                <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center gap-3 shadow-lg">
                  Explore Collection <ChevronRight size={24} strokeWidth={2.5} />
                </button>
                <div className="flex items-center text-white space-x-2">
                  <Star fill="gold" color="gold" size={24} />
                  <span className="text-lg font-medium">4.9 (3.2K Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-gray-900">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Curated selections that blend cutting-edge technology with timeless style.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProductCard
              image="/assets/image.jpg"
              name="Nike Air Max"
              price={199.99}
              rating={4.8}
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2"
              name="Adidas Ultraboost"
              price={179.99}
              rating={4.7}
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1608231387042-66d1773070a5"
              name="Jordan Retro"
              price={249.99}
              rating={4.9}
            />
          </div>
        </div>
      </section>

      {/* Categories Section - Enhanced */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Men's Collection",
                image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
                description: "Bold designs for the modern man"
              },
              {
                title: "Women's Collection",
                image: "https://images.unsplash.com/photo-1622760807800-66cf1466fc08",
                description: "Elegant styles that empower"
              },
              {
                title: "Sport Collection",
                image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782",
                description: "Performance meets innovation"
              }
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
                  <p className="text-lg mb-6 opacity-80">{category.description}</p>
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

      {/* Additional Sections: Shop Now & Women's Collection */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900">Latest Arrivals</h2>
            <p className="text-xl text-gray-600 mt-4">
              Fresh styles that define the season
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProductCard image="/assets/image.jpg" />
            <ProductCard image="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2" />
            <ProductCard image="https://images.unsplash.com/photo-1608231387042-66d1773070a5" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900">Women's Collection</h2>
            <p className="text-xl text-gray-600 mt-4">
              Styles that celebrate femininity and strength
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <CatCard image={"/assets/nike-just-do-it.png"} />
            <CatCard image={"/assets/nike-just-do-it.jpg"} />
            <CatCard image={"/assets/nike-just-do-its.jpg"} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}