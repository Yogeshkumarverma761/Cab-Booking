import React, { useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import LiveTracking from '../components/LiveTracking'

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)
    const location = useLocation()
    const rideData = location.state?.ride



    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [finishRidePanel])


    return (
        <div className='h-screen relative flex flex-col justify-end bg-black font-["Outfit"]'>
            <div className='fixed p-6 top-0 flex items-center justify-between w-full z-20'>
                <img className='w-20 brightness-110' src="/logo.png" alt="QuickCab Logo" />
                <Link to='/captain-home' className='h-12 w-12 glass-dark border border-white/10 flex items-center justify-center rounded-2xl'>
                    <i className="text-xl text-primary ri-logout-box-r-line"></i>
                </Link>
            </div>

            <div
                className='h-[20%] p-8 flex items-center justify-between relative glass-dark border-t border-white/10 rounded-t-[3rem] z-20 cursor-pointer hover:bg-white/5 transition-all'
                onClick={() => setFinishRidePanel(true)}
            >
                <div className='absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full' />

                <div className='flex flex-col'>
                    <h4 className='text-2xl font-black text-white tracking-tighter'>4.2 KM</h4>
                    <p className='text-[10px] text-primary font-bold uppercase tracking-[0.2em]'>Distance to Destination</p>
                </div>

                <button className='btn-primary py-4 px-10 text-lg shadow-[0_10px_30px_rgba(255,215,0,0.15)]'>
                    Complete Ride
                </button>
            </div>

            <div ref={finishRidePanelRef} className='fixed w-full z-[500] bottom-0 translate-y-full glass-dark-heavy px-6 py-10 pt-12 rounded-t-[3rem] border-t border-white/10'>
                <FinishRide
                    ride={rideData}
                    setFinishRidePanel={setFinishRidePanel} />
            </div>

            <div className='h-screen fixed w-full top-0 z-10'>
                <LiveTracking />
            </div>
        </div>
    )
}

export default CaptainRiding