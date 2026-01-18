import { Suspense } from 'react';
import MenuContent from './MenuContent';

export default function MenuPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50">
          <div className="bg-white border-b">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Our Menu</h1>
              <p className="mt-2 text-lg text-gray-600">
                Fresh baked goods made with love, every day
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <div className="animate-pulse">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white rounded-2xl h-80" />
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    >
      <MenuContent />
    </Suspense>
  );
}
