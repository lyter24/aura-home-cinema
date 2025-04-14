
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from './ProductCard';

interface CollectionTab {
  id: string;
  name: string;
}

const FeaturedCollection = () => {
  const [activeTab, setActiveTab] = useState<string>('new-arrivals');
  
  const tabs: CollectionTab[] = [
    { id: 'new-arrivals', name: 'New Arrivals' },
    { id: 'bestsellers', name: 'Bestsellers' },
    { id: 'on-sale', name: 'On Sale' }
  ];
  
  const products = {
    'new-arrivals': [
      {
        id: '1',
        name: 'Scandinavian Lounge Chair',
        price: 599,
        image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        category: 'Lounge',
        isNew: true
      },
      {
        id: '2',
        name: 'Minimalist Dining Table',
        price: 899,
        image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        category: 'Dining',
        isNew: true
      },
      {
        id: '3',
        name: 'Modern Side Table',
        price: 249,
        image: 'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        category: 'Accessories',
        isNew: true
      },
      {
        id: '4',
        name: 'Smart Refrigerator',
        price: 1299,
        originalPrice: 1499,
        image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        category: 'Appliances',
        isNew: true
      },
    ],
    'bestsellers': [
      {
        id: '5',
        name: 'Comfort Memory Foam Mattress',
        price: 899,
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        category: 'Bedroom',
      },
      {
        id: '6',
        name: 'Multifunctional Coffee Table',
        price: 499,
        image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        category: 'Living Room',
      },
      {
        id: '7',
        name: 'Ergonomic Office Chair',
        price: 399,
        image: 'https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        category: 'Home Office',
      },
      {
        id: '8',
        name: 'Stainless Steel Cookware Set',
        price: 199,
        image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        category: 'Kitchen',
      },
    ],
    'on-sale': [
      {
        id: '9',
        name: 'Sectional Sofa with Chaise',
        price: 1199,
        originalPrice: 1499,
        image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        category: 'Living Room',
        onSale: true
      },
      {
        id: '10',
        name: 'Energy Efficient Washing Machine',
        price: 649,
        originalPrice: 799,
        image: 'https://images.unsplash.com/photo-1626806787426-5510da5e8c2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        category: 'Appliances',
        onSale: true
      },
      {
        id: '11',
        name: 'Luxury Velvet Armchair',
        price: 399,
        originalPrice: 549,
        image: 'https://images.unsplash.com/photo-1617364852223-75f57e78dc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        category: 'Living Room',
        onSale: true
      },
      {
        id: '12',
        name: 'Smart Home Automation Bundle',
        price: 899,
        originalPrice: 1199,
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        category: 'Smart Home',
        onSale: true
      },
    ]
  };

  const handlePrev = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
    setActiveTab(tabs[prevIndex].id);
  };

  const handleNext = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    const nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
    setActiveTab(tabs[nextIndex].id);
  };

  return (
    <section className="section-spacing bg-white">
      <div className="cinematic-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Featured Collection</h2>
            <p className="text-silver max-w-lg">Discover our carefully selected products for your home.</p>
          </div>
          <div className="flex mt-6 md:mt-0">
            <div className="flex gap-4 mr-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors ${activeTab === tab.id ? 'text-charcoal' : 'text-silver hover:text-charcoal'}`}
                >
                  {tab.name}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-charcoal" />
                  )}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <Button onClick={handlePrev} size="icon" variant="outline" className="rounded-full">
                <ArrowLeft size={18} />
              </Button>
              <Button onClick={handleNext} size="icon" variant="outline" className="rounded-full">
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products[activeTab as keyof typeof products].map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              category={product.category}
              isNew={product.isNew}
              onSale={product.onSale}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
