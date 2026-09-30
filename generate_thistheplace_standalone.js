const fs = require('fs');
const path = require('path');

const projectDir = 'C:\\Users\\haris\\.gemini\\antigravity\\scratch\\this-the-place';
const imagesDir = path.join(projectDir, 'public', 'images');
const outputHtmlPath = 'C:\\Users\\haris\\Downloads\\this-the-place.html';
const artifactHtmlPath = 'C:\\Users\\haris\\.gemini\\antigravity\\brain\\23f98256-8721-42b1-9de6-55b0debcd5d0\\this-the-place.html';

// Helper to convert local image to base64 data URI
function getBase64Image(filename) {
  const filePath = path.join(imagesDir, filename);
  if (fs.existsSync(filePath)) {
    const ext = path.extname(filename).toLowerCase().replace('.', '');
    let mimeType = 'image/jpeg';
    if (ext === 'png') mimeType = 'image/png';
    if (ext === 'webp') mimeType = 'image/webp';
    const base64Data = fs.readFileSync(filePath).toString('base64');
    return `data:${mimeType};base64,${base64Data}`;
  }
  return '';
}

console.log('Encoding authentic Zomato images to Base64...');
const imgHero = getBase64Image('this_the_place_hero.jpg');
const imgAmbience1 = getBase64Image('this_the_place_ambience_1.jpg');
const imgAmbience2 = getBase64Image('this_the_place_ambience_2.jpg');
const imgAmbience3 = getBase64Image('this_the_place_ambience_3.jpg');
const imgAmbience4 = getBase64Image('this_the_place_ambience_4.jpg');

const imgDish1 = getBase64Image('this_the_place_dish_1.jpg');
const imgDish2 = getBase64Image('this_the_place_dish_2.jpg');
const imgDish3 = getBase64Image('this_the_place_dish_3.jpg');
const imgDish4 = getBase64Image('this_the_place_dish_4.jpg');
const imgDish5 = getBase64Image('this_the_place_dish_5.jpg');
const imgDish6 = getBase64Image('this_the_place_dish_6.jpg');
const imgDish7 = getBase64Image('this_the_place_dish_7.jpg');
const imgDish8 = getBase64Image('this_the_place_dish_8.jpg');
const imgDish9 = getBase64Image('this_the_place_dish_9.jpg');
const imgDish10 = getBase64Image('this_the_place_dish_10.jpg');
const imgDish11 = getBase64Image('this_the_place_dish_11.jpg');
const imgDish12 = getBase64Image('this_the_place_dish_12.jpg');
const imgDish13 = getBase64Image('this_the_place_dish_13.jpg');
const imgDish14 = getBase64Image('this_the_place_dish_14.jpg');
const imgDish15 = getBase64Image('this_the_place_dish_15.jpg');

const menuData = [
  // Chef Specialities
  { id: 'sp1', name: 'This The Place Special Dragon Chicken Platter', category: 'chef-specials', price: 369, originalPrice: 419, description: 'Crispy marinated chicken strips tossed with crunchy cashew nuts, red chillies, and secret sweet-spicy dragon sauce.', isVeg: false, isBestseller: true, isSpecial: true, portion: 'Serves 1-2', image: imgDish1 },
  { id: 'sp2', name: 'Sizzling Butter Garlic Prawns (Wok Tossed)', category: 'chef-specials', price: 449, originalPrice: 499, description: 'Fresh succulent king prawns tossed in fragrant burnt garlic, fresh herbs, and rich golden butter sauce.', isVeg: false, isBestseller: true, isSpecial: true, portion: 'Serves 1-2', image: imgDish2 },
  { id: 'sp3', name: 'Pan-Fried Steamed Chicken Dimsums (8 Pcs)', category: 'chef-specials', price: 289, description: 'Handcrafted translucent dumplings stuffed with seasoned minced chicken and spring onions, served with spicy Sichuan chilli oil dip.', isVeg: false, isBestseller: true, isSpecial: true, portion: '8 Pieces', image: imgDish3 },
  { id: 'sp4', name: 'Crispy Kung Pao Fish Fillet', category: 'chef-specials', price: 399, description: 'Battered tender fish cubes wok-tossed with roasted peanuts, Sichuan peppercorns, dried red peppers, and scallions.', isVeg: false, isBestseller: true, portion: 'Serves 1-2', image: imgDish4 },

  // Dimsums & Momos
  { id: 'dm1', name: 'Steamed Classic Chicken Momos', category: 'dimsums-momos', price: 219, description: 'Juicy minced chicken encased in thin wrapper, steamed to perfection with homemade tomato sesame dip.', isVeg: false, isBestseller: true, portion: '6 Pieces', image: imgDish5 },
  { id: 'dm2', name: 'Crispy Fried Cheese & Corn Momos', category: 'dimsums-momos', price: 199, description: 'Crisp golden fried momos filled with sweet corn kernels and melted mozzarella cheese.', isVeg: true, portion: '6 Pieces', image: imgDish6 },
  { id: 'dm3', name: 'Spicy Schezwan Chicken Steamed Dimsums', category: 'dimsums-momos', price: 279, description: 'Spicy seasoned chicken dumplings drizzled with house hot garlic Schezwan sauce.', isVeg: false, isBestseller: true, portion: '8 Pieces', image: imgDish7 },
  { id: 'dm4', name: 'Steamed Exotic Veg Dimsums', category: 'dimsums-momos', price: 239, description: 'Delicate dumplings stuffed with finely minced broccoli, water chestnuts, carrots, and mushrooms.', isVeg: true, portion: '8 Pieces', image: imgDish8 },

  // Seafood & Fish
  { id: 'sf1', name: 'Crispy Apollo Fish (Hyderabadi Wok)', category: 'seafood-fish', price: 389, originalPrice: 429, description: 'Boneless fish fillets marinated in spiced yogurt and deep fried, tempered with curry leaves and green chillies.', isVeg: false, isBestseller: true, portion: 'Serves 1-2', image: imgDish9 },
  { id: 'sf2', name: 'Chilli Garlic Prawns Dry', category: 'seafood-fish', price: 439, description: 'Plump prawns tossed with minced garlic, chopped bird-eye chillies, and savory dark soy sauce.', isVeg: false, isBestseller: true, portion: 'Serves 1-2', image: imgDish10 },
  { id: 'sf3', name: 'Golden Crispy Loose Prawns', category: 'seafood-fish', price: 449, description: 'Tempura battered crunchy prawns seasoned with peri peri salt and crushed black pepper.', isVeg: false, portion: 'Serves 1-2', image: imgDish11 },

  // Crispy Asian Appetizers
  { id: 'as1', name: 'Classic Chilli Chicken Dry', category: 'asian-starters', price: 299, originalPrice: 339, description: 'Indo-Chinese style crispy chicken wok-tossed with capsicum, diced onions, and green chillies.', isVeg: false, isBestseller: true, portion: 'Serves 1-2', image: imgDish12 },
  { id: 'as2', name: 'Chicken 65 (Crispy Red Spice)', category: 'asian-starters', price: 289, description: 'All-time favorite southern spice battered chicken tossed with aromatic curry leaves and yogurt glaze.', isVeg: false, isBestseller: true, portion: 'Serves 1-2', image: imgDish13 },
  { id: 'as3', name: 'Crispy Paneer Majestic', category: 'asian-starters', price: 269, description: 'Tender paneer batons fried and coated in royal yogurt, green chilli, and mint sauce.', isVeg: true, isBestseller: true, portion: 'Serves 1-2', image: imgDish14 },
  { id: 'as4', name: 'Veg Manchurian Dry (Crispy Balls)', category: 'asian-starters', price: 229, description: 'Minced veggie balls tossed in ginger, garlic, soy glaze, and spring onions.', isVeg: true, portion: 'Serves 1-2', image: imgDish15 },

  // Wok Noodles & Fried Rice
  { id: 'nr1', name: 'Chicken Hakka Noodles (Wok Tossed)', category: 'noodles-rice', price: 259, originalPrice: 289, description: 'Long noodles tossed over fierce wok with shredded chicken, crunchy carrots, cabbage, and light soy.', isVeg: false, isBestseller: true, portion: 'Serves 1-2' },
  { id: 'nr2', name: 'Chicken Schezwan Fried Rice', category: 'noodles-rice', price: 269, description: 'Fluffy basmati rice tossed with egg, shredded chicken, and fiery homemade Schezwan sauce.', isVeg: false, isBestseller: true, portion: 'Serves 1-2' },
  { id: 'nr3', name: 'Burnt Garlic Veg Fried Rice', category: 'noodles-rice', price: 229, description: 'Aromatic basmati rice cooked with golden crispy roasted garlic and fresh spring onions.', isVeg: true, portion: 'Serves 1-2' },
  { id: 'nr4', name: 'Egg & Chicken Mixed Wok Noodles', category: 'noodles-rice', price: 279, description: 'Loaded noodles tossed with scramble egg, juicy chicken strips, and shredded vegetables.', isVeg: false, portion: 'Serves 1-2' },

  // Oriental Main Course Gravies
  { id: 'gr1', name: 'Chicken in Hot Garlic Sauce (Gravy)', category: 'main-gravies', price: 319, description: 'Tender chicken slices simmered in thick spicy garlic and red chilli sauce. Best with fried rice or noodles.', isVeg: false, isBestseller: true, portion: 'Serves 1-2' },
  { id: 'gr2', name: 'Paneer Chilli Gravy', category: 'main-gravies', price: 279, description: 'Soft paneer cubes in savory soya-chilli broth loaded with bell peppers and onions.', isVeg: true, portion: 'Serves 1-2' },
  { id: 'gr3', name: 'Schezwan Chicken Gravy', category: 'main-gravies', price: 319, description: 'Fiery chicken gravy prepared with whole Sichuan peppers and fresh scallions.', isVeg: false, portion: 'Serves 1-2' },

  // Desserts & Beverages
  { id: 'db1', name: 'Sizzling Brownie with Vanilla Ice Cream', category: 'desserts-beverages', price: 189, originalPrice: 219, description: 'Hot chocolate fudge brownie served on a sizzling platter with cold vanilla ice cream and chocolate drizzle.', isVeg: true, isBestseller: true, isSpecial: true, portion: '1 Platter' },
  { id: 'db2', name: 'Fresh Mint Lime Mojito', category: 'desserts-beverages', price: 99, description: 'Refreshing sparkling cooler with muddled mint leaves, lime juice, and soda.', isVeg: true, portion: '350 ml' },
  { id: 'db3', name: 'Blue Ocean Curacao Sparkler', category: 'desserts-beverages', price: 119, description: 'Chilled fizzy mocktail infused with blue curacao citrus essence and lemon twist.', isVeg: true, portion: '350 ml' }
];

const categories = [
  { id: 'all', name: 'All Dishes' },
  { id: 'chef-specials', name: 'Chef Specialities' },
  { id: 'dimsums-momos', name: 'Dimsums & Momos' },
  { id: 'seafood-fish', name: 'Seafood & Fish Starters' },
  { id: 'asian-starters', name: 'Crispy Asian Appetizers' },
  { id: 'noodles-rice', name: 'Wok Noodles & Fried Rice' },
  { id: 'main-gravies', name: 'Oriental Main Course Gravies' },
  { id: 'desserts-beverages', name: 'Desserts & Beverages' },
];

const htmlContent = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>This The Place! | Authentic Chinese, Oriental & Seafood • Madhapur, Hyderabad</title>
  <meta name="description" content="Experience delicious Chinese, Pan-Asian and Seafood dining at This The Place! Madhapur. Signature Dragon Chicken, Butter Garlic Prawns, Handcrafted Dimsums, Momos & Noodles.">
  
  <!-- Google Fonts: Playfair Display & Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            burgundy: {
              50: '#FDF2F3',
              100: '#FCE7E9',
              200: '#F7C5CA',
              300: '#F099A3',
              600: '#A41E30',
              700: '#7E1725',
              800: '#63111C',
              900: '#480B13',
              950: '#2A060B',
            },
            gold: {
              400: '#DFC280',
              500: '#C5A05A',
              600: '#A6823B',
            },
            charcoal: {
              100: '#F3F4F6',
              200: '#E5E7EB',
              300: '#D1D5DB',
              400: '#9CA3AF',
              500: '#6B7280',
              600: '#4B5563',
              700: '#374151',
              800: '#1F2937',
              900: '#111827',
              950: '#0B0F19',
            },
            alabaster: {
              50: '#FAF8F5',
              100: '#F5F2EC',
              200: '#ECE6DC',
            },
            ivory: {
              50: '#FDFCF9',
              100: '#FAF7F0',
            }
          },
          fontFamily: {
            serif: ['"Playfair Display"', 'Georgia', 'serif'],
            sans: ['"Inter"', 'system-ui', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <style>
    body {
      background-color: #FAF8F5;
      color: #111827;
      font-family: 'Inter', sans-serif;
    }
    .font-serif {
      font-family: 'Playfair Display', Georgia, serif;
    }
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  </style>
</head>
<body class="antialiased min-h-screen flex flex-col">

  <!-- TOP BRAND NAVBAR (Exact Amogha Pure White & Burgundy Accents) -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-charcoal-200/80 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
      
      <!-- Brand Title (Exact Amogha Font & Single Line) -->
      <a href="#" class="flex items-center gap-2">
        <span class="font-serif text-2xl sm:text-3xl font-black text-burgundy-700 tracking-tight whitespace-nowrap">
          THIS THE PLACE !
        </span>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-7 text-sm font-semibold text-charcoal-700">
        <a href="#menu" class="hover:text-burgundy-700 transition">Our Menu</a>
        <a href="#specialities" class="hover:text-burgundy-700 transition">Specialities</a>
        <a href="#about" class="hover:text-burgundy-700 transition">About</a>
        <a href="#gallery" class="hover:text-burgundy-700 transition">Ambience</a>
        <a href="#offers" class="hover:text-burgundy-700 transition">Offers</a>
        <a href="#location" class="hover:text-burgundy-700 transition">Location</a>
      </nav>

      <!-- Action Buttons -->
      <div class="hidden sm:flex items-center gap-3">
        <a href="tel:+917893660698" class="px-4 py-2 rounded-full border border-charcoal-300 text-charcoal-800 hover:bg-alabaster-100 font-bold text-xs transition">
          📞 +91 78936 60698
        </a>
        <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur/book" target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-burgundy-950 font-bold text-xs shadow-sm transition transform hover:-translate-y-0.5">
          Book Table (15% OFF)
        </a>
        <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-xs shadow-sm transition transform hover:-translate-y-0.5">
          View on Zomato
        </a>
      </div>

      <!-- Mobile Hamburger Button -->
      <button id="mobileMenuBtn" class="md:hidden p-2 text-charcoal-700 hover:text-burgundy-700 focus:outline-none" aria-label="Toggle menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <div id="mobileMenuDropdown" class="hidden md:hidden bg-white border-b border-charcoal-200 px-4 py-4 space-y-3">
      <a href="#menu" class="block text-sm font-semibold text-charcoal-700 py-1" onclick="toggleMobileMenu()">Our Menu</a>
      <a href="#specialities" class="block text-sm font-semibold text-charcoal-700 py-1" onclick="toggleMobileMenu()">Specialities</a>
      <a href="#about" class="block text-sm font-semibold text-charcoal-700 py-1" onclick="toggleMobileMenu()">About This The Place!</a>
      <a href="#gallery" class="block text-sm font-semibold text-charcoal-700 py-1" onclick="toggleMobileMenu()">Ambience Gallery</a>
      <a href="#offers" class="block text-sm font-semibold text-charcoal-700 py-1" onclick="toggleMobileMenu()">Dining Offers</a>
      <a href="#location" class="block text-sm font-semibold text-charcoal-700 py-1" onclick="toggleMobileMenu()">Location & Contact</a>
      <div class="pt-2 flex flex-col gap-2">
        <a href="tel:+917893660698" class="text-center py-2.5 rounded-full border border-charcoal-300 text-charcoal-800 font-bold text-xs">📞 +91 78936 60698</a>
        <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur/book" target="_blank" rel="noopener noreferrer" class="text-center py-2.5 rounded-full bg-gold-500 text-burgundy-950 font-bold text-xs">Reserve Table</a>
        <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur" target="_blank" rel="noopener noreferrer" class="text-center py-2.5 rounded-full bg-burgundy-700 text-white font-bold text-xs">View on Zomato</a>
      </div>
    </div>
  </header>

  <main class="flex-grow pt-[72px]">

    <!-- HERO SECTION (Exact Amogha Proportions, Font Style, and Single-Line Headline) -->
    <section class="relative min-h-[72vh] lg:min-h-[78vh] flex items-center justify-center pt-12 pb-14 sm:pt-16 sm:pb-16 lg:pt-16 lg:pb-18 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <!-- Background Image: Authentic Zomato Photo -->
      <div class="absolute inset-0 z-0 bg-ivory-100">
        <img src="${imgHero}" alt="This The Place Dining Ambience Madhapur" class="w-full h-full object-cover brightness-[0.88] contrast-[1.04]" />
        <!-- Exact Amogha Luxury Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-alabaster-100/95 via-alabaster-100/80 to-alabaster-100/60"></div>
        <div class="absolute inset-0 bg-white/30"></div>
      </div>

      <!-- Floating Hero Content Container -->
      <div class="relative z-10 max-w-5xl sm:max-w-6xl mx-auto text-center flex flex-col items-center">
        <!-- Eyebrow Pill Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-burgundy-200/80 text-burgundy-700 text-xs sm:text-sm font-bold tracking-widest uppercase mb-5 shadow-sm backdrop-blur-md">
          <span class="text-gold-500">✨</span>
          <span>Top-Rated Chinese & Pan-Asian • Madhapur</span>
          <span class="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
          <span>Hyderabad</span>
        </div>

        <!-- Primary Brand Headline (Exact Amogha Font & Single Line) -->
        <h1 class="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-burgundy-700 tracking-tight leading-none mb-4 whitespace-nowrap drop-shadow-sm">
          THIS THE PLACE !
        </h1>

        <!-- Subheadline -->
        <p class="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl text-charcoal-800 font-semibold max-w-2xl mb-3 leading-snug">
          Authentic Chinese, Pan-Asian & Fresh Seafood Feasts
        </p>

        <!-- Brief Supporting Copy -->
        <p class="text-xs sm:text-sm md:text-base text-charcoal-600 font-normal leading-relaxed max-w-2xl mb-7">
          Madhapur's beloved destination for sizzling dragon chicken, butter garlic prawns, handcrafted dimsums, crispy momos, and wok-tossed noodles & fried rice.
        </p>

        <!-- Action CTAs (Pill Buttons) -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md sm:max-w-none mb-8">
          <a href="#menu" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5">
            Explore Menu (35+ Dishes) →
          </a>
          <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur/book" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-burgundy-950 font-bold text-sm shadow-md transition transform hover:-translate-y-0.5">
            📅 Book Table (Flat 15% OFF)
          </a>
          <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur/order" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-ivory-50 text-charcoal-800 border border-charcoal-200 font-semibold text-sm shadow-sm transition">
            🛍️ Order on Zomato
          </a>
        </div>

        <!-- Hero Information Chips -->
        <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-semibold text-charcoal-700">
          <span class="px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-sm flex items-center gap-1.5">
            <span class="text-gold-500 font-bold">★ 4.3</span>
            <span>Rating (381+ Reviews)</span>
          </span>
          <span class="px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-sm flex items-center gap-1.5">
            <span>🥢</span>
            <span>Signature Dragon Chicken</span>
          </span>
          <span class="px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-sm flex items-center gap-1.5">
            <span>🍤</span>
            <span>Butter Garlic King Prawns</span>
          </span>
          <span class="px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-sm flex items-center gap-1.5">
            <span>⏰</span>
            <span>Open 12:00 Noon – 11:00 PM</span>
          </span>
        </div>
      </div>
    </section>

    <!-- QUICK INFO BAR (4 High-Quality Columns) -->
    <section class="bg-white border-y border-charcoal-200/80 py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="flex items-start gap-4 p-4 rounded-xl bg-alabaster-50/70 border border-charcoal-100 hover:border-burgundy-200 transition-colors">
            <div class="w-12 h-12 rounded-xl bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700 text-xl">🥢</div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-burgundy-700 mb-1">Cuisine & Specialities</h3>
              <p class="text-sm font-bold text-charcoal-900 leading-snug">Chinese, Oriental & Seafood</p>
              <p class="text-xs text-charcoal-500 mt-0.5">Dragon Chicken, Dimsums & Seafood</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-alabaster-50/70 border border-charcoal-100 hover:border-burgundy-200 transition-colors">
            <div class="w-12 h-12 rounded-xl bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700 text-xl">⏰</div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-burgundy-700 mb-1">Dining Hours</h3>
              <p class="text-sm font-bold text-charcoal-900 leading-snug">12:00 Noon – 11:00 PM Daily</p>
              <p class="text-xs text-charcoal-500 mt-0.5">Open 7 days a week for lunch & dinner</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-alabaster-50/70 border border-charcoal-100 hover:border-burgundy-200 transition-colors">
            <div class="w-12 h-12 rounded-xl bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700 text-xl">₹</div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-burgundy-700 mb-1">Cost for Two</h3>
              <p class="text-sm font-bold text-charcoal-900 leading-snug">₹950 for two people (approx.)</p>
              <p class="text-xs text-charcoal-500 mt-0.5">Value Chinese & Pan-Asian dining</p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-alabaster-50/70 border border-charcoal-100 hover:border-burgundy-200 transition-colors">
            <div class="w-12 h-12 rounded-xl bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700 text-xl">📍</div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-wider text-burgundy-700 mb-1">Madhapur Location</h3>
              <p class="text-sm font-bold text-charcoal-900 leading-snug">Near Orocare Dental Clinic</p>
              <p class="text-xs text-charcoal-500 mt-0.5">Main Road, Madhapur, Hyderabad</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CHEF SPECIALITIES SECTION (With Authentic Zomato Dish Photos) -->
    <section id="specialities" class="py-16 sm:py-20 bg-ivory-50/60 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-14">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-3">
            <span class="text-gold-500">✨</span>
            <span>Chef's Signature Recommendations</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-4">
            Pan-Asian & Seafood Specialities
          </h2>
          <p class="text-charcoal-600 text-sm sm:text-base leading-relaxed">
            Wok-tossed perfection with premium fresh ingredients, authentic Oriental sauces, fresh prawns, and handmade dumplings.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <!-- Dish 1 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-charcoal-200/80 shadow-sm hover:shadow-lg hover:border-burgundy-300 transition-all duration-300 flex flex-col group">
            <div class="relative h-56 w-full overflow-hidden bg-charcoal-100">
              <img src="${imgDish1}" alt="Dragon Chicken Platter" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 rounded-full bg-burgundy-700 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">Bestseller</span>
                <span class="px-2.5 py-1 rounded-full bg-gold-500 text-burgundy-950 text-[11px] font-bold uppercase tracking-wider shadow-sm">Must Try</span>
              </div>
              <span class="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-950/80 backdrop-blur-sm text-white text-[11px] font-medium">Serves 1-2</span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="w-3.5 h-3.5 rounded-sm border border-burgundy-600 flex items-center justify-center"><span class="w-1.5 h-1.5 rounded-full bg-burgundy-600"></span></span>
                  <h3 class="font-serif text-lg font-bold text-charcoal-900 group-hover:text-burgundy-700 transition-colors">Special Dragon Chicken Platter</h3>
                </div>
                <p class="text-xs sm:text-sm text-charcoal-600 line-clamp-2 leading-relaxed mb-4">Crispy marinated chicken strips tossed with crunchy cashew nuts, red chillies, and secret sweet-spicy dragon sauce.</p>
              </div>
              <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                <div class="flex items-baseline gap-2">
                  <span class="text-lg sm:text-xl font-black text-burgundy-700">₹369</span>
                  <span class="text-xs text-charcoal-400 line-through">₹419</span>
                </div>
                <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur/order" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition-colors">🛍️ Order Now</a>
              </div>
            </div>
          </div>

          <!-- Dish 2 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-charcoal-200/80 shadow-sm hover:shadow-lg hover:border-burgundy-300 transition-all duration-300 flex flex-col group">
            <div class="relative h-56 w-full overflow-hidden bg-charcoal-100">
              <img src="${imgDish2}" alt="Butter Garlic Prawns" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 rounded-full bg-burgundy-700 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">Bestseller</span>
                <span class="px-2.5 py-1 rounded-full bg-gold-500 text-burgundy-950 text-[11px] font-bold uppercase tracking-wider shadow-sm">Chef Special</span>
              </div>
              <span class="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-950/80 backdrop-blur-sm text-white text-[11px] font-medium">Serves 1-2</span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="w-3.5 h-3.5 rounded-sm border border-burgundy-600 flex items-center justify-center"><span class="w-1.5 h-1.5 rounded-full bg-burgundy-600"></span></span>
                  <h3 class="font-serif text-lg font-bold text-charcoal-900 group-hover:text-burgundy-700 transition-colors">Sizzling Butter Garlic Prawns</h3>
                </div>
                <p class="text-xs sm:text-sm text-charcoal-600 line-clamp-2 leading-relaxed mb-4">Fresh succulent king prawns tossed in fragrant burnt garlic, fresh herbs, and rich golden butter sauce.</p>
              </div>
              <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                <div class="flex items-baseline gap-2">
                  <span class="text-lg sm:text-xl font-black text-burgundy-700">₹449</span>
                  <span class="text-xs text-charcoal-400 line-through">₹499</span>
                </div>
                <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur/order" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition-colors">🛍️ Order Now</a>
              </div>
            </div>
          </div>

          <!-- Dish 3 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-charcoal-200/80 shadow-sm hover:shadow-lg hover:border-burgundy-300 transition-all duration-300 flex flex-col group">
            <div class="relative h-56 w-full overflow-hidden bg-charcoal-100">
              <img src="${imgDish3}" alt="Steamed Chicken Dimsums" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 rounded-full bg-burgundy-700 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">Bestseller</span>
              </div>
              <span class="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-950/80 backdrop-blur-sm text-white text-[11px] font-medium">8 Pieces</span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="w-3.5 h-3.5 rounded-sm border border-burgundy-600 flex items-center justify-center"><span class="w-1.5 h-1.5 rounded-full bg-burgundy-600"></span></span>
                  <h3 class="font-serif text-lg font-bold text-charcoal-900 group-hover:text-burgundy-700 transition-colors">Pan-Fried Steamed Chicken Dimsums</h3>
                </div>
                <p class="text-xs sm:text-sm text-charcoal-600 line-clamp-2 leading-relaxed mb-4">Handcrafted translucent dumplings stuffed with seasoned minced chicken and spring onions, served with spicy Sichuan chilli oil dip.</p>
              </div>
              <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                <div class="flex items-baseline gap-2">
                  <span class="text-lg sm:text-xl font-black text-burgundy-700">₹289</span>
                </div>
                <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur/order" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition-colors">🛍️ Order Now</a>
              </div>
            </div>
          </div>

          <!-- Dish 4 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-charcoal-200/80 shadow-sm hover:shadow-lg hover:border-burgundy-300 transition-all duration-300 flex flex-col group">
            <div class="relative h-56 w-full overflow-hidden bg-charcoal-100">
              <img src="${imgDish4}" alt="Kung Pao Fish Fillet" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 rounded-full bg-burgundy-700 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">Bestseller</span>
              </div>
              <span class="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-950/80 backdrop-blur-sm text-white text-[11px] font-medium">Serves 1-2</span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="w-3.5 h-3.5 rounded-sm border border-burgundy-600 flex items-center justify-center"><span class="w-1.5 h-1.5 rounded-full bg-burgundy-600"></span></span>
                  <h3 class="font-serif text-lg font-bold text-charcoal-900 group-hover:text-burgundy-700 transition-colors">Crispy Kung Pao Fish Fillet</h3>
                </div>
                <p class="text-xs sm:text-sm text-charcoal-600 line-clamp-2 leading-relaxed mb-4">Battered tender fish cubes wok-tossed with roasted peanuts, Sichuan peppercorns, dried red peppers, and scallions.</p>
              </div>
              <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                <div class="flex items-baseline gap-2">
                  <span class="text-lg sm:text-xl font-black text-burgundy-700">₹399</span>
                </div>
                <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur/order" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition-colors">🛍️ Order Now</a>
              </div>
            </div>
          </div>

          <!-- Dish 5 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-charcoal-200/80 shadow-sm hover:shadow-lg hover:border-burgundy-300 transition-all duration-300 flex flex-col group">
            <div class="relative h-56 w-full overflow-hidden bg-charcoal-100">
              <img src="${imgDish9}" alt="Apollo Fish" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 rounded-full bg-burgundy-700 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">Bestseller</span>
              </div>
              <span class="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-950/80 backdrop-blur-sm text-white text-[11px] font-medium">Serves 1-2</span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="w-3.5 h-3.5 rounded-sm border border-burgundy-600 flex items-center justify-center"><span class="w-1.5 h-1.5 rounded-full bg-burgundy-600"></span></span>
                  <h3 class="font-serif text-lg font-bold text-charcoal-900 group-hover:text-burgundy-700 transition-colors">Crispy Apollo Fish (Hyderabadi Wok)</h3>
                </div>
                <p class="text-xs sm:text-sm text-charcoal-600 line-clamp-2 leading-relaxed mb-4">Boneless fish fillets marinated in spiced yogurt and deep fried, tempered with curry leaves and green chillies.</p>
              </div>
              <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                <div class="flex items-baseline gap-2">
                  <span class="text-lg sm:text-xl font-black text-burgundy-700">₹389</span>
                  <span class="text-xs text-charcoal-400 line-through">₹429</span>
                </div>
                <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur/order" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition-colors">🛍️ Order Now</a>
              </div>
            </div>
          </div>

          <!-- Dish 6 -->
          <div class="bg-white rounded-2xl overflow-hidden border border-charcoal-200/80 shadow-sm hover:shadow-lg hover:border-burgundy-300 transition-all duration-300 flex flex-col group">
            <div class="relative h-56 w-full overflow-hidden bg-charcoal-100">
              <img src="${imgDish12}" alt="Chilli Chicken" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
                <span class="px-2.5 py-1 rounded-full bg-burgundy-700 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">Bestseller</span>
              </div>
              <span class="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-charcoal-950/80 backdrop-blur-sm text-white text-[11px] font-medium">Serves 1-2</span>
            </div>
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span class="w-3.5 h-3.5 rounded-sm border border-burgundy-600 flex items-center justify-center"><span class="w-1.5 h-1.5 rounded-full bg-burgundy-600"></span></span>
                  <h3 class="font-serif text-lg font-bold text-charcoal-900 group-hover:text-burgundy-700 transition-colors">Classic Chilli Chicken Dry</h3>
                </div>
                <p class="text-xs sm:text-sm text-charcoal-600 line-clamp-2 leading-relaxed mb-4">Indo-Chinese style crispy chicken wok-tossed with capsicum, diced onions, and green chillies.</p>
              </div>
              <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
                <div class="flex items-baseline gap-2">
                  <span class="text-lg sm:text-xl font-black text-burgundy-700">₹299</span>
                  <span class="text-xs text-charcoal-400 line-through">₹339</span>
                </div>
                <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur/order" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition-colors">🛍️ Order Now</a>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <a href="#menu" class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-sm shadow-md transition transform hover:-translate-y-0.5">
            Explore Complete Menu (35+ Items) →
          </a>
        </div>
      </div>
    </section>

    <!-- INTERACTIVE MENU SECTION -->
    <section id="menu" class="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-10">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-3">
            <span class="text-gold-500">🥢</span>
            <span>Grand Pan-Asian Dining Menu</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-4">
            Explore This The Place! Offerings
          </h2>
          <p class="text-charcoal-600 text-sm sm:text-base">
            From handcrafted momos and dimsums to sizzling seafood, aromatic fried rice, and wok gravies.
          </p>
        </div>

        <!-- Search & Diet Controls -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div class="relative w-full sm:w-80">
            <input type="text" id="menuSearch" placeholder="Search Dragon Chicken, Prawns, Noodles..." oninput="filterMenu()" class="w-full pl-10 pr-4 py-2.5 rounded-full border border-charcoal-200 bg-alabaster-50 focus:bg-white focus:outline-none focus:border-burgundy-600 text-sm text-charcoal-900 transition" />
            <span class="absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-400">🔍</span>
          </div>

          <div class="inline-flex p-1 rounded-full bg-alabaster-100 border border-charcoal-200 text-xs font-semibold" id="dietPills">
            <button onclick="setDiet('all')" class="px-4 py-1.5 rounded-full bg-burgundy-700 text-white shadow-sm font-bold transition" id="diet-all">All Items (${menuData.length})</button>
            <button onclick="setDiet('non-veg')" class="px-4 py-1.5 rounded-full text-charcoal-600 hover:text-charcoal-900 transition flex items-center gap-1.5" id="diet-non-veg"><span class="w-2 h-2 rounded-full bg-burgundy-600"></span> Non-Veg</button>
            <button onclick="setDiet('veg')" class="px-4 py-1.5 rounded-full text-charcoal-600 hover:text-charcoal-900 transition flex items-center gap-1.5" id="diet-veg"><span class="w-2 h-2 rounded-full bg-emerald-600"></span> Pure Veg</button>
          </div>
        </div>

        <!-- Category Pills -->
        <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-8 hide-scrollbar" id="categoryPills">
          ${categories.map((c, i) => `
            <button onclick="setCategory('${c.id}')" id="cat-${c.id}" class="px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${i === 0 ? 'bg-burgundy-700 text-white shadow-md' : 'bg-alabaster-50 hover:bg-alabaster-100 text-charcoal-700 border border-charcoal-200'}">
              ${c.name}
            </button>
          `).join('')}
        </div>

        <!-- Menu Grid Container -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="menuGrid">
          <!-- Populated by JavaScript -->
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION (Pan-Asian Heritage, Cozy Ambience, and Zomato Image Collage) -->
    <section id="about" class="py-16 sm:py-20 bg-ivory-50/70 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-6 relative">
            <div class="relative z-10 grid grid-cols-2 gap-4">
              <div class="space-y-4">
                <div class="rounded-2xl overflow-hidden shadow-md border border-charcoal-200">
                  <img src="${imgAmbience1}" alt="Dining Atmosphere" class="w-full h-52 sm:h-64 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md border border-charcoal-200">
                  <img src="${imgAmbience3}" alt="Restaurant Seating" class="w-full h-40 sm:h-48 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div class="space-y-4 pt-6">
                <div class="rounded-2xl overflow-hidden shadow-md border border-charcoal-200">
                  <img src="${imgAmbience2}" alt="Modern Seating" class="w-full h-44 sm:h-52 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div class="rounded-2xl overflow-hidden shadow-md border border-charcoal-200 bg-burgundy-700 text-white p-6 flex flex-col justify-center text-center">
                  <span class="font-serif text-3xl sm:text-4xl font-black text-gold-400 mb-1">4.3 ★</span>
                  <p class="text-xs uppercase tracking-widest font-semibold text-alabaster-100">381+ Dining Reviews</p>
                  <p class="text-[11px] text-alabaster-200 mt-2">Madhapur's Favourite Pan-Asian & Chinese</p>
                </div>
              </div>
            </div>
            <div class="absolute -bottom-4 -left-4 w-40 h-40 bg-gold-400/10 rounded-full blur-2xl -z-10"></div>
          </div>

          <div class="lg:col-span-6">
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-4">
              <span class="text-gold-500">✨</span>
              <span>The Story of This The Place!</span>
            </div>
            <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-6 leading-tight">
              A Culinary Journey of Pan-Asian & Oriental Delights
            </h2>
            <p class="text-charcoal-700 text-sm sm:text-base leading-relaxed mb-6">
              Located <strong>Near Orocare Dental Clinic in Madhapur</strong>, <strong>This The Place!</strong> offers an unforgettable casual dining experience celebrating authentic Chinese, Oriental, fresh seafood, and popular Asian street appetizers. From our signature Dragon Chicken and Butter Garlic Prawns to hearty bowls of Hakka Noodles and steaming Dimsums, each dish is made fresh to order.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div class="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-charcoal-200/80">
                <div class="w-8 h-8 rounded-lg bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700 font-bold">🔥</div>
                <div>
                  <h4 class="text-xs font-bold text-charcoal-900 mb-0.5">Wok-Mastered Asian Flavours</h4>
                  <p class="text-[11px] text-charcoal-500 leading-snug">High-flame wok cooking locking in intense smoky aromatics, crisp veggies, and succulent proteins.</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-charcoal-200/80">
                <div class="w-8 h-8 rounded-lg bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700 font-bold">🥟</div>
                <div>
                  <h4 class="text-xs font-bold text-charcoal-900 mb-0.5">Handmade Dimsums & Momos</h4>
                  <p class="text-[11px] text-charcoal-500 leading-snug">Artisanal steamed and fried dumplings prepared fresh daily with authentic Sichuan chilli dips.</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-charcoal-200/80">
                <div class="w-8 h-8 rounded-lg bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700 font-bold">🍤</div>
                <div>
                  <h4 class="text-xs font-bold text-charcoal-900 mb-0.5">Fresh Seafood Selections</h4>
                  <p class="text-[11px] text-charcoal-500 leading-snug">Fresh tiger prawns and tender fish fillets tossed in aromatic butter garlic and Kung Pao sauces.</p>
                </div>
              </div>
              <div class="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-charcoal-200/80">
                <div class="w-8 h-8 rounded-lg bg-burgundy-50 border border-burgundy-100 flex items-center justify-center shrink-0 text-burgundy-700 font-bold">🏆</div>
                <div>
                  <h4 class="text-xs font-bold text-charcoal-900 mb-0.5">Exceptional Taste & Value</h4>
                  <p class="text-[11px] text-charcoal-500 leading-snug">Lavish Chinese and Pan-Asian feast portions starting at just ₹950 for two people in Madhapur.</p>
                </div>
              </div>
            </div>

            <div class="flex items-center gap-4 text-xs font-bold text-burgundy-800">
              <span class="flex items-center gap-1.5"><span class="text-emerald-600">✓</span> Fresh Seafood Daily</span>
              <span class="flex items-center gap-1.5"><span class="text-emerald-600">✓</span> Cozy Dining Ambience</span>
              <span class="flex items-center gap-1.5"><span class="text-emerald-600">✓</span> Open 7 Days a Week</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AMBIENCE GALLERY (Authentic Zomato Photos Only) -->
    <section id="gallery" class="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-3">
            <span class="text-gold-500">📷</span>
            <span>Authentic Dining Ambience</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-4">
            Experience This The Place!
          </h2>
          <p class="text-charcoal-600 text-sm sm:text-base">
            Take a look inside our relaxed casual dining space designed for great food, memorable conversations, and authentic flavours.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div class="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-charcoal-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <img src="${imgHero}" alt="Vibrant Main Dining Space" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <span class="text-[11px] font-bold text-gold-400 uppercase tracking-wider block mb-1">Casual & Comfortable</span>
              <h4 class="font-serif text-lg font-bold text-white leading-snug">Vibrant Main Dining Space</h4>
            </div>
          </div>

          <div class="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-charcoal-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <img src="${imgAmbience1}" alt="Modern Asian-Inspired Seating" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <span class="text-[11px] font-bold text-gold-400 uppercase tracking-wider block mb-1">Contemporary Vibe</span>
              <h4 class="font-serif text-lg font-bold text-white leading-snug">Modern Asian-Inspired Seating</h4>
            </div>
          </div>

          <div class="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-charcoal-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <img src="${imgAmbience2}" alt="Warm Table Enclosures" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <span class="text-[11px] font-bold text-gold-400 uppercase tracking-wider block mb-1">Friends & Family Gatherings</span>
              <h4 class="font-serif text-lg font-bold text-white leading-snug">Warm Table Enclosures</h4>
            </div>
          </div>

          <div class="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-charcoal-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <img src="${imgAmbience3}" alt="Cozy Dining Hall Corner" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <span class="text-[11px] font-bold text-gold-400 uppercase tracking-wider block mb-1">Charming Madhapur Spot</span>
              <h4 class="font-serif text-lg font-bold text-white leading-snug">Cozy Dining Hall Corner</h4>
            </div>
          </div>

          <div class="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-charcoal-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <img src="${imgAmbience4}" alt="Lively Evening Ambience" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <span class="text-[11px] font-bold text-gold-400 uppercase tracking-wider block mb-1">Open till 11:00 PM</span>
              <h4 class="font-serif text-lg font-bold text-white leading-snug">Lively Evening Ambience</h4>
            </div>
          </div>

          <div class="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-charcoal-200 shadow-sm hover:shadow-lg transition-all duration-300">
            <img src="${imgDish3}" alt="Fresh Dimsum & Starter Table" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            <div class="absolute bottom-4 left-4 right-4">
              <span class="text-[11px] font-bold text-gold-400 uppercase tracking-wider block mb-1">Authentic Presentation</span>
              <h4 class="font-serif text-lg font-bold text-white leading-snug">Fresh Dimsum & Starter Table</h4>
            </div>
          </div>
        </div>

        <div class="text-center">
          <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur/photos" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-alabaster-50 hover:bg-alabaster-100 text-charcoal-800 border border-charcoal-300 font-bold text-sm shadow-sm transition">
            <span>View All Photos on Zomato ↗</span>
          </a>
        </div>
      </div>
    </section>

    <!-- OFFERS SECTION -->
    <section id="offers" class="py-16 bg-ivory-50/70 px-4 sm:px-6 lg:px-8 border-t border-charcoal-200/80">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-3">
            <span class="text-gold-500">🏷️</span>
            <span>Special Deals & Savings</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-4">
            Exclusive Dining & Table Offers
          </h2>
          <p class="text-charcoal-600 text-sm sm:text-base">
            Take advantage of exclusive discounts when pre-booking your table or paying your dining bill.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-2xl p-6 border border-charcoal-200/80 shadow-sm hover:shadow-md hover:border-burgundy-200 transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-burgundy-50 text-burgundy-700 text-xs font-bold uppercase tracking-wider">Pre-Book Dining Offer</span>
                <div class="w-9 h-9 rounded-full bg-alabaster-100 flex items-center justify-center text-charcoal-700">📅</div>
              </div>
              <h3 class="font-serif text-lg font-bold text-charcoal-900 mb-2">Flat 15% OFF on Dining Bill</h3>
              <p class="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">Reserve your table on Zomato in advance. Valid for lunch & dinner dining slots.</p>
            </div>
            <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
              <div class="text-xs font-mono font-bold text-charcoal-700 bg-alabaster-100 px-2.5 py-1 rounded border border-charcoal-200">CODE: PREBOOK15</div>
              <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur/book" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-bold text-burgundy-700 hover:text-burgundy-900">Book Table (15% OFF) →</a>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-charcoal-200/80 shadow-sm hover:shadow-md hover:border-burgundy-200 transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-burgundy-50 text-burgundy-700 text-xs font-bold uppercase tracking-wider">Bank & Card Offer</span>
                <div class="w-9 h-9 rounded-full bg-alabaster-100 flex items-center justify-center text-charcoal-700">💳</div>
              </div>
              <h3 class="font-serif text-lg font-bold text-charcoal-900 mb-2">20% OFF up to ₹500 (Bank Cards)</h3>
              <p class="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">Exclusive savings on dining bills using partner bank credit/debit cards on Zomato Pay.</p>
            </div>
            <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
              <div class="text-xs font-mono font-bold text-charcoal-700 bg-alabaster-100 px-2.5 py-1 rounded border border-charcoal-200">CODE: CARD20</div>
              <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-bold text-burgundy-700 hover:text-burgundy-900">Check Bank Offers →</a>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-charcoal-200/80 shadow-sm hover:shadow-md hover:border-burgundy-200 transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-burgundy-50 text-burgundy-700 text-xs font-bold uppercase tracking-wider">Exclusive Next Visit</span>
                <div class="w-9 h-9 rounded-full bg-alabaster-100 flex items-center justify-center text-charcoal-700">%</div>
              </div>
              <h3 class="font-serif text-lg font-bold text-charcoal-900 mb-2">FLAT ₹150 OFF Voucher</h3>
              <p class="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">Receive an exclusive flat ₹150 discount voucher valid on your next dining bill payment via Zomato.</p>
            </div>
            <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
              <div class="text-xs font-mono font-bold text-charcoal-700 bg-alabaster-100 px-2.5 py-1 rounded border border-charcoal-200">CODE: PLACE150</div>
              <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-bold text-burgundy-700 hover:text-burgundy-900">View Offers →</a>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-charcoal-200/80 shadow-sm hover:shadow-md hover:border-burgundy-200 transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 rounded-full bg-burgundy-50 text-burgundy-700 text-xs font-bold uppercase tracking-wider">Surprise Reward</span>
                <div class="w-9 h-9 rounded-full bg-alabaster-100 flex items-center justify-center text-charcoal-700">🎁</div>
              </div>
              <h3 class="font-serif text-lg font-bold text-charcoal-900 mb-2">Scratch Card on Every Bill</h3>
              <p class="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">Get an instant surprise cashback / discount scratch card reward after every dining transaction.</p>
            </div>
            <div class="pt-4 border-t border-charcoal-100 flex items-center justify-between">
              <div class="text-xs font-mono font-bold text-charcoal-700 bg-alabaster-100 px-2.5 py-1 rounded border border-charcoal-200">CODE: SCRATCHCARD</div>
              <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs font-bold text-burgundy-700 hover:text-burgundy-900">View Rewards →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ORDER ONLINE & RESERVATIONS SECTION -->
    <section id="order" class="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-50 border border-burgundy-200 text-burgundy-700 text-xs font-bold tracking-widest uppercase mb-3">
            <span class="text-gold-500">🛍️</span>
            <span>Reservations & Orders</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-900 tracking-tight mb-4">
            Reserve Your Table or Order Online
          </h2>
          <p class="text-charcoal-600 text-sm sm:text-base">
            Enjoy This The Place!'s celebrated Pan-Asian food at our Madhapur restaurant or delivered straight to your home.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div class="p-6 rounded-2xl bg-alabaster-50/70 border border-charcoal-200 hover:border-burgundy-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-charcoal-200 text-charcoal-700">Flat 15% OFF</span>
              </div>
              <h3 class="font-serif text-xl font-bold text-charcoal-900 mb-1">Table Reservation</h3>
              <p class="text-xs font-semibold text-burgundy-700 mb-2">Pre-book on Zomato</p>
              <p class="text-xs text-charcoal-600 leading-relaxed mb-6">Reserve your dining table in advance with flat 15% OFF on total bill via Zomato dining.</p>
            </div>
            <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur/book" target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-xs shadow-sm transition transform hover:-translate-y-0.5 bg-gold-500 hover:bg-gold-600 text-burgundy-950">
              <span>Book a Table (15% OFF)</span> →
            </a>
          </div>

          <div class="p-6 rounded-2xl bg-alabaster-50/70 border border-charcoal-200 hover:border-burgundy-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-charcoal-200 text-charcoal-700">Fast Delivery</span>
              </div>
              <h3 class="font-serif text-xl font-bold text-charcoal-900 mb-1">Zomato Delivery</h3>
              <p class="text-xs font-semibold text-burgundy-700 mb-2">Online Delivery & Takeaway</p>
              <p class="text-xs text-charcoal-600 leading-relaxed mb-6">Crispy Dragon Chicken, hot Dimsums and Hakka Noodles delivered quickly across Madhapur & Hitech City.</p>
            </div>
            <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur/order" target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-xs shadow-sm transition transform hover:-translate-y-0.5 bg-[#CB202D] hover:bg-[#b01a25] text-white">
              <span>Order on Zomato</span> →
            </a>
          </div>

          <div class="p-6 rounded-2xl bg-alabaster-50/70 border border-charcoal-200 hover:border-burgundy-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-charcoal-200 text-charcoal-700">Quick Delivery</span>
              </div>
              <h3 class="font-serif text-xl font-bold text-charcoal-900 mb-1">Swiggy Delivery</h3>
              <p class="text-xs font-semibold text-burgundy-700 mb-2">Doorstep Delivery</p>
              <p class="text-xs text-charcoal-600 leading-relaxed mb-6">Order your favourite Chinese starters, seafood platters, and fried rice conveniently via Swiggy.</p>
            </div>
            <a href="https://www.swiggy.com/restaurants/this-the-place-madhapur-hyderabad" target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-xs shadow-sm transition transform hover:-translate-y-0.5 bg-[#FC8019] hover:bg-[#e67312] text-white">
              <span>Order on Swiggy</span> →
            </a>
          </div>

          <div class="p-6 rounded-2xl bg-alabaster-50/70 border border-charcoal-200 hover:border-burgundy-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white border border-charcoal-200 text-charcoal-700">Direct Support</span>
              </div>
              <h3 class="font-serif text-xl font-bold text-charcoal-900 mb-1">Direct Phone Call</h3>
              <p class="text-xs font-semibold text-burgundy-700 mb-2">Group Bookings & Takeaway</p>
              <p class="text-xs text-charcoal-600 leading-relaxed mb-6">Planning a party, team lunch, or takeout? Call the restaurant team directly.</p>
            </div>
            <a href="tel:+917893660698" class="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-xs shadow-sm transition transform hover:-translate-y-0.5 bg-charcoal-900 hover:bg-charcoal-800 text-white">
              <span>Call +91 78936 60698</span> →
            </a>
          </div>
        </div>

        <div class="p-6 rounded-2xl bg-burgundy-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div class="flex items-center gap-4 text-center md:text-left">
            <div class="w-12 h-12 rounded-2xl bg-burgundy-800 border border-burgundy-700 flex items-center justify-center shrink-0 text-gold-400 text-2xl">⏰</div>
            <div>
              <h4 class="font-serif text-lg sm:text-xl font-bold text-white mb-0.5">Craving Sizzling Chinese & Seafood? Open Till 11:00 PM!</h4>
              <p class="text-xs sm:text-sm text-alabaster-200">Fresh wok kitchen serving daily from 12:00 Noon to 11:00 PM for dining, takeaway & delivery.</p>
            </div>
          </div>
          <a href="tel:+917893660698" class="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-600 text-burgundy-950 font-bold text-xs sm:text-sm transition shadow-md">
            📞 Call for Reservations & Takeout
          </a>
        </div>
      </div>
    </section>

    <!-- LOCATION & MAP SECTION (With Distinct Warm Brown Background #F4ECE1 and Dark Legible Text) -->
    <section id="location" class="py-16 sm:py-20 bg-[#F4ECE1] border-t border-[#D8C5AE] px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-burgundy-100 border border-burgundy-300 text-burgundy-900 text-xs font-bold tracking-widest uppercase mb-3">
            <span class="text-burgundy-700">📍</span>
            <span>Visit Us in Madhapur</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal-950 tracking-tight mb-4">
            Find This The Place!
          </h2>
          <p class="text-charcoal-800 text-sm sm:text-base font-medium">
            Conveniently situated Near Orocare Dental Clinic, Madhapur, Hyderabad.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <!-- Details Card -->
          <div class="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-charcoal-200 shadow-md flex flex-col justify-between">
            <div>
              <h3 class="font-serif text-2xl font-black text-burgundy-800 mb-4">
                This The Place! Madhapur
              </h3>
              <div class="space-y-4 text-sm text-charcoal-800 mb-6">
                <div class="flex items-start gap-3">
                  <span class="text-burgundy-700 font-bold mt-0.5">📍</span>
                  <div>
                    <strong class="block text-charcoal-950 font-bold mb-0.5">Address:</strong>
                    <p class="text-charcoal-800 leading-relaxed font-normal">Near Orocare Dental Clinic, Madhapur, Hyderabad, Telangana 500081</p>
                    <p class="text-xs text-charcoal-600 mt-1 font-medium">Landmark: Near Orocare Dental Clinic, Main Road, Madhapur</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <span class="text-burgundy-700 font-bold mt-0.5">⏰</span>
                  <div>
                    <strong class="block text-charcoal-950 font-bold mb-0.5">Hours:</strong>
                    <p class="text-charcoal-800 font-medium">12:00 Noon – 11:00 PM (Daily)</p>
                    <p class="text-xs font-semibold text-emerald-700 mt-0.5">Open 7 Days a Week (Lunch & Dinner)</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <span class="text-burgundy-700 font-bold mt-0.5">📞</span>
                  <div>
                    <strong class="block text-charcoal-950 font-bold mb-0.5">Contact:</strong>
                    <a href="tel:+917893660698" class="text-burgundy-800 hover:text-burgundy-950 font-bold">+91 78936 60698</a>
                  </div>
                </div>
              </div>
            </div>

            <div class="pt-4 border-t border-charcoal-200 flex flex-col sm:flex-row gap-3">
              <a href="https://maps.google.com/?q=This+The+Place+Near+Orocare+Dental+Clinic+Madhapur+Hyderabad" target="_blank" rel="noopener noreferrer" class="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-burgundy-700 hover:bg-burgundy-800 text-white font-bold text-xs shadow-md transition">
                <span>🧭</span> Get Directions
              </a>
              <a href="tel:+917893660698" class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-alabaster-100 hover:bg-alabaster-200 text-charcoal-900 border border-charcoal-300 font-bold text-xs transition">
                <span>📞</span> Call Restaurant
              </a>
            </div>
          </div>

          <!-- Interactive Google Maps Iframe -->
          <div class="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-charcoal-200 shadow-md h-80 sm:h-96">
            <iframe
              src="https://maps.google.com/maps?q=This+The+Place+Near+Orocare+Dental+Clinic+Madhapur+Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="This The Place Google Maps Location"
            ></iframe>
          </div>
        </div>

        <!-- 3 High-Contrast Info Cards Directly Below the Map -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-5 rounded-xl bg-white border border-charcoal-200 shadow-sm">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-9 h-9 rounded-lg bg-burgundy-100 flex items-center justify-center text-burgundy-800 text-lg">🚗</div>
              <h4 class="font-serif font-bold text-charcoal-950 text-base">Parking & Accessibility</h4>
            </div>
            <p class="text-xs text-charcoal-700 leading-relaxed font-medium">
              Roadside & designated parking space available for both two-wheelers and four-wheelers.
            </p>
          </div>

          <div class="p-5 rounded-xl bg-white border border-charcoal-200 shadow-sm">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-9 h-9 rounded-lg bg-burgundy-100 flex items-center justify-center text-burgundy-800 text-lg">❄️</div>
              <h4 class="font-serif font-bold text-charcoal-950 text-base">Cozy Casual Dining</h4>
            </div>
            <p class="text-xs text-charcoal-700 leading-relaxed font-medium">
              Comfortable AC indoor dining environment with music, welcoming service, and prompt staff.
            </p>
          </div>

          <div class="p-5 rounded-xl bg-white border border-charcoal-200 shadow-sm">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-9 h-9 rounded-lg bg-burgundy-100 flex items-center justify-center text-burgundy-800 text-lg">🥢</div>
              <h4 class="font-serif font-bold text-charcoal-950 text-base">Fresh High-Flame Wok</h4>
            </div>
            <p class="text-xs text-charcoal-700 leading-relaxed font-medium">
              All dishes cooked fresh on live wok burners ensuring authentic texture, smokiness, and taste.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- LUXURY FOOTER (Burgundy Theme) -->
  <footer class="bg-burgundy-950 text-alabaster-200 pt-16 pb-24 sm:pb-12 border-t border-burgundy-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <h3 class="font-serif text-2xl font-black text-white tracking-tight mb-4 whitespace-nowrap">
            THIS THE PLACE !
          </h3>
          <p class="text-xs sm:text-sm text-alabaster-200 leading-relaxed mb-6">
            Madhapur's beloved destination for Chinese, Pan-Asian, sizzling seafood platters, handmade momos, and refreshing mocktails.
          </p>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-burgundy-900 border border-burgundy-800 text-gold-400 text-xs font-bold">
            <span>★ 4.3</span>
            <span>• 381+ Dining Ratings</span>
          </div>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">Quick Navigation</h4>
          <ul class="space-y-2.5 text-xs sm:text-sm">
            <li><a href="#menu" class="hover:text-white transition">Full Dining Menu</a></li>
            <li><a href="#specialities" class="hover:text-white transition">Chef Specialities</a></li>
            <li><a href="#about" class="hover:text-white transition">About the Restaurant</a></li>
            <li><a href="#gallery" class="hover:text-white transition">Ambience & Interiors</a></li>
            <li><a href="#offers" class="hover:text-white transition">Exclusive Dining Offers</a></li>
            <li><a href="#location" class="hover:text-white transition">Directions & Maps</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">Hours & Contact</h4>
          <ul class="space-y-2.5 text-xs sm:text-sm">
            <li><strong class="text-white">Hours:</strong> 12:00 Noon – 11:00 PM Daily</li>
            <li><strong class="text-white">Phone:</strong> <a href="tel:+917893660698" class="text-gold-400 hover:underline">+91 78936 60698</a></li>
            <li><strong class="text-white">Location:</strong> Near Orocare Dental Clinic, Madhapur, Hyderabad</li>
            <li><strong class="text-white">Average Cost:</strong> ₹950 for two (approx.)</li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest text-gold-400 mb-4">Online Bookings</h4>
          <div class="space-y-3">
            <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur/book" target="_blank" rel="noopener noreferrer" class="block text-center py-2.5 px-4 rounded-full bg-gold-500 hover:bg-gold-600 text-burgundy-950 font-bold text-xs transition">
              Reserve Table (15% OFF)
            </a>
            <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur/order" target="_blank" rel="noopener noreferrer" class="block text-center py-2.5 px-4 rounded-full bg-burgundy-800 hover:bg-burgundy-700 text-white border border-burgundy-700 font-bold text-xs transition">
              Order on Zomato
            </a>
            <a href="https://maps.google.com/?q=This+The+Place+Near+Orocare+Dental+Clinic+Madhapur+Hyderabad" target="_blank" rel="noopener noreferrer" class="block text-center py-2.5 px-4 rounded-full bg-charcoal-900 hover:bg-charcoal-800 text-alabaster-200 border border-charcoal-700 font-semibold text-xs transition">
              Google Maps Location
            </a>
          </div>
        </div>
      </div>

      <div class="pt-8 border-t border-burgundy-900 text-center text-xs text-alabaster-200/60">
        <p>© 2026 This The Place! Madhapur, Hyderabad. All Rights Reserved. Built in luxury Amogha architecture.</p>
      </div>
    </div>
  </footer>

  <!-- MOBILE BOTTOM STICKY QUICKBAR -->
  <div class="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-charcoal-200 p-2.5 flex items-center gap-2 shadow-2xl">
    <a href="tel:+917893660698" class="flex-1 py-2.5 rounded-full bg-alabaster-100 text-charcoal-900 border border-charcoal-300 font-bold text-xs text-center flex items-center justify-center gap-1">
      <span>📞</span> <span>Call</span>
    </a>
    <a href="https://maps.google.com/?q=This+The+Place+Near+Orocare+Dental+Clinic+Madhapur+Hyderabad" target="_blank" rel="noopener noreferrer" class="flex-1 py-2.5 rounded-full bg-alabaster-100 text-charcoal-900 border border-charcoal-300 font-bold text-xs text-center flex items-center justify-center gap-1">
      <span>📍</span> <span>Map</span>
    </a>
    <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur/book" target="_blank" rel="noopener noreferrer" class="flex-1 py-2.5 rounded-full bg-gold-500 text-burgundy-950 font-bold text-xs text-center flex items-center justify-center gap-1 shadow-sm">
      <span>📅</span> <span>Book Table</span>
    </a>
    <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur/order" target="_blank" rel="noopener noreferrer" class="flex-1 py-2.5 rounded-full bg-burgundy-700 text-white font-bold text-xs text-center flex items-center justify-center gap-1 shadow-sm">
      <span>🛍️</span> <span>Order</span>
    </a>
  </div>

  <!-- Interactive JavaScript Logic for Menu, Search, Filter & Mobile Drawer -->
  <script>
    const menuItems = ${JSON.stringify(menuData)};
    let activeCategory = 'all';
    let activeDiet = 'all';
    let searchQuery = '';

    function renderMenu() {
      const grid = document.getElementById('menuGrid');
      const filtered = menuItems.filter(item => {
        if (activeCategory !== 'all' && item.category !== activeCategory) return false;
        if (activeDiet === 'veg' && !item.isVeg) return false;
        if (activeDiet === 'non-veg' && item.isVeg) return false;
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const matchName = item.name.toLowerCase().includes(q);
          const matchDesc = item.description.toLowerCase().includes(q);
          if (!matchName && !matchDesc) return false;
        }
        return true;
      });

      if (filtered.length === 0) {
        grid.innerHTML = \`
          <div class="col-span-full text-center py-16 bg-alabaster-50 rounded-2xl border border-charcoal-200">
            <div class="text-4xl mb-3">🥢</div>
            <h3 class="font-serif text-lg font-bold text-charcoal-800 mb-1">No dishes found</h3>
            <p class="text-xs text-charcoal-500">Try adjusting your search terms or filters.</p>
          </div>
        \`;
        return;
      }

      grid.innerHTML = filtered.map(item => \`
        <div class="bg-white rounded-xl p-5 border border-charcoal-200/80 hover:border-burgundy-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
          <div>
            <div class="flex items-start justify-between gap-2 mb-2">
              <div class="flex items-center gap-2">
                <span class="w-3.5 h-3.5 rounded-sm border \${item.isVeg ? 'border-emerald-600' : 'border-burgundy-600'} flex items-center justify-center shrink-0">
                  <span class="w-1.5 h-1.5 rounded-full \${item.isVeg ? 'bg-emerald-600' : 'bg-burgundy-600'}"></span>
                </span>
                <h4 class="font-serif font-bold text-charcoal-900 group-hover:text-burgundy-700 transition-colors text-base">\${item.name}</h4>
              </div>
            </div>

            <div class="flex flex-wrap gap-1.5 mb-2">
              \${item.isBestseller ? '<span class="px-2 py-0.5 rounded bg-burgundy-50 text-burgundy-700 border border-burgundy-200 text-[10px] font-bold uppercase">Bestseller</span>' : ''}
              \${item.isSpecial ? '<span class="px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold uppercase">Chef Special</span>' : ''}
              \${item.portion ? \`<span class="px-2 py-0.5 rounded bg-charcoal-100 text-charcoal-600 text-[10px] font-medium">\${item.portion}</span>\` : ''}
            </div>

            <p class="text-xs text-charcoal-600 leading-relaxed line-clamp-2 mb-4">\${item.description}</p>
          </div>

          <div class="pt-3 border-t border-charcoal-100 flex items-center justify-between mt-auto">
            <div class="flex items-baseline gap-2">
              <span class="text-lg font-black text-burgundy-700">₹\${item.price}</span>
              \${item.originalPrice ? \`<span class="text-xs text-charcoal-400 line-through">₹\${item.originalPrice}</span>\` : ''}
            </div>
            <a href="https://www.zomato.com/hyderabad/this-the-place-madhapur/order" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-50 hover:bg-burgundy-700 text-burgundy-700 hover:text-white text-xs font-bold transition">
              <span>🛍️</span> Order
            </a>
          </div>
        </div>
      \`).join('');
    }

    function setCategory(catId) {
      activeCategory = catId;
      document.querySelectorAll('#categoryPills button').forEach(btn => {
        btn.className = 'px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 bg-alabaster-50 hover:bg-alabaster-100 text-charcoal-700 border border-charcoal-200';
      });
      const activeBtn = document.getElementById('cat-' + catId);
      if (activeBtn) {
        activeBtn.className = 'px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 bg-burgundy-700 text-white shadow-md';
      }
      renderMenu();
    }

    function setDiet(diet) {
      activeDiet = diet;
      document.getElementById('diet-all').className = diet === 'all' ? 'px-4 py-1.5 rounded-full bg-burgundy-700 text-white shadow-sm font-bold transition' : 'px-4 py-1.5 rounded-full text-charcoal-600 hover:text-charcoal-900 transition';
      document.getElementById('diet-non-veg').className = diet === 'non-veg' ? 'px-4 py-1.5 rounded-full bg-burgundy-700 text-white shadow-sm font-bold transition flex items-center gap-1.5' : 'px-4 py-1.5 rounded-full text-charcoal-600 hover:text-charcoal-900 transition flex items-center gap-1.5';
      document.getElementById('diet-veg').className = diet === 'veg' ? 'px-4 py-1.5 rounded-full bg-emerald-700 text-white shadow-sm font-bold transition flex items-center gap-1.5' : 'px-4 py-1.5 rounded-full text-charcoal-600 hover:text-charcoal-900 transition flex items-center gap-1.5';
      renderMenu();
    }

    function filterMenu() {
      searchQuery = document.getElementById('menuSearch').value;
      renderMenu();
    }

    function toggleMobileMenu() {
      const dropdown = document.getElementById('mobileMenuDropdown');
      dropdown.classList.toggle('hidden');
    }

    document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileMenu);

    // Initial render
    renderMenu();
  </script>
</body>
</html>
`;

console.log('Writing standalone HTML to:', outputHtmlPath);
fs.writeFileSync(outputHtmlPath, htmlContent, 'utf8');

console.log('Writing standalone HTML to artifact path:', artifactHtmlPath);
fs.writeFileSync(artifactHtmlPath, htmlContent, 'utf8');

console.log('Standalone HTML generation complete! File size: ' + (fs.statSync(outputHtmlPath).size / 1024).toFixed(1) + ' KB');
