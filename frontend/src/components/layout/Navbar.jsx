import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  Recycle, 
  PlusCircle, 
  User, 
  LogOut, 
  LogIn, 
  Inbox,
  LayoutDashboard
} from 'lucide-react';

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-brand-600 to-emerald-400 text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
            <Recycle className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              ReUse<span className="text-brand-600">Hub</span>
            </span>
            <span className="hidden sm:inline-block ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
              Share · Donate · Reuse
            </span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <Link 
            to="/" 
            className={`transition-colors ${isActive('/') ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'}`}
          >
            Browse Market
          </Link>
          
          {isAuthenticated && (
            <>
              <Link 
                to="/requests" 
                className={`flex items-center gap-1.5 transition-colors ${isActive('/requests') ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'}`}
              >
                <Inbox className="h-4 w-4" />
                <span>Claims</span>
              </Link>
              <Link 
                to="/dashboard" 
                className={`flex items-center gap-1.5 transition-colors ${isActive('/dashboard') ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'}`}
              >
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </>
          )}

          <Link 
            to="/about" 
            className={`transition-colors ${isActive('/about') ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'}`}
          >
            Mission
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Post an Item CTA */}
          <Link
            to="/post-item"
            className="flex items-center gap-1.5 rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
          >
            <PlusCircle className="h-4 w-4" />
            <span className="hidden sm:inline">List an Item</span>
          </Link>

          {isAuthenticated ? (
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <Link
                to="/dashboard"
                className="flex items-center gap-2 text-sm text-slate-700 hover:text-brand-600"
              >
                <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold border border-slate-200">
                  {user?.fullName?.charAt(0).toUpperCase() || 'U'}
                </div>
                <span className="hidden lg:inline-block font-semibold">
                  {user?.fullName}
                </span>
              </Link>
              <button
                onClick={logout}
                title="Logout"
                className="p-2 text-slate-400 hover:text-rose-600 transition-colors rounded-lg hover:bg-slate-100"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-1.5 rounded-xl border border-slate-300 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <LogIn className="h-4 w-4" />
              <span>Sign In</span>
            </Link>
          )}
        </div>

      </div>
    </header>
  );
};
