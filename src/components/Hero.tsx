import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-6">
          Development Environment,
          <br />
          Reimagined for the Cloud
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Experience lightning-fast cloud development with instant project creation,
          real-time collaboration, and seamless deployment.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition w-full sm:w-auto">
            <span>Start Coding Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="flex items-center space-x-2 border border-gray-700 hover:border-gray-600 px-6 py-3 rounded-lg transition w-full sm:w-auto">
            <span>View Documentation</span>
          </button>
        </div>
        <div className="mt-20">
          <img
            src="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&w=2000&q=80"
            alt="Cloud IDE Interface"
            className="rounded-lg shadow-2xl border border-gray-800"
          />
        </div>
      </div>
    </div>
  );
}