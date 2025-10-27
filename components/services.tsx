"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, Building2 } from "lucide-react";

export default function Services() {
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

  return (
    <section id="services" ref={ref} className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* IT Services Card */}
          <div
            className={`group p-8 bg-card rounded-2xl border border-border hover:border-primary transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Code2 size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              IT Services
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              From cloud infrastructure to custom software development, we
              provide enterprise-grade IT solutions that scale with your
              business.
            </p>
          </div>

          {/* Real Estate Card */}
          <div
            className={`group p-8 bg-card rounded-2xl border border-border hover:border-accent transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <Building2 size={32} className="text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Real Estate Solutions
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Premium properties and investment opportunities in prime locations
              with comprehensive support throughout your journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
