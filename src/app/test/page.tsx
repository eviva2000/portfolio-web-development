"use client";

import { useState } from "react";
import { Play } from 'lucide-react';

const videoData = [
  {
    id: 1,
    title: "Book Promo",
    description:
      "Promotional video showcasing book features and design with smooth transitions",
    duration: "2:30",
    category: "Marketing",
    src: "/video/book-promo.mp4",
    thumbnail: "/images/book-promo-thumb.jpg",
  },
  {
    id: 2,
    title: "Hollow Effect",
    description:
      "Creative hollow text animation with modern typography and stunning visual effects",
    duration: "1:45",
    category: "Animation",
    src: "/video/hollow-effect.mp4",
    thumbnail: "/images/hollow-effect-thumb.jpg",
  },
  {
    id: 3,
    title: "Valentine Special",
    description:
      "Romantic themed video with heart animations and beautiful color gradients",
    duration: "3:15",
    category: "Holiday",
    src: "/video/valentine.mp4",
    thumbnail: "/images/valentine-thumb.jpg",
  },
  {
    id: 4,
    title: "Rotating Text",
    description:
      "Dynamic text rotation effects with smooth transitions and modern design elements",
    duration: "2:00",
    category: "Typography",
    src: "/video/rotating-text.mp4",
    thumbnail: "/images/rotating-text-thumb.jpg",
  },
];

export default function test() {
  return (
    <div className="max-w-6xl mx-auto p-6 md:pt-28 ">
      {/* Page Headline */}
      <div className="">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Video Gallery
        </h1>
      </div>

      {/* Staggered Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Column - Offset */}
        <div className="md:mt-24 space-y-6">
          {videoData
            .filter((_, index) => index % 2 === 0)
            .map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
        </div>

        {/* Second Column - Normal Position */}
        <div className="space-y-6">
          {videoData
            .filter((_, index) => index % 2 === 1)
            .map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
        </div>
      </div>
    </div>
  );
}

function VideoCard({ video }: { video: (typeof videoData)[0] }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsPlaying(false);
  };

  return (
    <div className="video-card relative">
      {/* Preview Card */}
      <div className="preview-card bg-white rounded-xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl overflow-hidden">
        {/* Thumbnail Image */}
        <div className="relative h-80 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              // Fallback to gradient background if image fails to load
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute top-3 left-3">
            <span className="text-xs font-medium text-white bg-black bg-opacity-60 px-2 py-1 rounded-full">
              {video.duration}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="text-xs font-medium text-blue-600 bg-white bg-opacity-90 px-2 py-1 rounded-full">
              {video.category}
            </span>
          </div>
          
          {/* Play Button Overlay */}
          <button
            onClick={handlePlayClick}
            className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center group"
            aria-label={`Play ${video.title} video`}
          >
            <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
            <Play/>
            </div>
          </button>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-3">
            {video.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            {video.description}
          </p>

          <div className="flex items-center justify-between">
            <button 
              onClick={handlePlayClick}
              className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
            >
              Watch Preview →
            </button>
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <span>HD Quality</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <span>Click to play</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="video-modal fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 ">
        
          <div className="relative max-w-4xl w-full aspect-video bg-black rounded-lg overflow-hidden h-full">
            <video
              className="w-full h-full object-contain"
              src={video.src}
              autoPlay
              controls
              playsInline
              // onEnded={handleCloseVideo}
            />
            
            {/* Close Button */}
            <button
              onClick={handleCloseVideo}
              className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Video Title */}
            <div className="absolute top-6 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
              <span className="text-sm font-medium">{video.title}</span>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
}
