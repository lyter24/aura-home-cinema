
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedCollection from '@/components/FeaturedCollection';
import InspirationGallery from '@/components/InspirationGallery';
import NewsletterSignup from '@/components/NewsletterSignup';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CategoryGrid />
      <FeaturedCollection />
      <InspirationGallery />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default Index;
