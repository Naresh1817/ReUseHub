import React from 'react';
import { Recycle, Heart, ShieldCheck, Leaf, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white mt-20">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
                <Recycle className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold text-slate-900">ReUseHub</span>
            </div>
            <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
              An open circular platform for everyone. Declutter responsibly, find quality second-hand goods, and donate to local families and neighbors.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1"><Leaf className="h-3.5 w-3.5 text-brand-600" /> Zero Waste Initiative</span>
              <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5 text-brand-600" /> Neighborhood Focused</span>
              <span className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5 text-brand-600" /> Safe Exchanges</span>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Explore Categories</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link to="/?category=home" className="hover:text-brand-600">Home & Furniture</Link></li>
              <li><Link to="/?category=tools" className="hover:text-brand-600">Tools, DIY & Garden</Link></li>
              <li><Link to="/?category=kids" className="hover:text-brand-600">Baby & Kids Items</Link></li>
              <li><Link to="/?category=electronics" className="hover:text-brand-600">Electronics & Tech</Link></li>
              <li><Link to="/?category=appliances" className="hover:text-brand-600">Kitchen & Appliances</Link></li>
            </ul>
          </div>

          {/* Project Details */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Architecture</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Designed as a modern full-stack web application with a <strong>Spring Boot 3</strong> REST backend, <strong>React 18</strong>, <strong>Tailwind CSS</strong>, and <strong>PostgreSQL</strong>.
            </p>
          </div>

        </div>

        <div className="mt-8 border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ReUseHub. Giving pre-loved products a continuous second life.</p>
          <p className="flex items-center gap-1 mt-2 sm:mt-0">
            For sustainable homes & neighborhoods <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};
