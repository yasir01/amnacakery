'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ArrowLeft, Upload, ShoppingBag } from 'lucide-react';
import { Product, CustomCakeOrder } from '@/types';
import { useCartStore } from '@/store/cart';
import { formatPrice, getMinOrderDate } from '@/lib/utils';
import Button from '@/components/ui/Button';

const customCakeSchema = z.object({
  size: z.string().min(1, 'Please select a size'),
  flavor: z.string().min(1, 'Please select a flavor'),
  frosting: z.string().min(1, 'Please select a frosting'),
  filling: z.string().optional(),
  occasion: z.string().min(1, 'Please select an occasion'),
  message: z.string().max(50, 'Message must be 50 characters or less').optional(),
  designDescription: z.string().max(500, 'Description must be 500 characters or less').optional(),
  servings: z.number().min(8, 'Minimum 8 servings').max(100, 'Maximum 100 servings'),
  dietaryRequirements: z.array(z.string()),
});

type CustomCakeFormData = z.infer<typeof customCakeSchema>;

interface CustomCakeFormProps {
  product: Product;
  onBack: () => void;
}

const SIZES = [
  { id: '6inch', name: '6" Round (serves 8-10)', price: 75 },
  { id: '8inch', name: '8" Round (serves 12-16)', price: 95 },
  { id: '10inch', name: '10" Round (serves 20-25)', price: 125 },
  { id: '12inch', name: '12" Round (serves 30-40)', price: 160 },
  { id: 'sheet-quarter', name: 'Quarter Sheet (serves 20-25)', price: 85 },
  { id: 'sheet-half', name: 'Half Sheet (serves 40-50)', price: 150 },
  { id: 'tiered-2', name: '2-Tier (serves 40-60)', price: 250 },
  { id: 'tiered-3', name: '3-Tier (serves 75-100)', price: 400 },
];

const FLAVORS = [
  { id: 'vanilla', name: 'Classic Vanilla' },
  { id: 'chocolate', name: 'Rich Chocolate' },
  { id: 'red-velvet', name: 'Red Velvet' },
  { id: 'lemon', name: 'Lemon' },
  { id: 'carrot', name: 'Carrot' },
  { id: 'marble', name: 'Marble (Vanilla & Chocolate)' },
  { id: 'strawberry', name: 'Strawberry' },
  { id: 'funfetti', name: 'Funfetti' },
];

const FROSTINGS = [
  { id: 'vanilla-buttercream', name: 'Vanilla Buttercream' },
  { id: 'chocolate-buttercream', name: 'Chocolate Buttercream' },
  { id: 'cream-cheese', name: 'Cream Cheese' },
  { id: 'whipped-cream', name: 'Whipped Cream' },
  { id: 'fondant', name: 'Fondant (+$30)', extra: 30 },
  { id: 'ganache', name: 'Chocolate Ganache' },
];

const FILLINGS = [
  { id: 'none', name: 'None' },
  { id: 'fruit', name: 'Fresh Fruit' },
  { id: 'jam', name: 'Fruit Jam' },
  { id: 'mousse', name: 'Chocolate Mousse' },
  { id: 'custard', name: 'Vanilla Custard' },
  { id: 'caramel', name: 'Caramel' },
];

const OCCASIONS = [
  { id: 'birthday', name: 'Birthday' },
  { id: 'wedding', name: 'Wedding' },
  { id: 'anniversary', name: 'Anniversary' },
  { id: 'baby-shower', name: 'Baby Shower' },
  { id: 'graduation', name: 'Graduation' },
  { id: 'corporate', name: 'Corporate Event' },
  { id: 'other', name: 'Other' },
];

const DIETARY_OPTIONS = [
  { id: 'gluten-free', name: 'Gluten-Free (+$15)', extra: 15 },
  { id: 'vegan', name: 'Vegan (+$20)', extra: 20 },
  { id: 'nut-free', name: 'Nut-Free' },
  { id: 'dairy-free', name: 'Dairy-Free (+$15)', extra: 15 },
];

export default function CustomCakeForm({ product, onBack }: CustomCakeFormProps) {
  const { addItem, openCart } = useCartStore();
  const [referenceImage, setReferenceImage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CustomCakeFormData>({
    resolver: zodResolver(customCakeSchema),
    defaultValues: {
      size: '',
      flavor: '',
      frosting: '',
      filling: 'none',
      occasion: '',
      message: '',
      designDescription: '',
      servings: 12,
      dietaryRequirements: [],
    },
  });

  const watchSize = watch('size');
  const watchFrosting = watch('frosting');
  const watchDietary = watch('dietaryRequirements');

  const calculatePrice = () => {
    let price = SIZES.find(s => s.id === watchSize)?.price || 75;

    // Add frosting extra
    const frostingExtra = FROSTINGS.find(f => f.id === watchFrosting)?.extra || 0;
    price += frostingExtra;

    // Add dietary extras
    watchDietary.forEach(d => {
      const extra = DIETARY_OPTIONS.find(opt => opt.id === d)?.extra || 0;
      price += extra;
    });

    return price;
  };

  const onSubmit = (data: CustomCakeFormData) => {
    const customization: CustomCakeOrder = {
      size: SIZES.find(s => s.id === data.size)?.name || data.size,
      flavor: FLAVORS.find(f => f.id === data.flavor)?.name || data.flavor,
      frosting: FROSTINGS.find(f => f.id === data.frosting)?.name || data.frosting,
      filling: FILLINGS.find(f => f.id === data.filling)?.name,
      occasion: OCCASIONS.find(o => o.id === data.occasion)?.name || data.occasion,
      message: data.message,
      designDescription: data.designDescription,
      referenceImageUrl: referenceImage || undefined,
      dietaryRequirements: data.dietaryRequirements,
      servings: data.servings,
    };

    const selectedSize = {
      id: data.size,
      name: SIZES.find(s => s.id === data.size)?.name || data.size,
      price: calculatePrice(),
    };

    addItem(product, 1, selectedSize, undefined, customization);
    openCart();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setReferenceImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Product
        </button>

        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Design Your Custom Cake
          </h1>
          <p className="text-gray-600 mb-8">
            Fill out the details below and we&apos;ll create a personalized cake just for you.
            Minimum 72 hours notice required.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Size Selection */}
            <div>
              <label className="block font-medium text-gray-900 mb-3">
                Cake Size *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SIZES.map((size) => (
                  <label
                    key={size.id}
                    className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                      watchSize === size.id
                        ? 'border-rose-600 bg-rose-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <input
                        type="radio"
                        value={size.id}
                        {...register('size')}
                        className="sr-only"
                      />
                      <span>{size.name}</span>
                    </div>
                    <span className="font-medium">{formatPrice(size.price)}</span>
                  </label>
                ))}
              </div>
              {errors.size && (
                <p className="mt-2 text-sm text-red-600">{errors.size.message}</p>
              )}
            </div>

            {/* Flavor Selection */}
            <div>
              <label className="block font-medium text-gray-900 mb-3">
                Cake Flavor *
              </label>
              <select
                {...register('flavor')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              >
                <option value="">Select a flavor</option>
                {FLAVORS.map((flavor) => (
                  <option key={flavor.id} value={flavor.id}>
                    {flavor.name}
                  </option>
                ))}
              </select>
              {errors.flavor && (
                <p className="mt-2 text-sm text-red-600">{errors.flavor.message}</p>
              )}
            </div>

            {/* Frosting Selection */}
            <div>
              <label className="block font-medium text-gray-900 mb-3">
                Frosting *
              </label>
              <select
                {...register('frosting')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              >
                <option value="">Select a frosting</option>
                {FROSTINGS.map((frosting) => (
                  <option key={frosting.id} value={frosting.id}>
                    {frosting.name}
                  </option>
                ))}
              </select>
              {errors.frosting && (
                <p className="mt-2 text-sm text-red-600">{errors.frosting.message}</p>
              )}
            </div>

            {/* Filling Selection */}
            <div>
              <label className="block font-medium text-gray-900 mb-3">
                Filling (Optional)
              </label>
              <select
                {...register('filling')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              >
                {FILLINGS.map((filling) => (
                  <option key={filling.id} value={filling.id}>
                    {filling.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Occasion */}
            <div>
              <label className="block font-medium text-gray-900 mb-3">
                Occasion *
              </label>
              <select
                {...register('occasion')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              >
                <option value="">Select an occasion</option>
                {OCCASIONS.map((occasion) => (
                  <option key={occasion.id} value={occasion.id}>
                    {occasion.name}
                  </option>
                ))}
              </select>
              {errors.occasion && (
                <p className="mt-2 text-sm text-red-600">{errors.occasion.message}</p>
              )}
            </div>

            {/* Cake Message */}
            <div>
              <label className="block font-medium text-gray-900 mb-3">
                Cake Message (Optional)
              </label>
              <input
                type="text"
                {...register('message')}
                placeholder="e.g., Happy Birthday Sarah!"
                maxLength={50}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              />
              <p className="mt-1 text-sm text-gray-500">Maximum 50 characters</p>
              {errors.message && (
                <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            {/* Design Description */}
            <div>
              <label className="block font-medium text-gray-900 mb-3">
                Design Description (Optional)
              </label>
              <textarea
                {...register('designDescription')}
                rows={4}
                placeholder="Describe your dream cake design, theme, colors, or any specific decorations you'd like..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              />
              {errors.designDescription && (
                <p className="mt-2 text-sm text-red-600">{errors.designDescription.message}</p>
              )}
            </div>

            {/* Reference Image Upload */}
            <div>
              <label className="block font-medium text-gray-900 mb-3">
                Reference Image (Optional)
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                {referenceImage ? (
                  <div className="space-y-3">
                    <img
                      src={referenceImage}
                      alt="Reference"
                      className="max-h-40 mx-auto rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => setReferenceImage(null)}
                      className="text-sm text-rose-600 hover:text-rose-700"
                    >
                      Remove image
                    </button>
                  </div>
                ) : (
                  <label className="cursor-pointer">
                    <Upload className="h-10 w-10 mx-auto text-gray-400 mb-2" />
                    <p className="text-gray-600">
                      Click to upload a reference image
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      PNG, JPG up to 5MB
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Dietary Requirements */}
            <div>
              <label className="block font-medium text-gray-900 mb-3">
                Dietary Requirements
              </label>
              <div className="grid grid-cols-2 gap-3">
                {DIETARY_OPTIONS.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50"
                  >
                    <input
                      type="checkbox"
                      value={option.id}
                      {...register('dietaryRequirements')}
                      className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                    />
                    <span>{option.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between text-lg">
                <span className="font-medium">Estimated Total</span>
                <span className="text-2xl font-bold text-gray-900">
                  {formatPrice(calculatePrice())}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Final price may vary based on design complexity. We&apos;ll confirm the
                final price before proceeding.
              </p>
            </div>

            {/* Submit */}
            <Button type="submit" variant="primary" size="lg" className="w-full">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Add Custom Cake to Cart
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
