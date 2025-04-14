
import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  CreditCard,
  TruckIcon,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const features = [
    { icon: TruckIcon, text: 'Free Shipping Nationwide' },
    { icon: ShieldCheck, text: 'Secure Payment Gateway' },
    { icon: RotateCcw, text: '30 Day Returns Policy' },
    { icon: CreditCard, text: 'Multiple Payment Options' },
  ];
  
  return (
    <footer className="bg-charcoal text-white">
      {/* Features */}
      <div className="border-b border-white/10">
        <div className="cinematic-container py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <feature.icon className="h-6 w-6 text-cream mr-3" />
                <span className="text-sm text-white/80">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="cinematic-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-serif mb-6">
              <span className="mr-1">House</span>
              <span className="text-silver">&</span>
              <span className="ml-1">Home</span>
            </div>
            <p className="text-white/70 mb-6">
              Your one-stop destination for premium furniture and home appliances. 
              We offer a curated selection of quality products designed for modern living.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="outline" className="rounded-full border-white/20 hover:bg-white/10">
                <Facebook size={18} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-white/20 hover:bg-white/10">
                <Twitter size={18} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-white/20 hover:bg-white/10">
                <Instagram size={18} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full border-white/20 hover:bg-white/10">
                <Linkedin size={18} />
              </Button>
            </div>
          </div>
          
          {/* Links Columns */}
          <div>
            <h3 className="text-lg font-medium mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Living Room</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Bedroom</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Dining</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Appliances</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Solar Equipment</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Store Locations</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={18} className="mr-3 text-cream shrink-0" />
                <span className="text-white/70">123 Main Street, City, Country 12345</span>
              </li>
              <li className="flex">
                <Phone size={18} className="mr-3 text-cream shrink-0" />
                <a href="tel:+1234567890" className="text-white/70 hover:text-white transition-colors">(123) 456-7890</a>
              </li>
              <li className="flex">
                <Mail size={18} className="mr-3 text-cream shrink-0" />
                <a href="mailto:info@houseandhome.com" className="text-white/70 hover:text-white transition-colors">info@houseandhome.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="cinematic-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              &copy; {year} House & Home. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
