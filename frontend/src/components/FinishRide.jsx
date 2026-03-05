import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const FinishRide = (props) => {

    const navigate = useNavigate()

    async function endRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {

            rideId: props.ride._id


        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            navigate('/captain-home')
        }

    }

    return (
        <div className='font-["Outfit"] h-full flex flex-col'>
            <div className='absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/10 rounded-full' />
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setFinishRidePanel(false)
            }}><i className="text-3xl text-white/20 hover:text-white/40 cursor-pointer transition-colors ri-arrow-down-wide-line"></i></h5>

            <div className='pt-4 pb-6 flex-1 flex flex-col'>
                <h3 className='text-2xl font-bold text-white tracking-tight mb-6'>Complete <span className='text-primary'>Ride</span></h3>

                <div className='glass-dark p-6 rounded-[2.5rem] border border-white/5 relative overflow-hidden mb-8'>
                    <div className='flex items-center justify-between mb-8 pb-6 border-b border-white/5'>
                        <div className='flex items-center gap-4'>
                            <div className='w-14 h-14 rounded-2xl bg-white/10 p-0.5 overflow-hidden border border-white/10'>
                                <img className='w-full h-full object-cover rounded-[14px]' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="User" />
                            </div>
                            <div>
                                <h2 className='text-white font-bold text-lg leading-tight capitalize'>{props.ride?.user.fullname.firstname}</h2>
                                <p className='text-primary font-bold text-[10px] uppercase tracking-widest mt-0.5'>Destination Reached</p>
                            </div>
                        </div>
                        <div className='text-right'>
                            <h5 className='text-xl font-black text-white tracking-tighter'>2.2 KM</h5>
                            <p className='text-[9px] text-white/30 font-bold uppercase tracking-widest'>Total Trip</p>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <div className='flex items-start gap-4 p-3 bg-white/5 rounded-2xl'>
                            <div className='w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0'>
                                <i className="ri-map-pin-user-fill text-primary text-sm"></i>
                            </div>
                            <div className='flex-1 min-w-0'>
                                <h3 className='text-white/30 text-[9px] uppercase tracking-widest font-bold'>Pickup</h3>
                                <p className='text-white text-xs font-medium truncate'>{props.ride?.pickup}</p>
                            </div>
                        </div>

                        <div className='flex items-start gap-4 p-3 bg-white/5 rounded-2xl'>
                            <div className='w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0'>
                                <i className="ri-map-pin-2-fill text-white/60 text-sm"></i>
                            </div>
                            <div className='flex-1 min-w-0'>
                                <h3 className='text-white/30 text-[9px] uppercase tracking-widest font-bold'>Destination</h3>
                                <p className='text-white text-xs font-medium truncate'>{props.ride?.destination}</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-between p-3 bg-green-500/10 rounded-2xl border border-green-500/20'>
                            <div className='flex items-center gap-3'>
                                <div className='w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center'>
                                    <i className="ri-currency-line text-green-500 text-sm"></i>
                                </div>
                                <p className='text-green-500 font-bold text-lg'>₹{props.ride?.fare}</p>
                            </div>
                            <span className='text-[9px] text-green-500 font-bold uppercase tracking-widest'>To be collected</span>
                        </div>
                    </div>
                </div>

                <div className='mt-auto pb-8 space-y-4'>
                    <p className='text-center text-white/40 text-[10px] uppercase tracking-[0.2em] px-10'>Please ensure you have received the payment before finishing the ride.</p>
                    <button
                        onClick={endRide}
                        className='btn-primary w-full py-5 text-xl shadow-[0_10px_40px_rgba(255,215,0,0.2)]'>
                        End Trip & Collect Cash
                    </button>
                    <button onClick={() => {
                        props.setFinishRidePanel(false)
                    }} className='w-full py-4 text-white/20 font-bold uppercase tracking-widest text-[10px] hover:text-white/40 transition-colors'>
                        Back to Map
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FinishRide