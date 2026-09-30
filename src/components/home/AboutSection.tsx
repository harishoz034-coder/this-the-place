import React from 'react';
import { Sparkles, CheckCircle2, Flame, Award, Heart, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '@/data/restaurant';

export default function AboutSection() {
  const highlights = [
    {
      icon: Flame,
      title: "Wok-Mastered Asian Flavours",
      desc: "High-flame wok cooking locking in intense smoky aromatics, crisp veggies, and succulent proteins.",
    },
    {
      icon: Utensils,
      title: "Handmade Dimsums & Momos",
      desc: "Artisanal steamed and fried dumplings prepared fresh daily with authentic Sichuan chilli dips.",
    },
    {
      icon: Heart,
      title: "Fresh Seafood Selections",
      desc: "Fresh tiger prawns and tender fish fillets tossed in aromatic butter garlic and Kung Pao sauces.",
    },
    {
      icon: Award,
      title: "Exceptional Taste & Value",
      desc: "Lavish Chinese and Pan-Asian feast portions starting at just ₹950 for two people in Madhapur.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-ivory-50/70 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Collage with Authentic Zomato Photos */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md border border-charcoal-200">
                  <img
                    src="/images/this_the_place_ambience_1.jpg"
                    alt="This The Place Dining Atmosphere"
                    className="w-full h-52 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-charcoal-200">
                  <img
                    src="/images/this_the_place_ambience_3.jpg"
                    alt="This The Place Restaurant Seating"
                    className="w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden shadow-md border border-charcoal-200">
                  <img
                    src="/images/this_the_place_ambience_2.jpg"
                    alt="This The Place Modern Interior"
                    className="w-full h-44 sm:h-52 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md border border-charcoal-200 bg-burgundy-700 text-white p-6 flex flex-col justify-center text-center">
                  <span className="font-serif text-3xl sm:text-4xl font-black text-gold-400 mb-1">
                    4.3 ★
                  </span>
                  <p className="text-xs uppercase tracking-widest font-semibold text-alabaster-100">
                    381+ Dining Reviews
                  </p>
                  <p className="text-[11px] text-alabaster-200 mt-2">
                    Madhapur's Favourite Pan-Asian & Chinese
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Accent */}
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-gold-400/10 rounded-full blur-2xl -z-10" />
          </div>

          {/* Right Column: Story & Highlights */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>The Story of This The Place!</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-6 leading-tight">
              A Culinary Journey of Pan-Asian & Oriental Delights
            </h2>

            <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed mb-6">
              Located <strong>Near Orocare Dental Clinic in Madhapur</strong>, <strong>This The Place!</strong> offers an unforgettable casual dining experience celebrating authentic Chinese, Oriental, fresh seafood, and popular Asian street appetizers. From our signature Dragon Chicken and Butter Garlic Prawns to hearty bowls of Hakka Noodles and steaming Dimsums, each dish is made fresh to order.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-charcoal-200/80">
                    <div className="w-8 h-8 rounded-lg bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-charcoal-900 mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-charcoal-500 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-4 text-xs font-bold text-burgundy-800">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Fresh Seafood Daily</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Cozy Dining Ambience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Open 7 Days a Week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
