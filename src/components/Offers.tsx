import OfferCard from './OfferCard';
import { offers } from '../data/menuData';

const Offers = () => {
  return (
    <section id="deals" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            EXCLUSIVE DEALS
          </h2>
          <div className="w-24 h-1 bg-[#E4002B] mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">
            Save big with our special offers and combo deals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <OfferCard
              key={offer.id}
              title={offer.title}
              description={offer.description}
              image={offer.image}
              terms={offer.terms}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
