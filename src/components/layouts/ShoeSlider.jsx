import React from "react"

const shoes = [
  { id: 1, name: "Nike Air Max", img:  "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/20fdb293-50ff-42f4-ae6d-87d5c55eae5c/AIR+MAX+DN8.png" },
  { id: 3, name: "Puma RS-X", img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/20fdb293-50ff-42f4-ae6d-87d5c55eae5c/AIR+MAX+DN8.png" },
  { id: 4, name: "Reebok Classic", img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/20fdb293-50ff-42f4-ae6d-87d5c55eae5c/AIR+MAX+DN8.png" },
  { id: 5, name: "New Balance 550", img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/20fdb293-50ff-42f4-ae6d-87d5c55eae5c/AIR+MAX+DN8.png" },
  { id: 6, name: "Jordan Retro", img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/20fdb293-50ff-42f4-ae6d-87d5c55eae5c/AIR+MAX+DN8.png" },
  { id: 7, name: "Under Armour HOVR", img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/20fdb293-50ff-42f4-ae6d-87d5c55eae5c/AIR+MAX+DN8.png" },
]

export default function ShoeSlider() {
  return (
    <div className="bg-gray-100 text-white py-10 px-4">
      <h2 className="text-black text-3xl font-bold mb-10 text-center">🔥 Trending Shoes</h2> {/* ↓ mb-6 se mb-10 kiya */}

      <div className="text-wight flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth scrollbar-hide">
        {shoes.map((shoe) => (
          <div
            key={shoe.id}
            className="min-w-[280px] h-[405px] flex-shrink-0 bg-gray-800 p-6 mt-5 rounded-2xl snap-start shadow-lg hover:scale-105 transition-transform"
          >
            <img
              src={shoe.img}
              alt={shoe.name}
              className="w-full h-[250px] object-contain mb-6"
            />
            <h3 className="text-xl font-semibold text-center">{shoe.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
