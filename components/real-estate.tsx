"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const MapPin = dynamic(() => import("lucide-react").then((m) => m.MapPin));
const TrendingUp = dynamic(() =>
  import("lucide-react").then((m) => m.TrendingUp)
);
const Award = dynamic(() => import("lucide-react").then((m) => m.Award));

export default function RealEstate() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: MapPin,
      title: "Prime Locations",
      description: "Properties in the most sought-after areas",
    },
    {
      icon: TrendingUp,
      title: "Investment Growth",
      description: "Strong ROI potential with market analysis",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Certified and verified properties",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-secondary/30" id="realestate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Real Estate Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover premium properties and investment opportunities
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`text-center transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-80 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl overflow-hidden">
            <Image
              src="/luxury-residential-property.jpg"
              alt="Luxury residential property"
              fill
              className="object-cover"
              priority={false}
              loading="lazy" // Hero-like image, loads early
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
            <Image
              src="/modern-commercial-building.png"
              alt="Commercial real estate building"
              fill
              className="object-cover"
              priority={false}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
