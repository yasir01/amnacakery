import { GalleryImage } from '@/types';

export const GALLERY_IMAGES: GalleryImage[] = [
  // Wedding Cakes
  {
    id: 'wedding-1',
    src: '/images/gallery/wedding-cake-1.jpg',
    alt: 'Elegant three-tier white wedding cake with fresh flowers',
    category: 'wedding',
  },
  {
    id: 'wedding-2',
    src: '/images/gallery/wedding-cake-2.jpg',
    alt: 'Rustic wedding cake with buttercream and berries',
    category: 'wedding',
  },
  {
    id: 'wedding-3',
    src: '/images/gallery/wedding-cake-3.jpg',
    alt: 'Modern minimalist wedding cake with gold accents',
    category: 'wedding',
  },

  // Birthday Cakes
  {
    id: 'birthday-1',
    src: '/images/gallery/birthday-cake-1.jpg',
    alt: 'Colorful rainbow birthday cake',
    category: 'birthday',
  },
  {
    id: 'birthday-2',
    src: '/images/gallery/birthday-cake-2.jpg',
    alt: 'Princess themed birthday cake',
    category: 'birthday',
  },
  {
    id: 'birthday-3',
    src: '/images/gallery/birthday-cake-3.jpg',
    alt: 'Sports themed birthday cake',
    category: 'birthday',
  },
  {
    id: 'birthday-4',
    src: '/images/gallery/birthday-cake-4.jpg',
    alt: 'Elegant 50th birthday cake with gold decorations',
    category: 'birthday',
  },

  // Custom Cakes
  {
    id: 'custom-1',
    src: '/images/gallery/custom-cake-1.jpg',
    alt: 'Baby shower cake with fondant decorations',
    category: 'custom',
  },
  {
    id: 'custom-2',
    src: '/images/gallery/custom-cake-2.jpg',
    alt: 'Graduation celebration cake',
    category: 'custom',
  },
  {
    id: 'custom-3',
    src: '/images/gallery/custom-cake-3.jpg',
    alt: 'Anniversary cake with hearts',
    category: 'custom',
  },

  // Corporate
  {
    id: 'corporate-1',
    src: '/images/gallery/corporate-cake-1.jpg',
    alt: 'Company logo cake for corporate event',
    category: 'corporate',
  },
  {
    id: 'corporate-2',
    src: '/images/gallery/corporate-cake-2.jpg',
    alt: 'Elegant dessert table for corporate celebration',
    category: 'corporate',
  },

  // Seasonal
  {
    id: 'seasonal-1',
    src: '/images/gallery/seasonal-1.jpg',
    alt: 'Christmas themed cupcakes',
    category: 'seasonal',
  },
  {
    id: 'seasonal-2',
    src: '/images/gallery/seasonal-2.jpg',
    alt: 'Halloween decorated cookies',
    category: 'seasonal',
  },
  {
    id: 'seasonal-3',
    src: '/images/gallery/seasonal-3.jpg',
    alt: 'Valentine\'s Day heart-shaped cake',
    category: 'seasonal',
  },
];

export const getGalleryByCategory = (category: string): GalleryImage[] => {
  if (category === 'all') return GALLERY_IMAGES;
  return GALLERY_IMAGES.filter(img => img.category === category);
};

export const GALLERY_CATEGORIES = [
  { id: 'all', name: 'All' },
  { id: 'wedding', name: 'Wedding' },
  { id: 'birthday', name: 'Birthday' },
  { id: 'custom', name: 'Custom' },
  { id: 'corporate', name: 'Corporate' },
  { id: 'seasonal', name: 'Seasonal' },
];
