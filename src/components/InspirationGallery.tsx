
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const InspirationGallery = () => {
  const inspirations = [
    {
      id: 1,
      title: 'Modern Minimalism',
      image: 'https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
      description: 'Clean lines and functional spaces define this aesthetic.'
    },
    {
      id: 2,
      title: 'Cozy Scandinavian',
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Embrace hygge with warm textures and natural elements.'
    },
    {
      id: 3,
      title: 'Contemporary Luxury',
      image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      description: 'Elegant materials and sophisticated design elements.'
    },
  ];

  return (
    <section className="section-spacing bg-charcoal text-white">
      <div className="cinematic-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Find Your Inspiration</h2>
          <p className="text-silver/90 max-w-lg mx-auto">Explore curated interior designs to discover your perfect style.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {inspirations.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-md hover-lift">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm mb-4">{item.description}</p>
                <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white hover:text-charcoal">
                  View Collection <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InspirationGallery;
