
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-transparent z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://static.videezy.com/system/resources/previews/000/041/914/original/22.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="cinematic-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white font-medium tracking-tight leading-tight mb-6 animate-fade-in">
              <span className="block">Transform your home</span>
              <span className="block">with timeless elegance</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Discover our curated collection of premium furniture and appliances designed for modern living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" className="bg-white text-charcoal hover:bg-cream">
                Shop Now <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Collections
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-center justify-center">
          <div className="w-1.5 h-3 bg-white/80 rounded-full animate-fade-in"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
