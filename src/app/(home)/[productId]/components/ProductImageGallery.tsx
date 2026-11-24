/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Image from "next/image";

interface ProductImageGalleryProps {
  mainImage: string;
  thumbnails: string[];
  productName: string;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  mainImage,
  thumbnails,
  productName,
}) => {
  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-[16/9] lg:min-h-[540px] w-full bg-slate-200 rounded-2xl overflow-hidden relative">
        <img
          alt={`${productName} Main`}
          className="w-full h-full object-cover"
          src={mainImage}
        />
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-3 gap-2 md:gap-5 ">
        {thumbnails.map((thumbnail, index) => (
          <div
            key={index}
            className=" bg-slate-100 h-[100px] md:h-[160px] rounded-xl overflow-hidden"
          >
            {thumbnail && (
              <img
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 cursor-pointer transition-opacity"
                src={thumbnail}
              />
            )}
            <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-slate-300">
              <span className="text-slate-400 text-xs">
                Gallery {index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
