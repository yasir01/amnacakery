// Product Types
export interface Allergen {
  id: string;
  name: string;
  icon: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  basePrice: number;
  images: string[];
  allergens: string[];
  variants?: {
    sizes?: ProductVariant[];
    flavors?: ProductVariant[];
  };
  isAvailable: boolean;
  isCustomizable: boolean;
  servings?: string;
  preparationTime?: string;
}

export type ProductCategory =
  | 'cakes'
  | 'cupcakes'
  | 'cookies'
  | 'pastries'
  | 'breads'
  | 'seasonal';

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  description: string;
  image: string;
}

// Cart Types
export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedSize?: ProductVariant;
  selectedFlavor?: ProductVariant;
  customization?: CustomCakeOrder;
  totalPrice: number;
}

// Custom Cake Order Types
export interface CustomCakeOrder {
  size: string;
  flavor: string;
  frosting: string;
  filling?: string;
  occasion: string;
  message?: string;
  designDescription?: string;
  referenceImageUrl?: string;
  dietaryRequirements: string[];
  servings: number;
}

// Order Types
export interface DeliveryInfo {
  type: 'pickup' | 'delivery';
  date: string;
  time: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  instructions?: string;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  customer: CustomerInfo;
  delivery: DeliveryInfo;
  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
  status: OrderStatus;
  createdAt: Date;
  paymentIntentId?: string;
}

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'delivered'
  | 'cancelled';

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Gallery Types
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'wedding' | 'birthday' | 'custom' | 'corporate' | 'seasonal';
}
