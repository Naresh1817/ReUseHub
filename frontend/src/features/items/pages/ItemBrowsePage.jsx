import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { itemService } from '../itemService';
import { ItemCard } from '../components/ItemCard';
import { ItemFilterBar } from '../components/ItemFilterBar';
import { EmptyState } from '../../../components/feedback/EmptyState';
import { useDebounce } from '../../../hooks/useDebounce';
import { Sparkles, HeartHandshake, ShieldCheck, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ItemBrowsePage = () => {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('ALL');

  // Debounce search query
  const debouncedSearch = useDebounce(searchQuery, 300);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        setLoading(true);
        const data = await itemService.getItems({
          category: selectedCategory,
          type: selectedType,
          search: debouncedSearch,
        });
        setItems(data.content || []);
      } catch (err) {
        console.error('Failed to load listings', err);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, [selectedCategory, selectedType, debouncedSearch]);

  const handleItemSelect = (item) => {
    navigate(`/items/${item.id}`);
  };

  return (
    <div className="space-y-8">
      {/* Universal Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-brand-800 to-teal-950 px-6 py-12 sm:px-12 sm:py-16 text-white shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold backdrop-blur-md border border-white/15">
            <HeartHandshake className="h-3.5 w-3.5 text-emerald-300" />
            <span>Open to Everyone — Donate, Swap, or Buy Subsidized</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Give items a continuous second life. Pass it forward.
          </h1>

          <p className="text-sm sm:text-base text-brand-100 max-w-xl leading-relaxed">
            From strollers and furniture to power tools and electronics—find quality goods near you or donate items you no longer use to someone who will love them.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              to="/post-item"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-emerald-950 font-bold text-sm shadow-md hover:bg-brand-50 transition-colors"
            >
              <PlusCircle className="h-4 w-4 text-emerald-700" />
              List an Item (Free or Sale)
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              How Reuse Works
            </Link>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute -right-10 -bottom-10 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />
      </section>

      {/* Filter and Search Controls */}
      <section className="rounded-2xl bg-white p-4 sm:p-5 border border-slate-200/80 shadow-xs">
        <ItemFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
        />
      </section>

      {/* Catalog Grid */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Community Listings ({items.length})
            </h2>
            <p className="text-xs text-slate-500">
              Browse pre-loved items available for pickup in your area
            </p>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse rounded-2xl bg-white border border-slate-200 overflow-hidden h-72" />
            ))}
          </div>
        ) : items.length === 0 ? (
          <EmptyState
            title="No items found"
            description="We couldn't find any items matching your active search filters. Try adjusting categories or clearing filters."
            actionLabel="Reset All Filters"
            onAction={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedType('ALL');
            }}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onSelect={handleItemSelect}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
