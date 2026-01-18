import { Product, CategoryInfo } from '@/types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'cakes',
    name: 'Cakes',
    description: 'Custom cakes for every occasion',
    image: '/images/categories/cakes.jpg',
  },
  {
    id: 'cupcakes',
    name: 'Cupcakes',
    description: 'Perfectly portioned treats',
    image: '/images/categories/cupcakes.jpg',
  },
  {
    id: 'cookies',
    name: 'Cookies',
    description: 'Fresh-baked cookies and biscuits',
    image: '/images/categories/cookies.jpg',
  },
  {
    id: 'pastries',
    name: 'Pastries',
    description: 'Flaky, buttery delights',
    image: '/images/categories/pastries.jpg',
  },
  {
    id: 'breads',
    name: 'Artisan Breads',
    description: 'Freshly baked daily',
    image: '/images/categories/breads.jpg',
  },
  {
    id: 'seasonal',
    name: 'Seasonal Specials',
    description: 'Limited time offerings',
    image: '/images/categories/seasonal.jpg',
  },
];

export const PRODUCTS: Product[] = [
  // Cakes
  {
    id: 'classic-vanilla-cake',
    name: 'Classic Vanilla Cake',
    description: 'A timeless favorite made with pure vanilla extract and topped with silky vanilla buttercream. Light, fluffy, and perfect for any celebration.',
    category: 'cakes',
    basePrice: 45,
    images: ['/images/products/vanilla-cake.jpg'],
    allergens: ['milk', 'eggs', 'wheat'],
    variants: {
      sizes: [
        { id: '6inch', name: '6" (serves 8-10)', price: 45 },
        { id: '8inch', name: '8" (serves 12-16)', price: 65 },
        { id: '10inch', name: '10" (serves 20-25)', price: 85 },
      ],
    },
    isAvailable: true,
    isCustomizable: true,
    servings: '8-25',
    preparationTime: '48 hours',
  },
  {
    id: 'chocolate-dream-cake',
    name: 'Chocolate Dream Cake',
    description: 'Rich, moist chocolate cake layered with chocolate ganache and covered in dark chocolate buttercream. A chocolate lover\'s paradise.',
    category: 'cakes',
    basePrice: 50,
    images: ['/images/products/chocolate-cake.jpg'],
    allergens: ['milk', 'eggs', 'wheat', 'soy'],
    variants: {
      sizes: [
        { id: '6inch', name: '6" (serves 8-10)', price: 50 },
        { id: '8inch', name: '8" (serves 12-16)', price: 70 },
        { id: '10inch', name: '10" (serves 20-25)', price: 95 },
      ],
    },
    isAvailable: true,
    isCustomizable: true,
    servings: '8-25',
    preparationTime: '48 hours',
  },
  {
    id: 'red-velvet-cake',
    name: 'Red Velvet Cake',
    description: 'Southern classic with a hint of cocoa, topped with our signature cream cheese frosting. Elegant and delicious.',
    category: 'cakes',
    basePrice: 55,
    images: ['/images/products/red-velvet-cake.jpg'],
    allergens: ['milk', 'eggs', 'wheat'],
    variants: {
      sizes: [
        { id: '6inch', name: '6" (serves 8-10)', price: 55 },
        { id: '8inch', name: '8" (serves 12-16)', price: 75 },
        { id: '10inch', name: '10" (serves 20-25)', price: 100 },
      ],
    },
    isAvailable: true,
    isCustomizable: true,
    servings: '8-25',
    preparationTime: '48 hours',
  },
  {
    id: 'carrot-cake',
    name: 'Carrot Cake',
    description: 'Moist, spiced carrot cake with walnuts and raisins, topped with tangy cream cheese frosting.',
    category: 'cakes',
    basePrice: 50,
    images: ['/images/products/carrot-cake.jpg'],
    allergens: ['milk', 'eggs', 'wheat', 'tree-nuts'],
    variants: {
      sizes: [
        { id: '6inch', name: '6" (serves 8-10)', price: 50 },
        { id: '8inch', name: '8" (serves 12-16)', price: 70 },
        { id: '10inch', name: '10" (serves 20-25)', price: 95 },
      ],
    },
    isAvailable: true,
    isCustomizable: true,
    servings: '8-25',
    preparationTime: '48 hours',
  },
  {
    id: 'custom-celebration-cake',
    name: 'Custom Celebration Cake',
    description: 'Design your dream cake! Choose your flavors, frosting, and decorations for a truly personalized creation.',
    category: 'cakes',
    basePrice: 75,
    images: ['/images/products/custom-cake.jpg'],
    allergens: ['milk', 'eggs', 'wheat'],
    isAvailable: true,
    isCustomizable: true,
    servings: 'Varies',
    preparationTime: '72 hours',
  },

  // Cupcakes
  {
    id: 'vanilla-cupcakes',
    name: 'Vanilla Cupcakes',
    description: 'Light and fluffy vanilla cupcakes with swirled buttercream frosting.',
    category: 'cupcakes',
    basePrice: 3.5,
    images: ['/images/products/vanilla-cupcakes.jpg'],
    allergens: ['milk', 'eggs', 'wheat'],
    variants: {
      sizes: [
        { id: 'single', name: 'Single', price: 3.5 },
        { id: 'half-dozen', name: 'Half Dozen (6)', price: 18 },
        { id: 'dozen', name: 'Dozen (12)', price: 34 },
      ],
    },
    isAvailable: true,
    isCustomizable: false,
  },
  {
    id: 'chocolate-cupcakes',
    name: 'Chocolate Cupcakes',
    description: 'Rich chocolate cupcakes topped with chocolate buttercream.',
    category: 'cupcakes',
    basePrice: 3.5,
    images: ['/images/products/chocolate-cupcakes.jpg'],
    allergens: ['milk', 'eggs', 'wheat', 'soy'],
    variants: {
      sizes: [
        { id: 'single', name: 'Single', price: 3.5 },
        { id: 'half-dozen', name: 'Half Dozen (6)', price: 18 },
        { id: 'dozen', name: 'Dozen (12)', price: 34 },
      ],
    },
    isAvailable: true,
    isCustomizable: false,
  },
  {
    id: 'assorted-cupcakes',
    name: 'Assorted Cupcakes Box',
    description: 'A delightful mix of our most popular flavors - vanilla, chocolate, red velvet, and lemon.',
    category: 'cupcakes',
    basePrice: 36,
    images: ['/images/products/assorted-cupcakes.jpg'],
    allergens: ['milk', 'eggs', 'wheat'],
    variants: {
      sizes: [
        { id: 'dozen', name: 'Dozen (12)', price: 36 },
        { id: 'two-dozen', name: 'Two Dozen (24)', price: 68 },
      ],
    },
    isAvailable: true,
    isCustomizable: false,
  },

  // Cookies
  {
    id: 'chocolate-chip-cookies',
    name: 'Chocolate Chip Cookies',
    description: 'Classic chocolate chip cookies, crispy on the outside, chewy on the inside.',
    category: 'cookies',
    basePrice: 2,
    images: ['/images/products/chocolate-chip-cookies.jpg'],
    allergens: ['milk', 'eggs', 'wheat', 'soy'],
    variants: {
      sizes: [
        { id: 'single', name: 'Single', price: 2 },
        { id: 'half-dozen', name: 'Half Dozen (6)', price: 10 },
        { id: 'dozen', name: 'Dozen (12)', price: 18 },
      ],
    },
    isAvailable: true,
    isCustomizable: false,
  },
  {
    id: 'sugar-cookies',
    name: 'Decorated Sugar Cookies',
    description: 'Buttery sugar cookies with royal icing decoration. Perfect for parties and events.',
    category: 'cookies',
    basePrice: 4,
    images: ['/images/products/sugar-cookies.jpg'],
    allergens: ['milk', 'eggs', 'wheat'],
    variants: {
      sizes: [
        { id: 'single', name: 'Single', price: 4 },
        { id: 'half-dozen', name: 'Half Dozen (6)', price: 22 },
        { id: 'dozen', name: 'Dozen (12)', price: 40 },
      ],
    },
    isAvailable: true,
    isCustomizable: true,
  },
  {
    id: 'oatmeal-raisin-cookies',
    name: 'Oatmeal Raisin Cookies',
    description: 'Wholesome oatmeal cookies with plump raisins and a hint of cinnamon.',
    category: 'cookies',
    basePrice: 2,
    images: ['/images/products/oatmeal-cookies.jpg'],
    allergens: ['milk', 'eggs', 'wheat'],
    variants: {
      sizes: [
        { id: 'single', name: 'Single', price: 2 },
        { id: 'half-dozen', name: 'Half Dozen (6)', price: 10 },
        { id: 'dozen', name: 'Dozen (12)', price: 18 },
      ],
    },
    isAvailable: true,
    isCustomizable: false,
  },

  // Pastries
  {
    id: 'croissants',
    name: 'Butter Croissants',
    description: 'Flaky, buttery croissants made with imported French butter.',
    category: 'pastries',
    basePrice: 4,
    images: ['/images/products/croissants.jpg'],
    allergens: ['milk', 'eggs', 'wheat'],
    variants: {
      sizes: [
        { id: 'single', name: 'Single', price: 4 },
        { id: 'half-dozen', name: 'Half Dozen (6)', price: 22 },
      ],
    },
    isAvailable: true,
    isCustomizable: false,
  },
  {
    id: 'chocolate-croissants',
    name: 'Chocolate Croissants',
    description: 'Pain au chocolat - buttery croissant filled with rich dark chocolate.',
    category: 'pastries',
    basePrice: 4.5,
    images: ['/images/products/pain-au-chocolat.jpg'],
    allergens: ['milk', 'eggs', 'wheat', 'soy'],
    variants: {
      sizes: [
        { id: 'single', name: 'Single', price: 4.5 },
        { id: 'half-dozen', name: 'Half Dozen (6)', price: 24 },
      ],
    },
    isAvailable: true,
    isCustomizable: false,
  },
  {
    id: 'cinnamon-rolls',
    name: 'Cinnamon Rolls',
    description: 'Soft, gooey cinnamon rolls with cream cheese glaze.',
    category: 'pastries',
    basePrice: 5,
    images: ['/images/products/cinnamon-rolls.jpg'],
    allergens: ['milk', 'eggs', 'wheat'],
    variants: {
      sizes: [
        { id: 'single', name: 'Single', price: 5 },
        { id: 'half-dozen', name: 'Half Dozen (6)', price: 27 },
      ],
    },
    isAvailable: true,
    isCustomizable: false,
  },

  // Breads
  {
    id: 'sourdough-loaf',
    name: 'Sourdough Loaf',
    description: 'Traditional sourdough bread with a crispy crust and tangy flavor.',
    category: 'breads',
    basePrice: 8,
    images: ['/images/products/sourdough.jpg'],
    allergens: ['wheat'],
    isAvailable: true,
    isCustomizable: false,
  },
  {
    id: 'brioche-loaf',
    name: 'Brioche Loaf',
    description: 'Rich, buttery French brioche bread.',
    category: 'breads',
    basePrice: 10,
    images: ['/images/products/brioche.jpg'],
    allergens: ['milk', 'eggs', 'wheat'],
    isAvailable: true,
    isCustomizable: false,
  },
  {
    id: 'focaccia',
    name: 'Rosemary Focaccia',
    description: 'Italian flatbread topped with fresh rosemary and sea salt.',
    category: 'breads',
    basePrice: 9,
    images: ['/images/products/focaccia.jpg'],
    allergens: ['wheat'],
    isAvailable: true,
    isCustomizable: false,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return PRODUCTS.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return PRODUCTS.filter(p => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return PRODUCTS.filter(p =>
    ['classic-vanilla-cake', 'chocolate-dream-cake', 'assorted-cupcakes', 'croissants'].includes(p.id)
  );
};
