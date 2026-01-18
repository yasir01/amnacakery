'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, Clock, AlertTriangle } from 'lucide-react';
import { getProductById } from '@/data/products';
import { getAllergenById } from '@/data/allergens';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { ProductVariant } from '@/types';
import CustomCakeForm from '@/components/forms/CustomCakeForm';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const product = getProductById(params.productId as string);
  const { addItem, openCart } = useCartStore();

  const [selectedSize, setSelectedSize] = useState<ProductVariant | undefined>(
    product?.variants?.sizes?.[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [showCustomForm, setShowCustomForm] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Link href="/menu">
            <Button variant="primary">Back to Menu</Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentPrice = selectedSize?.price || product.basePrice;
  const totalPrice = currentPrice * quantity;

  const handleAddToCart = () => {
    if (product.isCustomizable && product.id === 'custom-celebration-cake') {
      setShowCustomForm(true);
      return;
    }

    addItem(product, quantity, selectedSize);
    openCart();
  };

  if (showCustomForm) {
    return (
      <CustomCakeForm
        product={product}
        onBack={() => setShowCustomForm(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Menu
        </button>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-square bg-gray-100">
              <Image
                src={product.images[0] || '/images/placeholder.jpg'}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {product.isCustomizable && (
                <span className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 text-sm font-medium rounded-full">
                  Customizable
                </span>
              )}
            </div>

            {/* Details */}
            <div className="p-6 lg:p-8">
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {product.description}
              </p>

              {/* Preparation Time */}
              {product.preparationTime && (
                <div className="mt-4 flex items-center text-gray-500">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Minimum {product.preparationTime} notice required</span>
                </div>
              )}

              {/* Allergens */}
              {product.allergens.length > 0 && (
                <div className="mt-6">
                  <div className="flex items-center mb-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
                    <h3 className="font-medium text-gray-900">
                      Allergen Information
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.allergens.map((allergenId) => {
                      const allergen = getAllergenById(allergenId);
                      return allergen ? (
                        <span
                          key={allergenId}
                          className="inline-flex items-center bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
                        >
                          {allergen.icon} {allergen.name}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.variants?.sizes && (
                <div className="mt-6">
                  <h3 className="font-medium text-gray-900 mb-3">Select Size</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {product.variants.sizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={() => setSelectedSize(size)}
                        className={`flex items-center justify-between p-3 rounded-lg border-2 transition-colors ${
                          selectedSize?.id === size.id
                            ? 'border-rose-600 bg-rose-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <span className="font-medium">{size.name}</span>
                        <span className="text-gray-600">
                          {formatPrice(size.price)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mt-6">
                <h3 className="font-medium text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="text-xl font-medium w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price & Add to Cart */}
              <div className="mt-8 pt-6 border-t">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-600">Total</span>
                  <span className="text-2xl font-bold text-gray-900">
                    {formatPrice(totalPrice)}
                  </span>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={handleAddToCart}
                  disabled={!product.isAvailable}
                >
                  {!product.isAvailable ? (
                    'Sold Out'
                  ) : product.id === 'custom-celebration-cake' ? (
                    'Customize Your Cake'
                  ) : (
                    <>
                      <ShoppingBag className="h-5 w-5 mr-2" />
                      Add to Cart
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
