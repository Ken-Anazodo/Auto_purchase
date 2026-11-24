export const MOCK_OFFERS = [
  {
    id: 1,
    carName: 'Toyota Camry 2018',
    price: '₦43,000,000',
    myOffer: '₦43,000,000',
    status: 'Seller Countered',
    lastUpdated: '2hrs ago',
    image: '/api/placeholder/100/100', // Placeholder
    history: [
      {
        id: '1',
        type: 'offer',
        amount: '₦43,000,000.00',
        sender: 'You',
        date: '12 April 2025, 11:05 AM',
        status: 'pending'
      },
      {
        id: '2',
        type: 'counter',
        amount: '₦43,500,000.00',
        sender: 'Seller',
        date: '12 April 2025, 11:05 AM',
        status: 'countered'
      }
    ]
  },
  {
    id: 2,
    carName: 'Toyota Camry 2018',
    price: '₦43,000,000',
    myOffer: '₦43,000,000',
    status: 'Awaiting seller response',
    lastUpdated: '2hrs ago',
    image: '/api/placeholder/100/100',
    history: []
  },
  {
    id: 3,
    carName: 'Toyota Camry 2018',
    price: '₦43,000,000',
    myOffer: '₦43,000,000',
    status: 'Accepted',
    lastUpdated: '2hrs ago',
    image: '/api/placeholder/100/100',
    history: []
  },
  {
    id: 4,
    carName: 'Toyota Camry 2018',
    price: '₦43,000,000',
    myOffer: '₦43,000,000',
    status: 'Declined',
    lastUpdated: '2hrs ago',
    image: '/api/placeholder/100/100',
    history: []
  },
  {
    id: 5,
    carName: 'Toyota Camry 2018',
    price: '₦43,000,000',
    myOffer: '₦43,000,000',
    status: 'Accepted',
    lastUpdated: '2hrs ago',
    image: '/api/placeholder/100/100',
    history: []
  }
]
