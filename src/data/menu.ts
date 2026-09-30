export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  isVeg: boolean;
  isBestseller?: boolean;
  isSpecial?: boolean;
  portion?: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
}

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'all', name: 'All Dishes' },
  { id: 'chef-specials', name: 'Chef Specialities' },
  { id: 'dimsums-momos', name: 'Dimsums & Momos' },
  { id: 'seafood-fish', name: 'Seafood & Fish Starters' },
  { id: 'asian-starters', name: 'Crispy Asian Appetizers' },
  { id: 'noodles-rice', name: 'Wok Noodles & Fried Rice' },
  { id: 'main-gravies', name: 'Oriental Main Course Gravies' },
  { id: 'desserts-beverages', name: 'Desserts & Beverages' },
];

export const MENU_ITEMS: MenuItem[] = [
  // Chef Specialities
  {
    id: 'sp1',
    name: 'This The Place Special Dragon Chicken Platter',
    category: 'chef-specials',
    price: 369,
    originalPrice: 419,
    description: 'Crispy marinated chicken strips tossed with crunchy cashew nuts, red chillies, and secret sweet-spicy dragon sauce.',
    isVeg: false,
    isBestseller: true,
    isSpecial: true,
    portion: 'Serves 1-2',
    image: '/images/this_the_place_dish_1.jpg'
  },
  {
    id: 'sp2',
    name: 'Sizzling Butter Garlic Prawns (Wok Tossed)',
    category: 'chef-specials',
    price: 449,
    originalPrice: 499,
    description: 'Fresh succulent king prawns tossed in fragrant burnt garlic, fresh herbs, and rich golden butter sauce.',
    isVeg: false,
    isBestseller: true,
    isSpecial: true,
    portion: 'Serves 1-2',
    image: '/images/this_the_place_dish_2.jpg'
  },
  {
    id: 'sp3',
    name: 'Pan-Fried Steamed Chicken Dimsums (8 Pcs)',
    category: 'chef-specials',
    price: 289,
    description: 'Handcrafted translucent dumplings stuffed with seasoned minced chicken and spring onions, served with spicy Sichuan chilli oil dip.',
    isVeg: false,
    isBestseller: true,
    isSpecial: true,
    portion: '8 Pieces',
    image: '/images/this_the_place_dish_3.jpg'
  },
  {
    id: 'sp4',
    name: 'Crispy Kung Pao Fish Fillet',
    category: 'chef-specials',
    price: 399,
    description: 'Battered tender fish cubes wok-tossed with roasted peanuts, Sichuan peppercorns, dried red peppers, and scallions.',
    isVeg: false,
    isBestseller: true,
    portion: 'Serves 1-2',
    image: '/images/this_the_place_dish_4.jpg'
  },

  // Dimsums & Momos
  {
    id: 'dm1',
    name: 'Steamed Classic Chicken Momos',
    category: 'dimsums-momos',
    price: 219,
    description: 'Juicy minced chicken encased in thin wrapper, steamed to perfection with homemade tomato sesame dip.',
    isVeg: false,
    isBestseller: true,
    portion: '6 Pieces',
    image: '/images/this_the_place_dish_5.jpg'
  },
  {
    id: 'dm2',
    name: 'Crispy Fried Cheese & Corn Momos',
    category: 'dimsums-momos',
    price: 199,
    description: 'Golden crunchy fried momos stuffed with gooey molten cheese, sweet corn kernels, and herbs.',
    isVeg: true,
    isBestseller: true,
    portion: '6 Pieces',
    image: '/images/this_the_place_dish_6.jpg'
  },
  {
    id: 'dm3',
    name: 'Tandoori Kurkure Chicken Momos',
    category: 'dimsums-momos',
    price: 249,
    description: 'Crunchy battered momos tossed in tandoori spice glaze with mint sauce and onion rings.',
    isVeg: false,
    portion: '6 Pieces',
    image: '/images/this_the_place_dish_7.jpg'
  },
  {
    id: 'dm4',
    name: 'Exotic Vegetable Steamed Dimsums',
    category: 'dimsums-momos',
    price: 189,
    description: 'Stuffed with finely chopped shiitake mushrooms, water chestnuts, bok choy, and ginger.',
    isVeg: true,
    portion: '6 Pieces'
  },

  // Seafood & Fish Starters
  {
    id: 'sf1',
    name: 'Apollo Fish This The Place Signature',
    category: 'seafood-fish',
    price: 389,
    originalPrice: 429,
    description: 'Crisp boneless fish strips tossed in spiced yogurt, green chillies, curry leaves, and crushed pepper.',
    isVeg: false,
    isBestseller: true,
    portion: 'Serves 1-2',
    image: '/images/this_the_place_dish_8.jpg'
  },
  {
    id: 'sf2',
    name: 'Crispy Golden Fried Prawns with Tartar Dip',
    category: 'seafood-fish',
    price: 439,
    description: 'Batter-fried jumbo prawns served with creamy homemade tartar sauce and lemon.',
    isVeg: false,
    isBestseller: true,
    portion: '8 Pieces',
    image: '/images/this_the_place_dish_9.jpg'
  },
  {
    id: 'sf3',
    name: 'Chilli Garlic Fish Gravy / Dry',
    category: 'seafood-fish',
    price: 379,
    description: 'Tender fish fillets cooked in fiery garlic and red chilli sauce with bell peppers.',
    isVeg: false,
    portion: 'Serves 1-2',
    image: '/images/this_the_place_dish_10.jpg'
  },

  // Asian Starters
  {
    id: 'as1',
    name: 'Classic Chicken 65 (Indo-Chinese Style)',
    category: 'asian-starters',
    price: 289,
    description: 'Spiced crispy chicken bites tossed with red chilli paste, mustard seeds, and curry leaves.',
    isVeg: false,
    isBestseller: true,
    portion: 'Serves 1-2',
    image: '/images/this_the_place_dish_11.jpg'
  },
  {
    id: 'as2',
    name: 'Crispy Honey Chilli Lotus Stem / Potato',
    category: 'asian-starters',
    price: 249,
    description: 'Crunchy potato fingers and sliced lotus stem glazed with honey, red chillies, and toasted sesame seeds.',
    isVeg: true,
    isBestseller: true,
    portion: 'Serves 1-2',
    image: '/images/this_the_place_dish_12.jpg'
  },
  {
    id: 'as3',
    name: 'Crispy Corn Salt & Pepper',
    category: 'asian-starters',
    price: 229,
    description: 'Crispy fried golden corn kernels tossed with freshly cracked black pepper, onions, and green chillies.',
    isVeg: true,
    portion: 'Serves 1-2'
  },

  // Wok Noodles & Fried Rice
  {
    id: 'nr1',
    name: 'Special Mix Seafood Fried Rice (Prawns & Fish)',
    category: 'noodles-rice',
    price: 389,
    originalPrice: 429,
    description: 'Fragrant jasmine rice wok-tossed with fresh prawns, fish cubes, scrambled eggs, and spring onions.',
    isVeg: false,
    isBestseller: true,
    portion: 'Serves 1-2',
    image: '/images/this_the_place_dish_13.jpg'
  },
  {
    id: 'nr2',
    name: 'Classic Chicken Hakka Noodles',
    category: 'noodles-rice',
    price: 279,
    description: 'Handcrafted egg noodles stir-fried with shredded chicken, crunchy carrots, cabbage, and light soya sauce.',
    isVeg: false,
    isBestseller: true,
    portion: 'Serves 1-2',
    image: '/images/this_the_place_dish_14.jpg'
  },
  {
    id: 'nr3',
    name: 'Fiery Sichuan Chicken Fried Rice',
    category: 'noodles-rice',
    price: 289,
    description: 'Wok-tossed rice with spicy Sichuan chilli oil, diced chicken, bell peppers, and scallions.',
    isVeg: false,
    portion: 'Serves 1-2',
    image: '/images/this_the_place_dish_15.jpg'
  },
  {
    id: 'nr4',
    name: 'Burnt Garlic Veg Hakka Noodles',
    category: 'noodles-rice',
    price: 239,
    description: 'Aromatic noodles tossed with generous golden burnt garlic, mixed vegetables, and seasoning.',
    isVeg: true,
    portion: 'Serves 1-2'
  },

  // Oriental Main Course Gravies
  {
    id: 'mg1',
    name: 'Chicken Manchurian Gravy',
    category: 'main-gravies',
    price: 299,
    description: 'Chicken meatballs in savory, tangy ginger-garlic soya cilantro reduction.',
    isVeg: false,
    isBestseller: true,
    portion: 'Serves 2'
  },
  {
    id: 'mg2',
    name: 'Paneer in Hot Garlic Sauce',
    category: 'main-gravies',
    price: 279,
    description: 'Fresh paneer cubes simmered with capsicum and onions in spicy hot garlic gravy.',
    isVeg: true,
    portion: 'Serves 2'
  },

  // Desserts & Beverages
  {
    id: 'db1',
    name: 'Sizzling Hot Brownie with Vanilla Ice Cream',
    category: 'desserts-beverages',
    price: 199,
    originalPrice: 229,
    description: 'Warm fudge brownie served on a smoking sizzler plate with vanilla ice cream and chocolate drizzle.',
    isVeg: true,
    isBestseller: true,
    isSpecial: true,
    portion: '1 Serving'
  },
  {
    id: 'db2',
    name: 'Virgin Blue Ocean Mojito Cooler',
    category: 'desserts-beverages',
    price: 139,
    description: 'Refreshing sparkling cooler with blue curacao, lime juice, and fresh garden mint.',
    isVeg: true,
    isBestseller: true,
    portion: '350 ml'
  },
  {
    id: 'db3',
    name: 'Thick Belgian Chocolate Shake',
    category: 'desserts-beverages',
    price: 169,
    description: 'Creamy thick shake blended with rich Belgian cocoa and dark chocolate chips.',
    isVeg: true,
    portion: '350 ml'
  }
];
