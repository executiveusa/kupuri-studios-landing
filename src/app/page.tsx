"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye, Phone, Calendar, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/assets/kupuri-mexico-city-night.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark Overlay for Contrast */}
        <div className="absolute inset-0 w-full h-full bg-black/60 backdrop-blur-sm"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32 flex flex-col items-center text-center">
            
          {/* Logo Overlay - Top Right */}
          <div className="absolute top-8 right-8 z-20 opacity-100">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full p-4 border border-amber-500/20 shadow-xl">
              <h1 className="text-white font-bold text-xl">Kupuri Studios</h1>
              <p className="text-white/80 text-sm">Tu Socio Creativo</p>
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ once: true }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-5xl font-bold text-white mb-6"
              style={{
                fontFamily: 'Outfit, serif',
                lineHeight: 1.2
              }}
            >
              Dos Agencias. Una Visión.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ once: true }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="text-3xl font-semibold text-white/90 mb-4 leading-tight tracking-wide"
            >
              Combinando la misión de Yvette (CYNTHIA™) con el estudio creativo de Bamboo (KUPURI STUDIOS) para crear un powerhouse creativo para América Latina.
            </motion.p>
          </div>
        </div>
      </div>
    </main>
  );
}
