import React from 'react';
import { Code2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-lg z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold">Venzi</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
            <a href="#docs" className="text-gray-300 hover:text-white transition">Docs</a>
            <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}