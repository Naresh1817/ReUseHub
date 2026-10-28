import React from 'react';
import { Leaf, Recycle, ShieldCheck, Heart, ArrowRight, Home, Wrench, Baby, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';

export const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-4">
      {/* Hero */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold">
          <Leaf className="h-3.5 w-3.5" />
          <span>The Universal ReUse Mission</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          A circular marketplace built for every home & neighbor.
        </h1>
        <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Millions of high-quality goods—from furniture, appliances, and tools to baby gear and electronics—get thrown away simply because passing them along is too hard. ReUseHub makes gifting and finding second-hand goods easy, secure, and local.
        </p>
      </div>

      {/* Who is ReUseHub for? */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 text-center">Who uses ReUseHub?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 text-center">
            <div className="h-10 w-10 mx-auto rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Baby className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Growing Families</h4>
            <p className="text-xs text-slate-500">Passing along outgrown strollers, cribs, high chairs, and toys to neighboring parents.</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 text-center">
            <div className="h-10 w-10 mx-auto rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Home className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Homeowners & Movers</h4>
            <p className="text-xs text-slate-500">Decluttering furniture, kitchenware, and decor during moves or renovations.</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 text-center">
            <div className="h-10 w-10 mx-auto rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Wrench className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Makers & DIYers</h4>
            <p className="text-xs text-slate-500">Sharing power tools, workshop gear, garden tools, and project leftovers.</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2 text-center">
            <div className="h-10 w-10 mx-auto rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Laptop className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-sm text-slate-900">Students & Professionals</h4>
            <p className="text-xs text-slate-500">Finding affordable monitors, desks, books, and home office setups.</p>
          </div>
        </div>
      </div>

      {/* 3 Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
          <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Recycle className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">1. Keep Goods Circulating</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Manufacturing new goods produces tremendous carbon emissions. Reusing what already exists is the most effective climate action anyone can take today.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
          <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">2. Neighborhood Trust</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            No anonymous spam. Verified profiles, clear pickup instructions, and structured reservation states make coordination transparent and reliable.
          </p>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
          <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Heart className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">3. Generosity First</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Free donations are celebrated. We prioritize community goodwill and affordable transfers over commercial profiteering.
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-gradient-to-tr from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <h2 className="text-2xl font-bold">Have items sitting unused in your storage or garage?</h2>
          <p className="text-sm text-slate-300">Listing takes under 60 seconds. Post an item and brighten someone's day.</p>
        </div>
        <Link to="/post-item">
          <Button variant="primary" className="whitespace-nowrap">
            List an Item Now <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
