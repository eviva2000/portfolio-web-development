// components/WhatIDeliver.tsx

import { FC } from "react";
import { Layout, Zap, Globe,Grid ,Monitor,Timer,Users,Globe2} from "lucide-react";

const WhatIDeliver: FC = () => {
  const items = [
    {
      icon: <Monitor className="w-6 h-6 text-blue-600" />,
      title: "Modern, user-friendly designs",
      description: "Websites that look great and work seamlessly on any device.",
    },
    {
      icon: <Timer className="w-6 h-6 text-blue-600" />,
      title: "Fast load times",
      description: "Optimized performance for better SEO and customer satisfaction.",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Accessible websites",
      description: "Inclusive design so everyone can use and enjoy your site.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="what-i-deliver">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Deliver</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl">
          I help businesses turn ideas into sleek, high-performing websites that engage customers and drive results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
          >
            Let’s work together
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatIDeliver;
