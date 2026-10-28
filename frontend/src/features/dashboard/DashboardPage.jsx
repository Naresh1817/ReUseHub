import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { itemService } from '../items/itemService';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { 
  User, 
  Leaf, 
  Package, 
  PlusCircle, 
  MapPin, 
  ArrowUpRight 
} from 'lucide-react';

export const DashboardPage = () => {
  const { user } = useAuth();
  const [myItems, setMyItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      const data = await itemService.getItems();
      // Filter items or show recent
      setMyItems((data.content || []).slice(0, 3));
    };
    loadItems();
  }, []);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header Profile Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center font-extrabold text-2xl border border-brand-200">
            {user?.fullName?.charAt(0) || 'U'}
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">{user?.fullName || 'Community Member'}</h1>
            <p className="text-sm text-slate-500">{user?.email}</p>
            <div className="flex items-center gap-1.5 text-xs text-brand-600 font-semibold mt-1">
              <MapPin className="h-3.5 w-3.5" />
              <span>{user?.communityTag || 'Verified Member'}</span>
            </div>
          </div>
        </div>

        <Link to="/post-item">
          <Button>
            <PlusCircle className="h-4 w-4 mr-2" />
            List Another Item
          </Button>
        </Link>
      </div>

      {/* Sustainability Metrics (The Circular Hook) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100">
          <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm">
            <Leaf className="h-4 w-4 text-emerald-600" />
            <span>Items Diverted</span>
          </div>
          <div className="text-3xl font-black text-emerald-950 mt-2">14</div>
          <p className="text-xs text-emerald-700 mt-1">Kept out of local landfills</p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
          <div className="flex items-center gap-2 text-blue-800 font-semibold text-sm">
            <Package className="h-4 w-4 text-blue-600" />
            <span>Community Savings</span>
          </div>
          <div className="text-3xl font-black text-blue-950 mt-2">$320</div>
          <p className="text-xs text-blue-700 mt-1">Saved by peers via reuse</p>
        </div>

        <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
          <div className="flex items-center gap-2 text-amber-800 font-semibold text-sm">
            <User className="h-4 w-4 text-amber-600" />
            <span>Community Trust</span>
          </div>
          <div className="text-3xl font-black text-amber-950 mt-2">5.0 ★</div>
          <p className="text-xs text-amber-700 mt-1">From 8 verified exchanges</p>
        </div>
      </div>

      {/* Active Listings Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Your Active Listings</h2>
          <Link to="/" className="text-xs font-semibold text-brand-600 hover:underline flex items-center gap-1">
            Browse all <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="divide-y divide-slate-100">
          {myItems.map((item) => (
            <div key={item.id} className="py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={item.images?.[0]}
                  alt={item.title}
                  className="h-12 w-12 rounded-xl object-cover bg-slate-100 border border-slate-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                  <span className="text-xs text-slate-400">{item.pickupLocation}</span>
                </div>
              </div>
              <Badge variant={item.status === 'AVAILABLE' ? 'success' : 'warning'}>
                {item.status}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

