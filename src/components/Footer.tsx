import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#202124] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#E4002B] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h2v6H7v-6zm8 0h2v6h-2v-6zm-4 0h2v6h-2v-6z"/>
                </svg>
              </div>
              <span className="ml-2 text-2xl font-bold">KFC</span>
            </div>
            <p className="text-gray-400 text-sm">
              It's finger lickin' good!
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">KFC India</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E4002B] transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E4002B] transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E4002B] transition-colors text-sm">
                  Our Golden Past
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E4002B] transition-colors text-sm">
                  Responsible Disclosure
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E4002B] transition-colors text-sm">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E4002B] transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E4002B] transition-colors text-sm">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E4002B] transition-colors text-sm">
                  Caution Notice
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E4002B] transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E4002B] transition-colors text-sm">
                  Find a KFC
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#E4002B] transition-colors text-sm">
                  FAQs
                </a>
              </li>
            </ul>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#E4002B] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#E4002B] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#E4002B] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#E4002B] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright © 2024 KFC Corporation. All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/320px-Download_on_the_App_Store_Badge.svg.png"
                alt="Download on App Store"
                className="h-10"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/320px-Google_Play_Store_badge_EN.svg.png"
                alt="Get it on Google Play"
                className="h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
