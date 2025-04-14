
import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Living Room', href: '#' },
    { name: 'Bedroom', href: '#' },
    { name: 'Dining', href: '#' },
    { name: 'Appliances', href: '#' },
    { name: 'Solar', href: '#' },
    { name: 'Offers', href: '#' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white bg-opacity-95 shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="cinematic-container flex items-center justify-between">
        <a href="/" className="text-2xl font-serif font-semibold tracking-tight text-charcoal">
          <span className="mr-1">House</span>
          <span className="text-silver">&</span>
          <span className="ml-1">Home</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8 ml-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-charcoal hover:text-silver transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" size="icon" className="text-charcoal hover:text-silver">
            <Search size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-charcoal hover:text-silver">
            <Heart size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-charcoal hover:text-silver">
            <User size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-charcoal hover:text-silver">
            <ShoppingCart size={20} />
            <span className="absolute top-0 right-0 bg-charcoal text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="cinematic-container py-6 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-charcoal hover:text-silver transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-6 pt-4 border-t">
              <Button variant="ghost" size="icon" className="text-charcoal">
                <Search size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-charcoal">
                <Heart size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-charcoal">
                <User size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-charcoal">
                <ShoppingCart size={20} />
                <span className="absolute top-0 right-0 bg-charcoal text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
