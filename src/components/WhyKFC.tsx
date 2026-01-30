import { Clock, Shield, Award, Truck } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Quick Delivery',
    description: 'Get your order delivered hot and fresh within 30 minutes'
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Made with the highest quality ingredients and hygiene standards'
  },
  {
    icon: Award,
    title: 'Best Taste',
    description: 'Original recipe perfected over decades for that finger lickin\' good taste'
  },
  {
    icon: Truck,
    title: 'Track Order',
    description: 'Real-time order tracking from preparation to delivery'
  }
];

const WhyKFC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            WHY ORDER FROM KFC?
          </h2>
          <div className="w-24 h-1 bg-[#E4002B] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E4002B] rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyKFC;
