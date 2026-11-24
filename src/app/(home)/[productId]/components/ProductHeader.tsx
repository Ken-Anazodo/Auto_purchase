"use client";

import React from "react";

interface ProductHeaderProps {
  onFavoriteClick?: () => void;
  onCompareClick?: () => void;
}

const ProductHeader: React.FC<ProductHeaderProps> = ({
  onFavoriteClick,
  onCompareClick,
}) => {
  return (
    <header className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <button
            className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors"
            onClick={onFavoriteClick}
          >
            <span className="material-symbols-outlined text-slate-600">
              favorite
            </span>
          </button>
          <button
            className="w-10 h-10 flex items-center justify-center bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors"
            onClick={onCompareClick}
          >
            <span className="material-symbols-outlined text-slate-600">
              compare_arrows
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default ProductHeader;
