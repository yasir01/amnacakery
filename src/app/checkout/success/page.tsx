import Link from 'next/link';
import { CheckCircle, Mail, Calendar, MapPin } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: { orderId?: string };
}) {
  const orderId = searchParams.orderId || 'UNKNOWN';

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full text-green-600 mb-6">
            <CheckCircle className="h-10 w-10" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for your order. We&apos;re excited to create something
            special for you!
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-500">Order Number</p>
            <p className="text-xl font-mono font-bold text-gray-900">
              {orderId}
            </p>
          </div>

          <div className="text-left space-y-4 mb-8">
            <h2 className="font-semibold text-gray-900">What happens next?</h2>

            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-rose-600 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">
                  Confirmation Email
                </p>
                <p className="text-sm text-gray-600">
                  You&apos;ll receive an order confirmation email shortly with all
                  the details.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Calendar className="h-5 w-5 text-rose-600 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">
                  Preparation
                </p>
                <p className="text-sm text-gray-600">
                  We&apos;ll start preparing your order to ensure it&apos;s fresh and
                  perfect for your pickup/delivery date.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-rose-600 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">
                  Pickup/Delivery
                </p>
                <p className="text-sm text-gray-600">
                  Your order will be ready at your selected time. We&apos;ll send a
                  reminder the day before!
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <Button variant="primary">Continue Shopping</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500">
            Questions about your order? Call us at{' '}
            <a href="tel:5551234567" className="text-rose-600 hover:text-rose-700">
              (555) 123-4567
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
