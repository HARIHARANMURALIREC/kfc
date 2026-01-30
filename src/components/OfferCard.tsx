interface OfferCardProps {
  title: string;
  description: string;
  image: string;
  terms: string;
}

const OfferCard = ({ title, description, image, terms }: OfferCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-[#E4002B] text-white px-3 py-1 rounded-full text-xs font-bold">
          OFFER
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 mb-3 leading-relaxed">{description}</p>
        <p className="text-xs text-gray-500 mb-4">{terms}</p>
        <button className="w-full bg-[#E4002B] hover:bg-[#c00024] text-white font-semibold py-3 px-4 rounded-full transition-colors duration-300">
          Apply Offer
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
