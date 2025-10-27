"use client";

import { useEffect, useRef, useState } from "react";

export default function CTASection() {
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
    <section
      ref={ref}
      className="w-full py-12 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative rounded-3xl overflow-hidden transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />

          <div className="relative z-10 px-8 sm:px-12 lg:px-16 py-8 sm:py-10 lg:py-12 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of companies that have revolutionized their
              operations with Nova Solve's innovative IT and Real Estate
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+1234567890"
                className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-base w-full sm:w-auto inline-block text-center"
              >
                Call Us Now
              </a>
            </div>

            <p className="text-muted-foreground mt-6 text-xs sm:text-sm">
              No credit card required • Free consultation • 24/7 support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
