import React from 'react'
import { Link, useLocation } from 'react-router-dom' // Added useLocation
import { useEffect, useContext } from 'react'
import { SocketContext } from '../context/SocketContext'
import { useNavigate } from 'react-router-dom'
import LiveTracking from '../components/LiveTracking'

const Riding = () => {
    const location = useLocation()
    const { ride } = location.state || {} // Retrieve ride data
    const { socket } = useContext(SocketContext)
    const navigate = useNavigate()

    socket.on("ride-ended", () => {
        navigate('/home')
    })


    return (
        <div className='h-screen w-full relative overflow-hidden bg-black font-["Outfit"]'>
            {/* Floating Home Button */}
            <Link to='/home' className='fixed right-6 top-6 z-[100] h-12 w-12 glass-dark border border-white/10 flex items-center justify-center rounded-2xl hover:bg-white/10 transition-colors shadow-2xl'>
                <i className="text-xl text-primary ri-home-5-line"></i>
            </Link>

            {/* Map Area */}
            <div className='h-1/2 w-full'>
                <LiveTracking />
            </div>

            {/* Content Area */}
            <div className='h-1/2 p-8 bg-background relative border-t border-white/5'>
                <div className='absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/10 rounded-full' />

                <div className='flex items-center justify-between mb-8 pb-6 border-b border-white/5'>
                    <div className='flex items-center gap-4'>
                        <div className='w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 overflow-hidden'>
                            <img className='w-full h-auto object-contain brightness-125' src="https://www.pngall.com/wp-content/uploads/2/White-Car-PNG.png" alt="Car" />
                        </div>
                        <div>
                            <h2 className='text-lg font-bold text-white capitalize leading-tight'>{ride?.captain.fullname.firstname}</h2>
                            <p className='text-white/40 text-xs font-bold uppercase tracking-widest mt-0.5'>En Route to Destination</p>
                        </div>
                    </div>
                    <div className='text-right'>
                        <h4 className='text-xl font-black text-primary tracking-tighter'>{ride?.captain.vehicle.plate}</h4>
                        <p className='text-[10px] text-white/40 font-bold uppercase tracking-[0.2em]'>Vehicle Plate</p>
                    </div>
                </div>

                <div className='space-y-6'>
                    <div className='flex items-start gap-4 p-4 glass-dark rounded-2xl border-white/5'>
                        <div className='w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0'>
                            <i className="ri-map-pin-2-fill text-white/60"></i>
                        </div>
                        <div className='flex-1 min-w-0'>
                            <h3 className='text-white/30 text-[9px] uppercase tracking-widest font-bold'>Destination</h3>
                            <p className='text-white text-sm font-medium truncate'>{ride?.destination}</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-between p-4 glass-dark rounded-2xl border-white/5'>
                        <div className='flex items-center gap-4'>
                            <div className='w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center'>
                                <i className="ri-currency-line text-green-500"></i>
                            </div>
                            <div>
                                <h3 className='text-white/30 text-[9px] uppercase tracking-widest font-bold'>Ride Fare</h3>
                                <p className='text-green-500 font-bold text-lg leading-tight'>₹{ride?.fare}</p>
                            </div>
                        </div>
                        <span className='px-4 py-1.5 bg-white/5 rounded-full text-[10px] text-white/40 uppercase tracking-widest border border-white/10 font-bold'>Cash Payment</span>
                    </div>
                </div>

                <button className='btn-primary w-full py-5 text-xl mt-8 shadow-[0_10px_40px_rgba(255,215,0,0.2)]'>
                    Complete Payment
                </button>
            </div>
        </div>
    )
}

export default Riding