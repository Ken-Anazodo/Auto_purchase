'use client'

import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { MOCK_OFFERS } from '@/data/mockOffers'
import OffersSidebar from '@/components/OffersSidebar'
import OfferChat from '@/components/OfferChat'
import OfferEmptyState from '@/components/OfferEmptyState'

type TabType = 'All Offers' | 'Accepted Offers' | 'Declined Offers'
type Offer = typeof MOCK_OFFERS[0]
type ViewState = 'negotiating' | 'accepted' | 'payment_ready'

const OffersPage = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<TabType>('All Offers')
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null)
  
  // This state tracks the local flow for the detailed view
  const [viewState, setViewState] = useState<ViewState>('negotiating')

  const filteredOffers = MOCK_OFFERS.filter(offer => {
    if (activeTab === 'All Offers') return true
    if (activeTab === 'Accepted Offers') return offer.status === 'Accepted'
    if (activeTab === 'Declined Offers') return offer.status === 'Declined'
    return true
  })

  const handleSelectOffer = (offer: Offer) => {
    setSelectedOffer(offer)
    // Reset view state based on the offer's inherent status
    if (offer.status === 'Accepted') {
      setViewState('accepted') // Or 'payment_ready' if we want to skip straight there for accepted ones
    } else {
      setViewState('negotiating')
    }
  }

  const handleAcceptOffer = () => {
    setViewState('payment_ready')
  }

  const handleProceedToPayment = () => {
    if (selectedOffer) {
      router.push(`/buyer/checkout?offerId=${selectedOffer.id}`)
    }
  }

  return (
    <div className="min-h-screen">

      <div className="mb-8">
  
        <div className="text-center">
          <h1 className="text-lg font-medium text-autobuy-neutral-1">My Offers</h1>
          <p className="text-sm text-autobuy-neutral-2">Track, negotiate and respond to price offers on vehicles.</p>
        </div>
      </div>

      <div className=" bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col lg:flex-row min-h-[800px]">

        <OffersSidebar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedOffer={selectedOffer}
          onSelectOffer={handleSelectOffer}
          offers={filteredOffers}
        />

        <div className="flex-1 bg-white flex flex-col">
          {selectedOffer ? (
            <OfferChat 
              selectedOffer={selectedOffer}
              viewState={viewState}
              onAcceptOffer={handleAcceptOffer}
              onProceedToPayment={handleProceedToPayment}
            />
          ) : (
            <OfferEmptyState />
          )}
        </div>
      </div>
    </div>
  )
}

export default OffersPage
