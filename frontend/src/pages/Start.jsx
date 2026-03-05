
import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='h-screen w-full relative overflow-hidden bg-black font-["Outfit"]'>
      {/* Background with Overlay */}
      <div className='absolute inset-0 z-0 scale-105 animate-pulse-slow'>
        <img
          className='w-full h-full object-cover opacity-60'
          src="https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2574&auto=format&fit=crop"
          alt="Night City Background"
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent' />
      </div>

      <div className='relative z-10 h-full flex flex-col justify-between p-8'>
        {/* Top Section - Brand */}
        <div className='flex items-center gap-3 animate-float'>
          <img className='w-14 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]' src="/logo.png" alt="QuickCab Logo" />
          <h1 className='text-3xl font-extrabold tracking-tighter text-white'>
            QUICK<span className='text-primary'>CAB</span>
          </h1>
        </div>

        {/* Bottom Section - Action */}
        <div className='glass-dark p-8 rounded-[2.5rem] mb-4 border-white/10'>
          <div className='space-y-2 mb-8'>
            <span className='text-primary font-bold uppercase tracking-[0.2em] text-xs'>Your Premium Ride</span>
            <h2 className='text-4xl font-bold text-white tracking-tight leading-tight'>
              Arrive in <br />
              <span className='italic font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-white'>Luxury & Style</span>
            </h2>
            <p className='text-muted-foreground text-sm max-w-[280px] leading-relaxed'>
              The fastest way to book your next trip with professional captains.
            </p>
          </div>

          <Link
            to='/login'
            className='btn-primary flex items-center justify-center w-full group'
          >
            <span>Get Started</span>
            <i className="ri-arrow-right-line ml-2 text-lg transform group-hover:translate-x-1 transition-transform"></i>
          </Link>

          <div className='mt-6 flex justify-center gap-1 opacity-40'>
            <div className='w-4 h-1 bg-primary rounded-full' />
            <div className='w-1 h-1 bg-white rounded-full' />
            <div className='w-1 h-1 bg-white rounded-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Start