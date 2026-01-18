'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Filter } from 'lucide-react';
import ProductCard from '@/components/products/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { ALLERGENS } from '@/data/allergens';
import { ProductCategory } from '@/types';

export default function MenuContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') as ProductCategory | null;

  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>(
    categoryParam || 'all'
  );
  const [excludedAllergens, setExcludedAllergens] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let products = PRODUCTS;

    // Filter by category
    if (selectedCategory !== 'all') {
      products = products.filter((p) => p.category === selectedCategory);
    }

    // Filter by allergens (exclude products with selected allergens)
    if (excludedAllergens.length > 0) {
      products = products.filter(
        (p) => !p.allergens.some((a) => excludedAllergens.includes(a))
      );
    }

    return products;
  }, [selectedCategory, excludedAllergens]);

  const toggleAllergen = (allergenId: string) => {
    setExcludedAllergens((prev) =>
      prev.includes(allergenId)
        ? prev.filter((a) => a !== allergenId)
        : [...prev, allergenId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Our Menu</h1>
          <p className="mt-2 text-lg text-gray-600">
            Fresh baked goods made with love, every day
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="font-semibold text-gray-900 mb-4">Categories</h2>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-rose-100 text-rose-700'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    All Products
                  </button>
                </li>
                {CATEGORIES.map((category) => (
                  <li key={category.id}>
                    <button
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-rose-100 text-rose-700'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>

              <hr className="my-6" />

              <h2 className="font-semibold text-gray-900 mb-4">
                Allergen Filters
              </h2>
              <p className="text-sm text-gray-500 mb-3">
                Exclude products containing:
              </p>
              <ul className="space-y-2">
                {ALLERGENS.map((allergen) => (
                  <li key={allergen.id}>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={excludedAllergens.includes(allergen.id)}
                        onChange={() => toggleAllergen(allergen.id)}
                        className="rounded border-gray-300 text-rose-600 focus:ring-rose-500"
                      />
                      <span className="text-sm">
                        {allergen.icon} {allergen.name}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>

              {excludedAllergens.length > 0 && (
                <button
                  onClick={() => setExcludedAllergens([])}
                  className="mt-4 text-sm text-rose-600 hover:text-rose-700"
                >
                  Clear allergen filters
                </button>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm"
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>

              {showFilters && (
                <div className="mt-4 bg-white rounded-xl p-4 shadow-sm">
                  {/* Categories */}
                  <div className="mb-4">
                    <h3 className="font-medium mb-2">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedCategory('all')}
                        className={`px-3 py-1 rounded-full text-sm ${
                          selectedCategory === 'all'
                            ? 'bg-rose-600 text-white'
                            : 'bg-gray-100'
                        }`}
                      >
                        All
                      </button>
                      {CATEGORIES.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`px-3 py-1 rounded-full text-sm ${
                            selectedCategory === category.id
                              ? 'bg-rose-600 text-white'
                              : 'bg-gray-100'
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Allergens */}
                  <div>
                    <h3 className="font-medium mb-2">Exclude Allergens</h3>
                    <div className="flex flex-wrap gap-2">
                      {ALLERGENS.map((allergen) => (
                        <button
                          key={allergen.id}
                          onClick={() => toggleAllergen(allergen.id)}
                          className={`px-3 py-1 rounded-full text-sm ${
                            excludedAllergens.includes(allergen.id)
                              ? 'bg-rose-600 text-white'
                              : 'bg-gray-100'
                          }`}
                        >
                          {allergen.icon} {allergen.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <>
                <p className="text-gray-500 mb-4">
                  Showing {filteredProducts.length} product
                  {filteredProducts.length !== 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  No products found matching your filters.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setExcludedAllergens([]);
                  }}
                  className="mt-4 text-rose-600 hover:text-rose-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
