import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = useState('')
    const navigate = useNavigate()

    const submitHander = async (e) => {
        e.preventDefault()

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: props.ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)
            navigate('/captain-riding', { state: { ride: props.ride } })
        }


    }
    return (
        <div className='font-["Outfit"] h-full flex flex-col'>
            <div className='absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/10 rounded-full' />
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setConfirmRidePopupPanel(false)
            }}><i className="text-3xl text-white/20 hover:text-white/40 cursor-pointer transition-colors ri-arrow-down-wide-line"></i></h5>

            <div className='pt-4 pb-6 flex-1 flex flex-col'>
                <h3 className='text-2xl font-bold text-white tracking-tight mb-6'>Direct <span className='text-primary'>Confirmation</span></h3>

                <div className='glass-dark p-6 rounded-[2.5rem] border border-white/5 relative overflow-hidden mb-8'>
                    <div className='flex items-center justify-between mb-8 pb-6 border-b border-white/5'>
                        <div className='flex items-center gap-4'>
                            <div className='w-14 h-14 rounded-2xl bg-white/10 p-0.5 overflow-hidden border border-white/10'>
                                <img className='w-full h-full object-cover rounded-[14px]' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="User" />
                            </div>
                            <div>
                                <h2 className='text-white font-bold text-lg leading-tight capitalize'>{props.ride?.user.fullname.firstname}</h2>
                                <p className='text-primary font-bold text-[10px] uppercase tracking-widest mt-0.5'>Client Identity Verified</p>
                            </div>
                        </div>
                        <div className='text-right'>
                            <h5 className='text-xl font-black text-white tracking-tighter'>₹{props.ride?.fare}</h5>
                            <p className='text-[9px] text-white/30 font-bold uppercase tracking-widest'>Net Fare</p>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <div className='flex items-start gap-4 p-3 bg-white/5 rounded-2xl'>
                            <div className='w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0'>
                                <i className="ri-map-pin-user-fill text-primary text-sm"></i>
                            </div>
                            <div className='flex-1 min-w-0'>
                                <h3 className='text-white/30 text-[9px] uppercase tracking-widest font-bold font-["Outfit"]'>Pickup</h3>
                                <p className='text-white text-xs font-medium truncate'>{props.ride?.pickup}</p>
                            </div>
                        </div>

                        <div className='flex items-start gap-4 p-3 bg-white/5 rounded-2xl'>
                            <div className='w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0'>
                                <i className="ri-map-pin-2-fill text-white/60 text-sm"></i>
                            </div>
                            <div className='flex-1 min-w-0'>
                                <h3 className='text-white/30 text-[9px] uppercase tracking-widest font-bold font-["Outfit"]'>Destination</h3>
                                <p className='text-white text-xs font-medium truncate'>{props.ride?.destination}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-auto pb-8'>
                    <form onSubmit={submitHander} className='space-y-6'>
                        <div className='space-y-2'>
                            <label className='text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold ml-1'>Passenger Activation OTP</label>
                            <input
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                type="text"
                                className='bg-white/5 border border-white/10 px-8 py-5 font-mono text-2xl tracking-[0.5em] text-center text-primary rounded-[2rem] w-full focus:bg-white/10 focus:border-primary/50 transition-all placeholder:text-white/10 placeholder:tracking-normal'
                                placeholder='••••'
                                maxLength='4'
                            />
                        </div>

                        <div className='flex flex-col gap-3'>
                            <button className='btn-primary w-full py-5 text-xl shadow-[0_10px_40px_rgba(255,215,0,0.2)]'>
                                Start Ride Now
                            </button>
                            <button onClick={() => {
                                props.setConfirmRidePopupPanel(false)
                                props.setRidePopupPanel(false)
                            }} type="button" className='w-full py-4 text-white/40 font-bold uppercase tracking-widest text-[10px] hover:text-white/60 transition-colors'>
                                Dismiss Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRidePopUp