'use client'

import React from 'react'
import { MessageSquare } from 'lucide-react'

const OfferEmptyState = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-white/50">
      <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
        <MessageSquare className="w-10 h-10 text-blue-500" />
      </div>
      <h3 className="text-xl font-medium text-autobuy-neutral-1 mb-2">Your Offer Conversations appear here</h3>
      
    </div>
  )
}

export default OfferEmptyState
