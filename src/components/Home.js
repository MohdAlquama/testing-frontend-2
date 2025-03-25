import React from "react";
import Navbar from "./layouts/navbar";
import ProductCard from "./card/ProductCard";
import { ChevronRight } from "lucide-react"; // Import the missing ChevronRight icon
import CatCard from "./card/catCard";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section 2 */}
      <div className="relative h-[80vh] bg-neutral-100">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-90">
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold text-white mb-6">
                Step into Luxury
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Discover our exclusive collection of premium footwear designed
                for those who demand excellence.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-black hover:text-white transition-colors flex items-center gap-2">
                Shop Collection <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>

      {/* Categories */}
      <div className="py-20 bg-neutral-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <div className="relative h-[400px] group cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Men's Collection
                </h3>
                <button className="text-white flex items-center gap-2 hover:gap-4 transition-all">
                  Shop Now <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Category 2 */}
            <div className="relative h-[400px] group cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1622760807800-66cf1466fc08')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Women's Collection
                </h3>
                <button className="text-white flex items-center gap-2 hover:gap-4 transition-all">
                  Shop Now <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Category 3 */}
            <div className="relative h-[400px] group cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514989940723-e8e51635b782')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Sport Collection
                </h3>
                <button className="text-white flex items-center gap-2 hover:gap-4 transition-all">
                  Shop Now <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h3 className=" font-bold mb-5 text-center mt-12 text-2xl">
              DON'T MISS
            </h3>
            <CatCard image={"/assets/image.jpg"} />
          </div>
        </div>
      </div>
            
      
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">SHOP NOW</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard image="/assets/image.jpg" />
            <ProductCard image="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2" />
            <ProductCard image="https://images.unsplash.com/photo-1608231387042-66d1773070a5" />
          </div>
        </div>
      </div>


      <h3 className=" font-bold my-1 text-center text-2xl"> WOMEN'S COLLECTION</h3>
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CatCard image={"/assets/nike-just-do-it.png"} />
            <CatCard image={"/assets/nike-just-do-it.jpg"} />
            <CatCard image={"/assets/nike-just-do-its.jpg"} />
          </div>
        </div>
      </div>

      <footer className="bg-white py-10">
        {/* upper class baar text  */}

        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Icons</h3>
            <ul className="text-gray-500">
              <li>Air Force 1</li>
              <li>Huarache</li>
              <li>Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Shoes</h3>
            <ul className="text-gray-600">
              <li>All Shoes</li>
              <li>Custom Shoes</li>
              <li>Jordan Shoes</li>
              <li>Running Shoes</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Clothing</h3>
            <ul className="text-gray-600">
              <li>All Clothing</li>
              <li>Modest Wear</li>
              <li>Hoodies & Pullovers</li>
              <li>Shirts & Tops</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Kids'</h3>
            <ul className="text-gray-600">
              <li>Infant & Toddler Shoes</li>
              <li>Kids Shoes</li>
              <li>Kids Jordan Shoes</li>
              <li>Kids Basketball Shoes</li>
            </ul>
          </div>
        </div>

        <hr class="border-gray-300 my-4" />

        {/* Bottom Section hear  */}

        <div className="container mx-auto px-6 mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-600">
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul>
              <li>Find A Store</li>
              <li>Become A Member</li>
              <li>Send Us Feedback</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul>
              <li>Get Help</li>
              <li>Order Status</li>
              <li>Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Contact Us On Nike.com Inquiries</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li>About Nike</li>
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
              <li>Report a Concern</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
