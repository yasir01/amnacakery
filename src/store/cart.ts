import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product, ProductVariant, CustomCakeOrder } from '@/types';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (
    product: Product,
    quantity: number,
    selectedSize?: ProductVariant,
    selectedFlavor?: ProductVariant,
    customization?: CustomCakeOrder
  ) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getSubtotal: () => number;
  getItemCount: () => number;
}

const calculateItemPrice = (
  product: Product,
  selectedSize?: ProductVariant,
  selectedFlavor?: ProductVariant,
  customization?: CustomCakeOrder
): number => {
  let price = selectedSize?.price || product.basePrice;

  // Add flavor price if applicable
  if (selectedFlavor) {
    price += selectedFlavor.price;
  }

  // Custom cake pricing adjustments
  if (customization) {
    // Additional pricing logic for custom cakes can be added here
    // For now, using base price from size selection
  }

  return price;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, quantity, selectedSize, selectedFlavor, customization) => {
        const itemPrice = calculateItemPrice(product, selectedSize, selectedFlavor, customization);
        const itemId = `${product.id}-${selectedSize?.id || 'default'}-${selectedFlavor?.id || 'default'}-${Date.now()}`;

        const newItem: CartItem = {
          id: itemId,
          product,
          quantity,
          selectedSize,
          selectedFlavor,
          customization,
          totalPrice: itemPrice * quantity,
        };

        set(state => ({
          items: [...state.items, newItem],
        }));
      },

      removeItem: (itemId) => {
        set(state => ({
          items: state.items.filter(item => item.id !== itemId),
        }));
      },

      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }

        set(state => ({
          items: state.items.map(item => {
            if (item.id === itemId) {
              const unitPrice = item.totalPrice / item.quantity;
              return {
                ...item,
                quantity,
                totalPrice: unitPrice * quantity,
              };
            }
            return item;
          }),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      toggleCart: () => {
        set(state => ({ isOpen: !state.isOpen }));
      },

      openCart: () => {
        set({ isOpen: true });
      },

      closeCart: () => {
        set({ isOpen: false });
      },

      getSubtotal: () => {
        return get().items.reduce((sum, item) => sum + item.totalPrice, 0);
      },

      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'amna-bakery-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
);
