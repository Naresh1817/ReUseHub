import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { itemService } from '../itemService';
import { Button } from '../../../components/ui/Button';
import { 
  PlusCircle, 
  Image as ImageIcon, 
  MapPin, 
  Tag, 
  DollarSign, 
  AlertCircle,
  ArrowLeft,
  Heart
} from 'lucide-react';

export const CreateItemPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'home',
    listingType: 'DONATE',
    price: 0,
    itemCondition: 'GOOD',
    pickupLocation: '',
    imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986b88?auto=format&fit=crop&w=800&q=80'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || 0 : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.title || !formData.description || !formData.pickupLocation) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      setIsLoading(true);
      await itemService.createItem({
        ...formData,
        images: [formData.imageUrl || 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80']
      });
      navigate('/');
    } catch (err) {
      setError('Failed to create listing. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Cancel & Return
      </button>

      <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div>
          <div className="inline-flex items-center gap-1 text-xs font-semibold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full mb-2">
            <Heart className="h-3.5 w-3.5" />
            <span>Community Circular Hub</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900">List an Item to Donate, Swap, or Sell</h1>
          <p className="mt-1 text-sm text-slate-500">
            Keep usable items in circulation and help a neighbor out.
          </p>
        </div>

        {error && (
          <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Item Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. DeWalt 20V Cordless Drill, Solid Oak Table, Graco Stroller"
              required
              className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            />
          </div>

          {/* Category & Listing Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 bg-white"
              >
                <option value="home">Home & Furniture</option>
                <option value="tools">Tools, DIY & Garden</option>
                <option value="kids">Baby, Kids & Toys</option>
                <option value="electronics">Electronics & Tech</option>
                <option value="appliances">Kitchen & Appliances</option>
                <option value="books">Books, Hobbies & Media</option>
                <option value="sports">Sports & Outdoors</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Listing Type
              </label>
              <select
                name="listingType"
                value={formData.listingType}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 bg-white"
              >
                <option value="DONATE">🎁 100% Free Donation</option>
                <option value="SELL">💵 For Sale (Subsidized)</option>
                <option value="SWAP">🔄 Direct Item Swap</option>
              </select>
            </div>
          </div>

          {/* Price (Conditional) & Condition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Price ($ USD)
              </label>
              <input
                type="number"
                name="price"
                min="0"
                step="0.5"
                disabled={formData.listingType !== 'SELL'}
                value={formData.listingType === 'SELL' ? formData.price : 0}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 disabled:bg-slate-50 disabled:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Condition
              </label>
              <select
                name="itemCondition"
                value={formData.itemCondition}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 bg-white"
              >
                <option value="LIKE_NEW">Like New / Mint</option>
                <option value="GOOD">Good Condition</option>
                <option value="FAIR">Fair / Functional</option>
              </select>
            </div>
          </div>

          {/* Pickup Location */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Pickup Location or Area *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <MapPin className="h-4 w-4" />
              </div>
              <input
                type="text"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleChange}
                placeholder="e.g. Maplewood Porch Pickup, Public Library Lobby, or City Park East entrance"
                required
                className="w-full rounded-xl border border-slate-200 py-3 pl-9 pr-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
          </div>

          {/* Image URL with Preview */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Photo URL
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <ImageIcon className="h-4 w-4" />
              </div>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full rounded-xl border border-slate-200 py-3 pl-9 pr-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Description *
            </label>
            <textarea
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe why you're passing it on, condition specifics, and any pickup details..."
              required
              className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            />
          </div>

          {/* Submit */}
          <Button type="submit" isLoading={isLoading} className="w-full py-3.5 text-base">
            <PlusCircle className="h-5 w-5 mr-2" />
            Publish Community Listing
          </Button>
        </form>
      </div>
    </div>
  );
};
