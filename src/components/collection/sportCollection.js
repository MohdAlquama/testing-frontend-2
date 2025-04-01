import React from "react";
import Navbar from "../layouts/navbar";
import Footer from "../layouts/Footer";
import CatCard from "../card/catCard";
const SportCollection = () => {
  return (
    <>
      <Navbar />
      <div className=" py-20 bg-white h-auto w-auto overflow-hidden m-10 mt-auto container mx-auto px-6">
        <CatCard image={"/assets/image121.jpg"} />
      </div>

      {/* Additional Sections: Shop Now & Women's Collection */}
      <section className=" bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900">
              Tranding Sport's
            </h2>
            <p className="text-xl text-gray-600 mt-4">
              Styles that celebrate femininity and strength
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 overflow-hidden">
            <div className="flex flex-col">
              <div className="w-full h-56 object-cover transition-transform duration-700 hover:scale-95">
                <CatCard image={"/assets/running_shoes_PNG5817.png"} />
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
            </div>

            <div className="flex flex-col">
              <div className="w-full h-56 object-cover transition-transform duration-700 hover:scale-95">
                <CatCard image={"/assets/ab.jpg"} />
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
              
            </div>
            <div className="flex flex-col">
              <div className="transition-transform duration-700 hover:scale-95">
              <CatCard image={"/assets/running_shoes_PNG5817.png"} />
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
        </div>
      </section>
      

{/* Additional Sections: Shop Now & Women's Collection */}
<section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900">
              Letest Sport's 
            </h2>
            <p className="text-xl text-gray-600 mt-4">
              Styles that celebrate femininity and strength
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 overflow-hidden ">


            <div className="flex flex-col  transform transition-transform duration-300 hover:scale-105 ">


              <CatCard image={"/assets/ABC.jpg"} />
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
            <div className="flex flex-col  transform transition-transform duration-300 hover:scale-105">
              <CatCard image={"/assets/product-jpeg.jpeg"} />
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
            <div className="flex flex-col  transform transition-transform duration-300 hover:scale-105">
              <CatCard image={"/assets/ABC.jpg"} />
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

      <Footer />
    </>
  );
};

export default SportCollection;
