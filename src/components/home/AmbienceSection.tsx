import React from 'react';
import { Camera, ExternalLink } from 'lucide-react';
import { RESTAURANT_LINKS } from '@/data/links';

export default function AmbienceSection() {
  const gallery = [
    {
      src: '/images/this_the_place_hero.jpg',
      title: 'Vibrant Main Dining Space',
      tag: 'Casual & Comfortable',
    },
    {
      src: '/images/this_the_place_ambience_1.jpg',
      title: 'Modern Asian-Inspired Seating',
      tag: 'Contemporary Vibe',
    },
    {
      src: '/images/this_the_place_ambience_2.jpg',
      title: 'Warm Table Enclosures',
      tag: 'Friends & Family Gatherings',
    },
    {
      src: '/images/this_the_place_ambience_3.jpg',
      title: 'Cozy Dining Hall Corner',
      tag: 'Charming Madhapur Spot',
    },
    {
      src: '/images/this_the_place_ambience_4.jpg',
      title: 'Lively Evening Ambience',
      tag: 'Open till 11:00 PM',
    },
    {
      src: '/images/this_the_place_dish_3.jpg',
      title: 'Fresh Dimsum & Starter Table',
      tag: 'Authentic Presentation',
    },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-3">
            <Camera className="w-3.5 h-3.5 text-gold-500" />
            <span>Authentic Dining Ambience</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-4">
            Experience This The Place!
          </h2>
          <p className="text-charcoal-600 text-sm sm:text-base">
            Take a look inside our relaxed casual dining space designed for great food, memorable conversations, and authentic flavours.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {gallery.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-charcoal-200 shadow-sm hover:shadow-luxury transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-bold text-gold-400 uppercase tracking-wider block mb-1">
                  {item.tag}
                </span>
                <h4 className="font-serif text-lg font-bold text-white leading-snug">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* View on Zomato CTA */}
        <div className="text-center">
          <a
            href={RESTAURANT_LINKS.zomatoPhotos}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-alabaster-50 hover:bg-alabaster-100 text-charcoal-800 border border-charcoal-300 font-bold text-sm shadow-sm transition"
          >
            <span>View All Photos on Zomato</span>
            <ExternalLink className="w-4 h-4 text-burgundy-700" />
          </a>
        </div>
      </div>
    </section>
  );
}
