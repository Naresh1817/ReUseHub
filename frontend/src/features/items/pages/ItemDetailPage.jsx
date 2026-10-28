import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { itemService } from '../itemService';
import { ItemImageGallery } from '../components/ItemImageGallery';
import { Button } from '../../../components/ui/Button';
import { Modal } from '../../../components/ui/Modal';
import { Badge } from '../../../components/ui/Badge';
import { useAuth } from '../../../context/AuthContext';
import { formatCurrency, formatDate } from '../../../utils/formatters';
import { 
  MapPin, 
  ArrowLeft, 
  ShieldCheck, 
  Clock, 
  Send, 
  CheckCircle2, 
  Share2,
  AlertTriangle
} from 'lucide-react';

export const ItemDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Claim modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pickupNote, setPickupNote] = useState('');
  const [isSubmittingClaim, setIsSubmittingClaim] = useState(false);
  const [claimSuccess, setClaimSuccess] = useState(false);

  useEffect(() => {
    const loadItem = async () => {
      try {
        setLoading(true);
        const data = await itemService.getItemById(id);
        setItem(data);
      } catch (err) {
        setError('Item not found or has been removed.');
      } finally {
        setLoading(false);
      }
    };
    loadItem();
  }, [id]);

  const handleClaimSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    try {
      setIsSubmittingClaim(true);
      await itemService.requestItem(item.id, pickupNote);
      setClaimSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setClaimSuccess(false);
      }, 1800);
    } catch (err) {
      alert('Failed to submit claim. Please try again.');
    } finally {
      setIsSubmittingClaim(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-600 border-t-transparent" />
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="text-center py-16">
        <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto mb-3" />
        <h2 className="text-xl font-bold text-slate-800">{error || 'Item not found'}</h2>
        <Link to="/" className="mt-4 inline-block text-brand-600 font-semibold hover:underline">
          Return to Marketplace
        </Link>
      </div>
    );
  }

  const isFree = item.listingType === 'DONATE';
  const isSwap = item.listingType === 'SWAP';
  const isReserved = item.status === 'RESERVED';

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to listings
      </button>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
        
        {/* Left Column: Image Gallery */}
        <div className="md:col-span-7">
          <ItemImageGallery images={item.images} />
        </div>

        {/* Right Column: Information & Actions */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            
            {/* Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant={isFree ? 'success' : isSwap ? 'warning' : 'info'}>
                {item.listingType}
              </Badge>
              <Badge variant="neutral">
                {item.itemCondition}
              </Badge>
              {isReserved && (
                <Badge variant="danger">RESERVED</Badge>
              )}
            </div>

            {/* Title & Price */}
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900 leading-snug">
                {item.title}
              </h1>
              <div className="mt-2 text-3xl font-extrabold text-brand-600">
                {isFree ? 'Free (Donation)' : isSwap ? 'Item Swap' : formatCurrency(item.price)}
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
              {item.description}
            </p>

            {/* Details Box */}
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 space-y-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-600 shrink-0" />
                <span className="font-semibold text-slate-700">Pickup Location:</span>
                <span>{item.pickupLocation}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-400 shrink-0" />
                <span>Listed {formatDate(item.createdAt)}</span>
              </div>
            </div>

            {/* Seller Info */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold">Listed By</span>
                <div className="text-sm font-bold text-slate-800">{item.seller?.name}</div>
                <div className="text-xs text-slate-500">{item.seller?.communityTag}</div>
              </div>
              {item.seller?.rating && (
                <div className="text-right">
                  <span className="text-xs text-slate-400 uppercase font-semibold">Trust Score</span>
                  <div className="text-sm font-bold text-amber-600">★ {item.seller.rating} / 5.0</div>
                </div>
              )}
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <Button
              onClick={() => setIsModalOpen(true)}
              disabled={isReserved}
              className="w-full text-base py-3.5"
            >
              <Send className="h-4 w-4 mr-2" />
              {isReserved ? 'Item Already Reserved' : isFree ? 'Claim This Item Free' : 'Request to Buy / Pickup'}
            </Button>
            <p className="text-center text-[11px] text-slate-400">
              Direct connection with verified community member. No hidden fees.
            </p>
          </div>

        </div>

      </div>

      {/* Claim / Request Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={isFree ? 'Claim Free Item' : 'Request Pickup'}
      >
        {claimSuccess ? (
          <div className="text-center py-6 space-y-3">
            <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto animate-bounce" />
            <h4 className="text-lg font-bold text-slate-900">Request Sent Successfully!</h4>
            <p className="text-xs text-slate-500 max-w-xs mx-auto">
              The owner has been notified. You can coordinate your pickup time once they confirm.
            </p>
          </div>
        ) : (
          <form onSubmit={handleClaimSubmit} className="space-y-4">
            <p className="text-sm text-slate-600">
              Propose a pickup time or ask a question regarding <strong>"{item.title}"</strong>:
            </p>
            <textarea
              rows={3}
              required
              value={pickupNote}
              onChange={(e) => setPickupNote(e.target.value)}
              placeholder="e.g. Hi! I live nearby at North Hall and can pick this up tomorrow after 4 PM."
              className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            />
            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" isLoading={isSubmittingClaim}>
                Confirm Request
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};

