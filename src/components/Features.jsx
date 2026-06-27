import React from 'react'
import { GitBranch, Code2, Lightbulb } from "lucide-react";

const features = [
  {
    title: "Repository Statistics",
    description:
      "Analyze repositories, total stars, and discover the most popular projects from any GitHub profile.",
    icon: "📊",
  },
  {
    title: "Language Breakdown",
    description:
      "Visualize programming languages used across repositories with clean and interactive charts.",
    icon: "💻",
  },
  {
    title: "Developer Insights",
    description:
      "Get simple rule-based insights about activity, popularity, and programming diversity.",
    icon: "💡",
  },
];

const Features = () => {
  return (
    <section class="py-20 px-4 bg-black flex flex-col justify-center items-center gap-6 z-50 border-b border-slate-800">
    <h2 class="text-3xl md:text-[40px]/12 font-medium text-gray-100 max-w-lg text-center leading-tight">Powerful GitHub Analytics</h2>
    <p className='text-base/7 text-gray-200 max-w-xl text-center'>Explore GitHub profiles with meaningful insights. Analyze repositories, programming languages, and developer activity in one clean dashboard.</p>
    <div class="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-lg p-6 space-y-3 shadow-[0_0_20px_rgba(46,164,79,0.15)] hover:shadow-[0_0_35px_rgba(46,164,79,0.4)] hover:-translate-y-1 transition duration-300">
            <GitBranch
  width={24}
  height={24}
  stroke="white"
  strokeWidth={1.5}
/>
            <p className='font-medium text-lg text-gray-100'>Repository Statistics</p>
            <p className='text-sm/5 text-gray-200'>Analyze public repositories with key metrics including total repositories, accumulated stars, and the most popular projects.</p>
        </div>
        <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-lg p-6 space-y-3 shadow-[0_0_20px_rgba(46,164,79,0.15)] hover:shadow-[0_0_35px_rgba(46,164,79,0.4)] hover:-translate-y-1 transition duration-300">
            <Code2
  width={24}
  height={24}
  stroke="white"
  strokeWidth={1.5}
/>
            <p className='font-medium text-lg text-gray-100'>Language Breakdown</p>
            <p className='text-sm/5 text-gray-200'>Visualize the programming languages used across repositories with interactive charts and understand a developer's technology stack.</p>
        </div>
        <div className="bg-linear-to-b from-[#020204] to-[#191130] border border-gray-700 rounded-lg p-6 space-y-3 shadow-[0_0_20px_rgba(46,164,79,0.15)] hover:shadow-[0_0_35px_rgba(46,164,79,0.4)] hover:-translate-y-1 transition duration-300">
            <Lightbulb
  width={24}
  height={24}
  stroke="white"
  strokeWidth={1.5}
/>
            <p className='font-medium text-lg text-gray-100'>Developer Insights</p>
            <p className='text-sm/5 text-gray-200'>Discover useful profile insights based on GitHub activity, repository count, stars, and language diversity.</p>
        </div>
    </div>
</section>
  );
};

export default Features;