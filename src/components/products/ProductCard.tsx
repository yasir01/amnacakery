'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';
import { getAllergenById } from '@/data/allergens';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const minPrice = product.variants?.sizes?.[0]?.price || product.basePrice;
  const maxPrice = product.variants?.sizes?.[product.variants.sizes.length - 1]?.price;

  return (
    <Link href={`/menu/${product.id}`} className="group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <Image
            src={product.images[0] || '/images/placeholder.jpg'}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {!product.isAvailable && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="bg-white px-3 py-1 rounded-full text-sm font-medium">
                Sold Out
              </span>
            </div>
          )}
          {product.isCustomizable && (
            <span className="absolute top-3 left-3 bg-rose-600 text-white px-2 py-1 text-xs font-medium rounded-full">
              Customizable
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-medium text-gray-900 group-hover:text-rose-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {product.description}
          </p>

          {/* Price */}
          <div className="mt-3 flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-900">
              {maxPrice && maxPrice !== minPrice
                ? `${formatPrice(minPrice)} - ${formatPrice(maxPrice)}`
                : formatPrice(minPrice)}
            </span>
          </div>

          {/* Allergens */}
          {product.allergens.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {product.allergens.slice(0, 4).map((allergenId) => {
                const allergen = getAllergenById(allergenId);
                return allergen ? (
                  <span
                    key={allergenId}
                    className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full"
                    title={allergen.name}
                  >
                    {allergen.icon} {allergen.name}
                  </span>
                ) : null;
              })}
              {product.allergens.length > 4 && (
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                  +{product.allergens.length - 4} more
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
