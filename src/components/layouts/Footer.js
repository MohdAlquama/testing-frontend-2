import React from 'react';

const Footer = () => {
  // Upper section menu items
  const menuSections = [
    {
      title: 'Icons',
      items: ['Air Force 1', 'Huarache', 'Air Max 90', 'Air Max 95']
    },
    {
      title: 'Shoes',
      items: ['All Shoes', 'Custom Shoes', 'Jordan Shoes', 'Running Shoes']
    },
    {
      title: 'Clothing',
      items: ['All Clothing', 'Modest Wear', 'Hoodies & Pullovers', 'Shirts & Tops']
    },
    {
      title: "Kids'",
      items: ['Infant & Toddler Shoes', 'Kids Shoes', 'Kids Jordan Shoes', 'Kids Basketball Shoes']
    }
  ];

  // Lower section menu items
  const footerSections = [
    {
      title: 'Resources',
      items: ['Find A Store', 'Become A Member', 'Send Us Feedback']
    },
    {
      title: 'Help',
      items: ['Get Help', 'Order Status', 'Delivery', 'Returns', 'Payment Options', 'Contact Us On Nike.com Inquiries']
    },
    {
      title: 'Company',
      items: ['About Nike', 'News', 'Careers', 'Investors', 'Sustainability', 'Report a Concern']
    }
  ];

  return (
    <footer className="bg-white">
      {/* Upper Section */}
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {menuSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="text-gray-500 space-y-2">
                {section.items.map((item) => (
                  <li 
                    key={item} 
                    className="cursor-pointer hover:text-black transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 my-4" />

      {/* Lower Footer Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-600">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="text-lg font-bold text-black mb-4 border-b pb-2">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="hover:text-black transition-colors cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Social and Legal Links (Optional) */}
          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-wrap justify-between items-center">
            <div className="flex space-x-4 text-gray-600">
              {['© 2024 Nike', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <span key={item} className="hover:text-black cursor-pointer">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;