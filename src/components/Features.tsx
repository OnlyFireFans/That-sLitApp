import React from 'react';
import { Zap, Workflow, Github } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-purple-500" />,
    title: 'Instant Setup',
    description: 'Get started in seconds with pre-configured development environments and zero setup time.'
  },
  {
    icon: <Workflow className="w-6 h-6 text-purple-500" />,
    title: 'Real-time Collaboration',
    description: 'Work together seamlessly with your team in real-time, just like Google Docs for code.'
  },
  {
    icon: <Github className="w-6 h-6 text-purple-500" />,
    title: 'GitHub Integration',
    description: 'Native GitHub integration for smooth version control and collaboration workflows.'
  }
];

export default function Features() {
  return (
    <div className="py-20 bg-black/50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need to Code Better
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Built for developers who want to spend more time coding and less time configuring.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-800 hover:border-purple-500/50 transition bg-black/20"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}