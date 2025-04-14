
import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  onSale?: boolean;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  category,
  isNew = false,
  onSale = false,
  className
}) => {
  return (
    <div className={cn("group relative bg-white rounded-md overflow-hidden hover-lift", className)}>
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isNew && (
            <span className="bg-charcoal text-white text-xs px-2 py-1 rounded">New</span>
          )}
          {onSale && (
            <span className="bg-[#D14836] text-white text-xs px-2 py-1 rounded">Sale</span>
          )}
        </div>
        
        {/* Quick Actions */}
        <div className="absolute top-3 right-3">
          <Button size="icon" variant="secondary" className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white">
            <Heart size={18} className="text-charcoal" />
          </Button>
        </div>
        
        {/* Add to Cart Button (shown on hover) */}
        <div className="absolute bottom-4 left-0 right-0 mx-auto w-[calc(100%-2rem)] opacity-0 group-hover:opacity-100 transition-opacity">
          <Button className="w-full gap-2 bg-white text-charcoal hover:bg-cream">
            <ShoppingCart size={16} />
            Add to Cart
          </Button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="text-xs text-silver mb-1">{category}</div>
        <h3 className="font-medium text-lg text-charcoal mb-2 truncate">{name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-semibold text-charcoal">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm line-through text-silver">${originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
