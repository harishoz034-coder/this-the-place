import React from 'react';
import MenuPreview from '@/components/home/MenuPreview';
import OffersSection from '@/components/home/OffersSection';
import LocationSection from '@/components/home/LocationSection';

export default function MenuPage() {
  return (
    <div className="pt-6">
      <MenuPreview />
      <OffersSection />
      <LocationSection />
    </div>
  );
}
