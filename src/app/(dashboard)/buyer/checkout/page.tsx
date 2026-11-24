'use client'

import React, { useState } from 'react'
import { useRouter} from 'next/navigation'
import BackButton from '@/components/BackButton'
import { MOCK_OFFERS } from '@/data/mockOffers'
import { CreditCard, Store, Truck, Wallet, CheckCircle2 } from 'lucide-react'

const CheckoutPage = () => {
  const router = useRouter()

  const offerId = '11'

  
  const offer = MOCK_OFFERS.find(o => o.id === Number(offerId))

  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery')
  const [paymentMethod, setPaymentMethod] = useState<'online' | 'lot'>('online')

  if (!offer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Offer Not Found</h2>
          <button onClick={() => router.back()} className="text-blue-600 hover:underline">
            Go back
          </button>
        </div>
      </div>
    )
  }

  const handleCompletePurchase = () => {
    router.push('/buyer/orders?new_order=true')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <BackButton />
        
        <div className="text-center mb-10">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Checkout</h1>
          <p className="text-sm text-gray-600">Complete your purchase securely.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Delivery Method */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-[#F8FAFC] px-6 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-900">Delivery Method</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {/* Home Delivery Card */}
                  <label className={`relative flex items-start p-4 cursor-pointer rounded-xl border-2 transition-all ${
                    deliveryMethod === 'delivery' ? 'border-blue-600 bg-blue-50/50' : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <input 
                      type="radio" 
                      name="delivery" 
                      className="hidden" 
                      checked={deliveryMethod === 'delivery'}
                      onChange={() => setDeliveryMethod('delivery')}
                    />
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${deliveryMethod === 'delivery' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                        <Truck size={24} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Home Delivery</div>
                        <div className="text-xs text-gray-500">We bring the car to you</div>
                      </div>
                    </div>
                    {deliveryMethod === 'delivery' && (
                      <div className="absolute top-4 right-4 text-blue-600">
                        <CheckCircle2 size={20} className="fill-blue-100" />
                      </div>
                    )}
                  </label>

                  {/* Pickup Card */}
                  <label className={`relative flex items-start p-4 cursor-pointer rounded-xl border-2 transition-all ${
                    deliveryMethod === 'pickup' ? 'border-blue-600 bg-blue-50/50' : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <input 
                      type="radio" 
                      name="delivery" 
                      className="hidden" 
                      checked={deliveryMethod === 'pickup'}
                      onChange={() => setDeliveryMethod('pickup')}
                    />
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${deliveryMethod === 'pickup' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                        <Store size={24} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Pick Up at Lot</div>
                        <div className="text-xs text-gray-500">Visit our nearest center</div>
                      </div>
                    </div>
                    {deliveryMethod === 'pickup' && (
                      <div className="absolute top-4 right-4 text-blue-600">
                        <CheckCircle2 size={20} className="fill-blue-100" />
                      </div>
                    )}
                  </label>
                </div>

                {/* Conditional Form Fields */}
                {deliveryMethod === 'delivery' && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    <h3 className="text-sm font-medium text-gray-700">Delivery Address</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input type="text" placeholder="State" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" defaultValue="Lagos" />
                      <input type="text" placeholder="City" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" defaultValue="Ikeja" />
                      <input type="text" placeholder="Street Address" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none md:col-span-2" defaultValue="123 My Street Address" />
                    </div>
                  </div>
                )}
                
                {deliveryMethod === 'pickup' && (
                  <div className="bg-gray-50 p-4 rounded-lg animate-in fade-in slide-in-from-top-2 duration-200">
                    <p className="text-sm text-gray-600">
                      You can pick up your vehicle at our <span className="font-semibold text-gray-900">Ikeja Central Lot</span>.
                      <br />
                      Available for pickup: <span className="text-green-600 font-medium">Tomorrow, 10:00 AM - 5:00 PM</span>
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="bg-[#F8FAFC] px-6 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-900">Payment Method</h2>
              </div>
              <div className="p-6">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {/* Pay Online Card */}
                  <label className={`relative flex items-start p-4 cursor-pointer rounded-xl border-2 transition-all ${
                    paymentMethod === 'online' ? 'border-blue-600 bg-blue-50/50' : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <input 
                      type="radio" 
                      name="payment" 
                      className="hidden" 
                      checked={paymentMethod === 'online'}
                      onChange={() => setPaymentMethod('online')}
                    />
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${paymentMethod === 'online' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                        <CreditCard size={24} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Pay Online</div>
                        <div className="text-xs text-gray-500">Secure card / transfer</div>
                      </div>
                    </div>
                    {paymentMethod === 'online' && (
                      <div className="absolute top-4 right-4 text-blue-600">
                        <CheckCircle2 size={20} className="fill-blue-100" />
                      </div>
                    )}
                  </label>

                  {/* Pay at Lot Card */}
                  <label className={`relative flex items-start p-4 cursor-pointer rounded-xl border-2 transition-all ${
                    paymentMethod === 'lot' ? 'border-blue-600 bg-blue-50/50' : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <input 
                      type="radio" 
                      name="payment" 
                      className="hidden" 
                      checked={paymentMethod === 'lot'}
                      onChange={() => setPaymentMethod('lot')}
                    />
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${paymentMethod === 'lot' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                        <Wallet size={24} />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Pay at Lot</div>
                        <div className="text-xs text-gray-500">Upon inspection</div>
                      </div>
                    </div>
                    {paymentMethod === 'lot' && (
                      <div className="absolute top-4 right-4 text-blue-600">
                        <CheckCircle2 size={20} className="fill-blue-100" />
                      </div>
                    )}
                  </label>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 sticky top-8">
              <div className="p-6 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900">Order Summary</h3>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Vehicle Info */}
                <div className="flex gap-4">
                   <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      {/* Using the mock image path or a colored placeholder */}
                      <div className="w-full h-full bg-blue-50 flex items-center justify-center text-blue-200">
                        <Truck size={24} />
                      </div>
                   </div>
                   <div>
                     <h4 className="font-medium text-gray-900">{offer.carName}</h4>
                     <p className="text-sm text-gray-500">Listed: {offer.price}</p>
                   </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-gray-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Agreed Price</span>
                    <span className="font-medium text-gray-900">{offer.myOffer}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Service Fee</span>
                    <span className="font-medium text-gray-900">₦0.00</span>
                  </div>
                   <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Delivery</span>
                    <span className="font-medium text-gray-900">
                      {deliveryMethod === 'delivery' ? '₦150,000' : 'Free'}
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="text-xl font-bold text-blue-600">
                     {/* Simplified total logic for demo */}
                     {deliveryMethod === 'delivery' ? '₦43,150,000' : offer.myOffer}
                  </span>
                </div>

                <button 
                  onClick={handleCompletePurchase}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Complete Purchase
                </button>

                <p className="text-xs text-center text-gray-500">
                  By completing this purchase, you agree to our terms of service and sales agreement.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
