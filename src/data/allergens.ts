import { Allergen } from '@/types';

// FDA Major Allergens (2025 Updated)
export const ALLERGENS: Allergen[] = [
  { id: 'milk', name: 'Milk', icon: '🥛' },
  { id: 'eggs', name: 'Eggs', icon: '🥚' },
  { id: 'fish', name: 'Fish', icon: '🐟' },
  { id: 'shellfish', name: 'Shellfish', icon: '🦐' },
  { id: 'tree-nuts', name: 'Tree Nuts', icon: '🌰' },
  { id: 'peanuts', name: 'Peanuts', icon: '🥜' },
  { id: 'wheat', name: 'Wheat', icon: '🌾' },
  { id: 'soy', name: 'Soy', icon: '🫘' },
  { id: 'sesame', name: 'Sesame', icon: '⚪' },
];

export const getAllergenById = (id: string): Allergen | undefined => {
  return ALLERGENS.find(a => a.id === id);
};

export const getAllergenNames = (ids: string[]): string[] => {
  return ids.map(id => getAllergenById(id)?.name || id);
};
