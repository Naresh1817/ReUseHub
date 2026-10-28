import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { EmptyState } from '../../components/feedback/EmptyState';
import { formatDate } from '../../utils/formatters';
import { Inbox, CheckCircle, XCircle, Clock } from 'lucide-react';

export const RequestsPage = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('incoming'); // 'incoming' | 'outgoing'
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    // Load stored claims from local mock storage
    const stored = JSON.parse(localStorage.getItem('reusehub_claims') || '[]');
    setClaims(stored);
  }, []);

  const handleUpdateStatus = (claimId, newStatus) => {
    const updated = claims.map(c => c.id === claimId ? { ...c, status: newStatus } : c);
    setClaims(updated);
    localStorage.setItem('reusehub_claims', JSON.stringify(updated));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Claim Requests & Coordination</h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage incoming inquiries for your items and track your outgoing pickup requests.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setActiveTab('incoming')}
          className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-all ${
            activeTab === 'incoming'
              ? 'border-brand-600 text-brand-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          Incoming Inquiries
        </button>
        <button
          onClick={() => setActiveTab('outgoing')}
          className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-all ${
            activeTab === 'outgoing'
              ? 'border-brand-600 text-brand-600'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          My Outgoing Claims ({claims.length})
        </button>
      </div>

      {/* Content */}
      {claims.length === 0 ? (
        <EmptyState
          icon={Inbox}
          title="No claims yet"
          description="When other community members request your items or you request an item, they will appear here."
        />
      ) : (
        <div className="space-y-4">
          {claims.map((claim) => (
            <div
              key={claim.id}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-base">Claim #{claim.id}</span>
                  <Badge variant={claim.status === 'ACCEPTED' ? 'success' : claim.status === 'REJECTED' ? 'danger' : 'warning'}>
                    {claim.status}
                  </Badge>
                </div>
                <p className="text-sm text-slate-600 italic bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  "{claim.message}"
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Submitted {formatDate(claim.createdAt)}</span>
                </div>
              </div>

              {/* Action buttons if incoming */}
              {activeTab === 'incoming' && claim.status === 'PENDING' && (
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleUpdateStatus(claim.id, 'REJECTED')}
                  >
                    Decline
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => handleUpdateStatus(claim.id, 'ACCEPTED')}
                  >
                    Accept & Reserve
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

