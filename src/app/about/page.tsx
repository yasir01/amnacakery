import Image from 'next/image';
import Link from 'next/link';
import { Heart, Award, Users, Calendar } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 to-amber-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Our Story
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                What started as a passion for baking in my home kitchen has grown into
                a beloved local bakery. Every recipe has been perfected over years of
                experimentation, and every cake is made with the same love and care I&apos;d
                put into a creation for my own family.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                At Amna&apos;s Bakery, we believe that every celebration deserves something
                special. Whether it&apos;s a birthday, wedding, or just a Tuesday that needs
                a little sweetness, we&apos;re here to make your moments memorable.
              </p>
            </div>
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/about/baker.jpg"
                alt="Amna in her bakery"
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What We Stand For</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full text-rose-600 mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Made with Love
              </h3>
              <p className="text-gray-600">
                Every item is crafted with passion and attention to detail, just like
                homemade.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full text-rose-600 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality First
              </h3>
              <p className="text-gray-600">
                We use only premium ingredients sourced from trusted local and
                international suppliers.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full text-rose-600 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Community Focus
              </h3>
              <p className="text-gray-600">
                We&apos;re proud to be part of this community and love being part of your
                celebrations.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full text-rose-600 mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fresh Daily
              </h3>
              <p className="text-gray-600">
                Everything is baked fresh every day. We never sell anything that&apos;s not
                at its best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-rose-600 font-bold">2019</span>
                </div>
                <div className="flex-shrink-0 w-4 relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-rose-600 rounded-full" />
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-0.5 h-full bg-rose-200" />
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold text-gray-900">The Beginning</h3>
                  <p className="text-gray-600 mt-1">
                    Started baking custom cakes for friends and family from my home kitchen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-rose-600 font-bold">2020</span>
                </div>
                <div className="flex-shrink-0 w-4 relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-rose-600 rounded-full" />
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-0.5 h-full bg-rose-200" />
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold text-gray-900">Instagram Launch</h3>
                  <p className="text-gray-600 mt-1">
                    Launched @amnasbakery on Instagram and started taking orders online.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-rose-600 font-bold">2022</span>
                </div>
                <div className="flex-shrink-0 w-4 relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-rose-600 rounded-full" />
                  <div className="absolute top-5 left-1/2 -translate-x-1/2 w-0.5 h-full bg-rose-200" />
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold text-gray-900">Growing Demand</h3>
                  <p className="text-gray-600 mt-1">
                    Completed over 500 custom cake orders and expanded our menu.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-rose-600 font-bold">2025</span>
                </div>
                <div className="flex-shrink-0 w-4 relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-rose-600 rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">New Website Launch</h3>
                  <p className="text-gray-600 mt-1">
                    Launched our official website to better serve our amazing customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-rose-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let&apos;s Create Something Special Together
          </h2>
          <p className="text-rose-100 text-lg mb-8 max-w-2xl mx-auto">
            Whether you have a specific vision or need some inspiration, we&apos;re here
            to help make your celebration unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button
                size="lg"
                className="bg-white text-rose-600 hover:bg-rose-50"
              >
                Browse Our Menu
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
