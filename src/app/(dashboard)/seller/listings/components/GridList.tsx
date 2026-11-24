import React from "react";
import SellerProductCard from "../../components/SellerProductCard";

// Car listing data
const carListings = [
  {
    id: 1,
    title: "Toyota Camry 2025",
    price: "₦45,000,000",
    image: "https://images.pexels.com/photos/93615/pexels-photo-93615.jpeg",
    status: "live" as const,
    views: 213,
  },
  {
    id: 2,
    title: "BMW X5 2024",
    price: "₦85,000,000",
    image: "https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg",
    status: "live" as const,
    views: 156,
  },
  {
    id: 3,
    title: "Mercedes-Benz C-Class 2023",
    price: "₦72,500,000",
    image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg",
    status: "pending" as const,
    views: 98,
  },
  {
    id: 4,
    title: "Honda Accord 2024",
    price: "₦38,000,000",
    image: "https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg",
    status: "live" as const,
    views: 287,
  },
  {
    id: 5,
    title: "Lexus ES 350 2023",
    price: "₦55,000,000",
    image: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg",
    status: "sold" as const,
    views: 342,
  },
  {
    id: 6,
    title: "Audi A4 2024",
    price: "₦68,000,000",
    image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg",
    status: "live" as const,
    views: 189,
  },
  {
    id: 7,
    title: "Ford Explorer 2023",
    price: "₦52,000,000",
    image: "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg",
    status: "live" as const,
    views: 124,
  },
  {
    id: 8,
    title: "Nissan Altima 2024",
    price: "₦41,000,000",
    image: "https://images.pexels.com/photos/376361/pexels-photo-376361.jpeg",
    status: "pending" as const,
    views: 167,
  },
];

const GridList = () => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {carListings.map((car) => (
        <SellerProductCard
          key={car.id}
          title={car.title}
          price={car.price}
          image={car.image}
          status={car.status}
          views={car.views}
        />
      ))}
    </main>
  );
};

export default GridList;
