'use client'

import React from 'react'
import { MOCK_OFFERS } from '@/data/mockOffers'

type TabType = 'All Offers' | 'Accepted Offers' | 'Declined Offers'
type Offer = typeof MOCK_OFFERS[0]

interface OffersSidebarProps {
  activeTab: TabType
  setActiveTab: (tab: TabType) => void
  selectedOffer: Offer | null
  onSelectOffer: (offer: Offer) => void
  offers: Offer[]
}

const OffersSidebar: React.FC<OffersSidebarProps> = ({
  activeTab,
  setActiveTab,
  selectedOffer,
  onSelectOffer,
  offers
}) => {
  return (
    <div className="w-full lg:w-[450px] border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-autobuy-neutral-1">All Negotiations</h2>
          <span className="text-lg font-medium text-autobuy-neutral-1">Offers({MOCK_OFFERS.length})</span>
        </div>

        {/* Tabs */}
        <div className="flex p-2 bg-[#FAFAFA] rounded-[12px] gap-3">
          {(['All Offers', 'Accepted Offers', 'Declined Offers'] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 text-xs sm:text-sm font-normal py-2 px-2 rounded-md transition-all ${
                activeTab === tab 
                  ? 'bg-[#F5F9FF] text-autobuy-primary2.5 shadow-sm border-[#66A3FF]' 
                  : 'text-[#9E9E9E] hover:text-gray-700 border-[#C9C9C9] bg-[#FFFFFF]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-y-auto flex-1">
        {offers.map((offer) => (
          <div 
            key={offer.id}
            onClick={() => onSelectOffer(offer)}
            className={`p-6 border-b border-gray-100 cursor-pointer transition-colors hover:bg-gray-50 ${
              selectedOffer?.id === offer.id ? 'bg-blue-50/50 border-l-4 border-l-autobuy-primary2.5' : 'border-l-4 border-l-transparent'
            }`}
          >
            <div className="flex gap-4">
              <div className="w-20 h-16 bg-gray-200 rounded-md flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-medium text-autobuy-neutral-1 truncate">{offer.carName}</h3>
                 
                </div>
                <div className="text-sm text-autobuy-neutral-2 mb-2">
                  Your Offer: <span className="font-medium text-autobuy-neutral-1">{offer.myOffer}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-autobuy-neutral-2">Status:</span>
                  <span className={`text-sm font-medium ${
                    offer.status === 'Seller Countered' ? 'text-orange-500' :
                    offer.status === 'Accepted' ? 'text-green-600' :
                    offer.status === 'Declined' ? 'text-red-500' :
                    'text-autobuy-neutral-3'
                  }`}>
                    {offer.status}
                  </span>

                   <span className="text-xs ml-auto text-autobuy-neutral-3 whitespace-nowrap">{offer.lastUpdated}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OffersSidebar
