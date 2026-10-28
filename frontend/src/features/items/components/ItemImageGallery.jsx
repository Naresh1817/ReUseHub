import React, { useState } from 'react';

export const ItemImageGallery = ({ images = [] }) => {
  const [activeImage, setActiveImage] = useState(images[0] || '');

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[4/3] w-full rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 text-sm">
        No image available
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Main Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-200">
        <img
          src={activeImage}
          alt="Item Preview"
          className="h-full w-full object-cover transition-all duration-300"
        />
      </div>

      {/* Thumbnails if multiple */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(img)}
              className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                activeImage === img ? 'border-brand-600 scale-95 shadow-sm' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`Thumb ${idx}`} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

