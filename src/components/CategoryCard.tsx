interface CategoryCardProps {
  name: string;
  image: string;
  description: string;
}

const CategoryCard = ({ name, image, description }: CategoryCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-sm text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
