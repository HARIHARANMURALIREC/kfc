import { Percent } from 'lucide-react';

const PromoStrip = () => {
  return (
    <div className="bg-[#E4002B] text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-2 text-sm md:text-base font-semibold">
          <Percent className="w-5 h-5" />
          <span>FREE DELIVERY ON ORDERS ABOVE Rs. 299 | USE CODE: FREEDEL</span>
          <Percent className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default PromoStrip;
