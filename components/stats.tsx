"use client";

import { useEffect, useRef, useState } from "react";

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "10K+",
      label: "Happy Clients",
      color: "from-purple-500 to-purple-600",
    },
    {
      number: "50M+",
      label: "Sq. Ft. Developed",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      number: "15+",
      label: "Years Experience",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-b from-background via-primary/5 to-background border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Our Impact
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Delivering excellence across IT and Real Estate sectors with proven
            results
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative p-10 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-500 group overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <p className="text-lg sm:text-xl text-muted-foreground font-semibold">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
