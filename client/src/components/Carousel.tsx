'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import clsx from 'clsx';

interface Slide {
  image: string;
  title: string;
  description: string;
  bgColor: string;
}

const slides: Slide[] = [
  {
    image: '/',
    title: '',
    description:
      'Millions of today’s children will be affected in unprecedented ways by climate change, show researchers from the Vrije Universiteit Brussel (VUB) in collaboration with ETH...',
    bgColor: '#215CAF',
  },
  {
    image: '/',
    title: '',
    description:
      'Oliver Fuhrer, head of the Department of Numerical Forecasting at MeteoSwiss, appointed by ETH.',
    bgColor: '#A7117A',
  },
  {
    image: '/',
    title: '',
    description:
      'Millions of today’s children will be affected in unprecedented ways by climate change, show researchers from the Vrije Universiteit Brussel (VUB) in collaboration with ETH...',
    bgColor: '#B7352D',
  },
  {
    image: '/',
    title: '',
    description:
      'Oliver Fuhrer, head of the Department of Numerical Forecasting at MeteoSwiss, appointed by ETH.',
    bgColor: '#215CAF',
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Handle auto-sliding
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Navigation handlers
  const goToPrevious = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const togglePause = useCallback(() => {
    setIsPaused((prev) => !prev);
  }, []);

  return (
    <div className="flex justify-center py-6 px-2 sm:px-4">
      <div className="relative w-full max-w-[1000px]">
        {/* Image Container */}
        <div className="relative w-full aspect-[16/9] overflow-hidden md:ml-28">
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority={current === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1000px) 60vw, 600px"
          />

          {/* Navigation arrows */}
          <button
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-md focus:outline-none"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <button
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white p-1 sm:p-2 rounded-full shadow-md focus:outline-none"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Text box with dynamic background color */}
        <div
          className="absolute bottom-0 left-0 text-white p-4 sm:p-8 w-full md:w-[70%] z-10 py-8 sm:py-12"
          style={{
            marginBottom: '-2rem',
            marginLeft: '0',
            backgroundColor: slides[current].bgColor,
            transform: 'translateY(0)',
          }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">{slides[current].title}</h2>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">{slides[current].description}</p>

          {/* Dot indicators and pause button */}
          <div className="flex items-center space-x-2 mt-2 sm:mt-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={clsx(
                  'h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all focus:outline-none',
                  current === idx ? 'bg-white' : 'bg-white/50'
                )}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
            <button
              onClick={togglePause}
              className="ml-2 sm:ml-4 focus:outline-none"
              aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
            >
              {isPaused ? (
                <Play size={14} className="text-white" />
              ) : (
                <Pause size={14} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}