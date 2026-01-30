import { MapPin, Menu, ShoppingCart, User } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [cartCount] = useState(3);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#E4002B] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h2v6H7v-6zm8 0h2v6h-2v-6zm-4 0h2v6h-2v-6z"/>
                  </svg>
                </div>
                <span className="ml-2 text-2xl font-bold text-[#202124]">KFC</span>
              </div>
            </div>

            <button className="hidden md:flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:border-[#E4002B] transition-colors">
              <MapPin className="w-5 h-5 text-[#E4002B]" />
              <span className="text-sm font-medium">Select Location</span>
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="text-sm font-semibold text-gray-700 hover:text-[#E4002B] transition-colors">
              MENU
            </a>
            <a href="#deals" className="text-sm font-semibold text-gray-700 hover:text-[#E4002B] transition-colors">
              DEALS
            </a>
            <button className="flex items-center space-x-2 text-sm font-semibold text-gray-700 hover:text-[#E4002B] transition-colors">
              <User className="w-5 h-5" />
              <span>SIGN IN</span>
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#E4002B] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden border-t border-gray-200">
        <div className="flex items-center px-4 py-3">
          <MapPin className="w-5 h-5 text-[#E4002B] mr-2" />
          <span className="text-sm font-medium">Select Location</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
