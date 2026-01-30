import CategoryCard from './CategoryCard';
import { categories } from '../data/menuData';

const MenuCategories = () => {
  return (
    <section id="menu" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            BROWSE CATEGORIES
          </h2>
          <div className="w-24 h-1 bg-[#E4002B] mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              image={category.image}
              description={category.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCategories;
