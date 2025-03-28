import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Heart, Search, Menu ,User} from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null); // Ref for the mobile menu

  // Toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu if the user clicks outside of it
  const handleClickOutside = (event) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  }; 

  
  // Set up the event listener on component mount and cleanup on unmount
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <button
              className="text-gray-500 lg:hidden"
              onClick={toggleMobileMenu}
            >
              <Menu size={24} />
            </button>
            <a href="/" className="ml-4 lg:ml-0">
              <h1 className="text-2xl font-bold">LUXE</h1>
            </a>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to={"/men"} className="text-gray-600 hover:text-black">Men</Link>
            <a href="#" className="text-gray-600 hover:text-black">Women</a>
            <a href="#" className="text-gray-600 hover:text-black">Sport</a>
            <a href="#" className="text-gray-600 hover:text-black">Collection</a>
            <a href="#" className="text-gray-600 hover:text-black">Sale</a>
          </div>

          {/* Desktop and Mobile Action Icons */}
          <div className="flex items-center space-x-6">
            <a href="/login-page">
            <button className="text-gray-600 hover:text-black">
              <User size={20} />
            </button>
              </a>
            <button className="text-gray-600 hover:text-black">
              <Heart size={20} />
            </button>
            <button className="text-gray-600 hover:text-black relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Hidden on large screens) */}
        <div
          ref={mobileMenuRef} // Attach the ref to the mobile menu
          className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-4`}
        >
          <a href="#" className="block text-gray-600 hover:text-black py-2">Men</a>
          <a href="#" className="block text-gray-600 hover:text-black py-2">Women</a>
          <a href="#" className="block text-gray-600 hover:text-black py-2">Sport</a>
          <a href="#" className="block text-gray-600 hover:text-black py-2">Collection</a>
          <a href="#" className="block text-gray-600 hover:text-black py-2">Sale</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;