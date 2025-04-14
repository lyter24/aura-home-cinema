
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSignup = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="cinematic-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Stay Inspired</h2>
          <p className="text-silver mb-8">Subscribe to receive exclusive offers, interior design tips, and new product announcements.</p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="h-12 border-charcoal/20 focus:border-charcoal"
            />
            <Button className="h-12 px-8 bg-charcoal hover:bg-charcoal/80">
              Subscribe
            </Button>
          </div>
          
          <p className="text-xs text-silver/80 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
