
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  size?: 'normal' | 'large';
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, link, size = 'normal' }) => {
  return (
    <a 
      href={link} 
      className={cn(
        "group relative overflow-hidden rounded-md hover-lift",
        size === 'large' ? "col-span-2 row-span-2" : ""
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent z-10"></div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ height: size === 'large' ? '100%' : '320px' }}
      />
      <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
        <h3 className="text-xl md:text-2xl font-serif font-medium text-white mb-2">{title}</h3>
        <div className="flex items-center text-white/80 text-sm group-hover:text-white transition-colors">
          <span>Shop now</span>
          <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </a>
  );
};

const CategoryGrid = () => {
  const categories = [
    { 
      title: "Living Room", 
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80", 
      link: "#",
      size: 'large' as const
    },
    { 
      title: "Bedroom", 
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
      link: "#" 
    },
    { 
      title: "Dining", 
      image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
      link: "#" 
    },
    { 
      title: "Appliances", 
      image: "https://images.unsplash.com/photo-1585771273272-0f5194b891c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
      link: "#" 
    },
    { 
      title: "Solar Solutions", 
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
      link: "#" 
    }
  ];

  return (
    <section className="section-spacing bg-cream">
      <div className="cinematic-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Shop by Category</h2>
            <p className="text-silver max-w-lg">Explore our carefully curated categories of premium furniture and appliances.</p>
          </div>
          <a href="#" className="mt-4 md:mt-0 text-charcoal font-medium hover:text-silver transition-colors flex items-center">
            View all categories <ArrowRight size={16} className="ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              image={category.image}
              link={category.link}
              size={category.size}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
