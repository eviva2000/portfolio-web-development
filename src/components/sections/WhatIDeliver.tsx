"use client";

import { FC } from "react";
import { Monitor,Users,Timer} from "lucide-react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import webAnimation from "../../lotties/web-design.json";

// Lazy-load Lottie component
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const WhatIDeliver: FC = () => {
  const items = [
    {
      icon: <Monitor className="w-6 h-6 icon" />,
      title: "Modern, user-friendly designs",
      description: "Websites that look great and work seamlessly on any device.",
    },
    {
      icon: <Timer className="w-6 h-6 icon" />,
      title: "Fast load times",
      description: "Optimized performance for better SEO and customer satisfaction.",
    },
    {
      icon: <Users className="w-6 h-6  icon" />,
      title: "Accessible websites",
      description: "Inclusive design so everyone can use and enjoy your site.",
    },
  ];

  return (
    <section className="py-30 sm:py-42 bg-gray-50" id="what-i-deliver">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Deliver</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl">
            I help businesses turn ideas into sleek, high-performing websites that engage customers and drive results.
          </p>
          <div className="space-y-6">
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
              className="inline-block bg-[#F5B900] hover:bg-yellow-400 text-white font-semibold px-6 py-3 rounded-md shadow transition"
            >
              Let’s work together
            </a>
          </div>
        </div>

        {/* Right: Animated Lottie */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-md mx-auto"
        >
          <Lottie animationData={webAnimation} loop={true} />
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDeliver;
