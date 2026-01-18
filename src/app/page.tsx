import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, Truck, Award, Heart } from 'lucide-react';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/products/ProductCard';
import { getFeaturedProducts, CATEGORIES } from '@/data/products';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 to-amber-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Handcrafted with{' '}
                <span className="text-rose-600">Love</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
                Every cake tells a story. From custom celebration cakes to daily fresh pastries,
                we bake happiness into every bite.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/menu">
                  <Button size="lg" variant="primary">
                    View Our Menu
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/menu/custom-celebration-cake">
                  <Button size="lg" variant="outline">
                    Order Custom Cake
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-rose-200 rounded-full blur-3xl opacity-30" />
                <Image
                  src="/images/hero-cake.jpg"
                  alt="Beautiful custom celebration cake"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-amber-200 rounded-full opacity-50 blur-xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-rose-200 rounded-full opacity-50 blur-xl" />
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-rose-100 rounded-full text-rose-600 mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900">Made with Love</h3>
              <p className="text-sm text-gray-500 mt-1">Every recipe, perfected</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-rose-100 rounded-full text-rose-600 mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900">Quality Ingredients</h3>
              <p className="text-sm text-gray-500 mt-1">Premium, fresh, local</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-rose-100 rounded-full text-rose-600 mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900">Fresh Daily</h3>
              <p className="text-sm text-gray-500 mt-1">Baked every morning</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-rose-100 rounded-full text-rose-600 mb-4">
                <Truck className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-900">Local Delivery</h3>
              <p className="text-sm text-gray-500 mt-1">Right to your door</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Explore Our Menu
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              From custom cakes to fresh pastries, find your perfect treat
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {CATEGORIES.slice(0, 6).map((category) => (
              <Link
                key={category.id}
                href={`/menu?category=${category.id}`}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-xl font-semibold text-white">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-200 mt-1">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Customer Favorites
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Our most loved treats
              </p>
            </div>
            <Link href="/menu">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Cake CTA */}
      <section className="py-16 bg-rose-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Create Your Dream Cake
            </h2>
            <p className="mt-4 text-lg text-rose-100 max-w-2xl mx-auto">
              Whether it&apos;s a birthday, wedding, or any special occasion,
              let us bring your vision to life with a custom-designed cake.
            </p>
            <div className="mt-8">
              <Link href="/menu/custom-celebration-cake">
                <Button
                  size="lg"
                  className="bg-white text-rose-600 hover:bg-rose-50"
                >
                  Start Your Custom Order
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Teaser */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Follow Our Journey
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              @amnasbakery on Instagram
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <a
                key={i}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square rounded-lg overflow-hidden group bg-gray-200"
              >
                <Image
                  src={`/images/instagram/post-${i}.jpg`}
                  alt={`Instagram post ${i}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-rose-600 hover:text-rose-700 font-medium"
            >
              Follow us on Instagram
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Allergen Notice */}
      <section className="py-8 bg-amber-50 border-y border-amber-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <span className="text-2xl">⚠️</span>
            </div>
            <div>
              <h3 className="font-semibold text-amber-900">Allergen Information</h3>
              <p className="text-sm text-amber-800 mt-1">
                Our products may contain or come into contact with common allergens including
                milk, eggs, wheat, soy, tree nuts, peanuts, and sesame. Please check individual
                product pages for specific allergen information or contact us for dietary concerns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
