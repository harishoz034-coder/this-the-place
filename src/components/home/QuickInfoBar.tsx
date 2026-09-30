import React from 'react';
import { Utensils, Clock, IndianRupee, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/restaurant';

export default function QuickInfoBar() {
  const cards = [
    {
      icon: Utensils,
      title: "Cuisine & Specialities",
      detail: RESTAURANT_INFO.cuisine,
      subtext: "Dragon Chicken, Dimsums & Seafood",
    },
    {
      icon: Clock,
      title: "Dining Hours",
      detail: RESTAURANT_INFO.timings,
      subtext: "Open 7 days a week for lunch & dinner",
    },
    {
      icon: IndianRupee,
      title: "Cost for Two",
      detail: RESTAURANT_INFO.costForTwo,
      subtext: "Value Chinese & Pan-Asian dining",
    },
    {
      icon: MapPin,
      title: "Madhapur Location",
      detail: "Near Orocare Dental Clinic",
      subtext: "Main Road, Madhapur, Hyderabad",
    },
  ];

  return (
    <section className="bg-white border-y border-charcoal-200/80 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-alabaster-50/70 border border-charcoal-100 hover:border-burgundy-200 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-burgundy-700 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm font-bold text-charcoal-900 leading-snug">
                    {card.detail}
                  </p>
                  <p className="text-xs text-charcoal-500 mt-0.5">
                    {card.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
