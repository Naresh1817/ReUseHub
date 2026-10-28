import React from 'react';
import { MapPin, Tag, ShieldCheck, User } from 'lucide-react';

export const ItemCard = ({ item, onSelect }) => {
  const isFree = item.listingType === 'DONATE';
  const isSwap = item.listingType === 'SWAP';
  const isReserved = item.status === 'RESERVED';

  // Badge styles based on listing type
  const typeBadgeStyles = {
    DONATE: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    SELL: 'bg-blue-50 text-blue-700 border-blue-200',
    SWAP: 'bg-amber-50 text-amber-700 border-amber-200'
  };

  const conditionLabels = {
    LIKE_NEW: 'Like New',
    GOOD: 'Good Condition',
    FAIR: 'Fair'
  };

  return (
    <div 
      onClick={() => onSelect(item)}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-500/50 transition-all cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
        <img
          src={item.images?.[0] || 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80'}
          alt={item.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Listing Type Tag */}
        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border shadow-xs ${typeBadgeStyles[item.listingType] || 'bg-slate-100 text-slate-800'}`}>
            {isFree ? 'FREE' : isSwap ? 'SWAP' : `$${Number(item.price).toFixed(2)}`}
          </span>

          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-black/60 text-white backdrop-blur-xs">
            {conditionLabels[item.itemCondition] || item.itemCondition}
          </span>
        </div>

        {/* Status Overlay if Reserved */}
        {isReserved && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center">
            <span className="px-3 py-1 rounded-full bg-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow">
              Reserved
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 justify-between">
        <div>
          <h3 className="text-base font-semibold text-slate-900 line-clamp-1 group-hover:text-brand-600 transition-colors">
            {item.title}
          </h3>
          <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Location & Seller Footer */}
        <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{item.pickupLocation}</span>
          </div>

          <div className="flex items-center justify-between text-xs pt-1">
            <span className="font-medium text-slate-700 flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-brand-500"></span>
              {item.seller?.communityTag || 'Campus Member'}
            </span>
            {item.seller?.rating && (
              <span className="text-amber-600 font-semibold flex items-center gap-0.5">
                ★ {item.seller.rating}
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
