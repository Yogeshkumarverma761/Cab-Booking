
import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/CapatainContext'

const CaptainDetails = () => {

    const { captain } = useContext(CaptainDataContext)

    return (
        <div className='font-["Outfit"]'>
            <div className='flex items-center justify-between mb-8'>
                <div className='flex items-center gap-4'>
                    <div className='w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden relative'>
                        <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1540560085022-d8c50a4d1a08?q=80&w=2576&auto=format&fit=crop" alt="Captain" />
                    </div>
                    <div>
                        <h4 className='text-xl font-bold text-white capitalize'>{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
                        <div className='flex items-center gap-2 mt-1'>
                            <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></span>
                            <p className='text-white/40 text-xs font-bold uppercase tracking-widest'>Active Status</p>
                        </div>
                    </div>
                </div>
                <div className='text-right'>
                    <h4 className='text-2xl font-black text-primary tracking-tighter'>₹295</h4>
                    <p className='text-[10px] text-white/40 font-bold uppercase tracking-[0.2em]'>Today's Earnings</p>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-4'>
                <div className='glass-dark p-4 rounded-3xl border-white/5 text-center group hover:bg-white/10 transition-all'>
                    <div className='w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform'>
                        <i className="text-xl text-primary ri-timer-2-line"></i>
                    </div>
                    <h5 className='text-lg font-bold text-white'>10.2</h5>
                    <p className='text-[9px] text-white/30 font-bold uppercase tracking-widest'>Hours</p>
                </div>

                <div className='glass-dark p-4 rounded-3xl border-white/5 text-center group hover:bg-white/10 transition-all'>
                    <div className='w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform'>
                        <i className="text-xl text-primary ri-speed-up-line"></i>
                    </div>
                    <h5 className='text-lg font-bold text-white'>32.4</h5>
                    <p className='text-[9px] text-white/30 font-bold uppercase tracking-widest'>KM/h</p>
                </div>

                <div className='glass-dark p-4 rounded-3xl border-white/5 text-center group hover:bg-white/10 transition-all'>
                    <div className='w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform'>
                        <i className="text-xl text-primary ri-booklet-line"></i>
                    </div>
                    <h5 className='text-lg font-bold text-white'>18</h5>
                    <p className='text-[9px] text-white/30 font-bold uppercase tracking-widest'>Rides</p>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails