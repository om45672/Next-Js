"use client";
import { Heart, Smartphone, Zap } from "lucide-react";
import toast, { Toaster } from 'react-hot-toast';

const notify_started = () => toast.error('Their is nothing to start here');
const notify_learn = () => toast.error('Their is nothing to learn here');
export default function Home() {
  return (
    <div className="max-w-6-xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6">
          Welcome to MyWebsite
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          This is a simple, clean website built with next.js and Tailwind CSS. Perfect for beginners learning web development.
        </p>

        <div className="space-x-4">
          <button onClick={notify_started} className="bg-blue-600 text-white px-3 py-3 rounded cursor-pointer hover:bg-blue-700 hover:scale-105 transition-colors font-semibold">
            GetStarted
          </button>
          <button onClick={notify_learn} className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer hover:scale-105">
            Learn more
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16 ml-50 mr-50">
        <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">

            <Zap className="text-blue-500"/>

          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast</h3>
          <p className="italic text-gray-600">Built with Modern Tech for Optimal Performance</p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">

            <Heart className="text-green-500"/>

          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Simple</h3>
          <p className="italic text-gray-600">Clean and easy to understand</p>
        </div>

        <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">

            <Smartphone className="text-purple-500" />

          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsive</h3>
          <p className="italic text-gray-600">Works Perfectly on all devices and screen sizes</p>
        </div>
      </div>

    </div>
  );
}
