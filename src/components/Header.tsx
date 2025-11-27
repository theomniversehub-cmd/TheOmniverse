import React, { useState } from 'react';
import { Search, Menu, X, Bell } from 'lucide-react';

interface HeaderProps {
  onCategoryChange: (category: string) => void;
  currentCategory: string;
  onSearch: (query: string) => void;
}

export default function Header({ onCategoryChange, currentCategory, onSearch }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['Tech', 'Finance', 'Lifestyle', 'News'];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO */}
          <div className="flex items-center cursor-pointer" onClick={() => onCategoryChange('All')}>
            <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              OmniVerse
            </span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => onCategoryChange('All')}
              className={`${currentCategory === 'All' ? 'text-blue-600' : 'text-slate-600'} hover:text-blue-600 font-medium transition-colors`}
            >
              Home
            </button>
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onCategoryChange(item)}
                className={`${currentCategory === item ? 'text-blue-600' : 'text-slate-600'} hover:text-blue-600 font-medium transition-colors`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* SEARCH & ACTIONS */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search topics..."
                onChange={(e) => onSearch(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full bg-slate-100 border-none focus:ring-2 focus:ring-blue-500 w-48 transition-all focus:w-64"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            
            {/* Removed Subscribe Button - Just kept Bell for 'Notifications' aesthetic */}
            <button className="text-slate-600 hover:text-blue-600 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => onSearch(e.target.value)}
                className="w-full p-2 mb-4 rounded-lg bg-slate-100"
            />
            {['All', ...navItems].map((item) => (
              <button
                key={item}
                onClick={() => {
                  onCategoryChange(item);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-md"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}