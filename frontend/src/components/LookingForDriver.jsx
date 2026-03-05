import React from 'react'

const LookingForDriver = (props) => {
    return (
        <div className='font-["Outfit"]'>
            <div className='absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/10 rounded-full' />
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setVehicleFound(false)
            }}><i className="text-3xl text-white/20 hover:text-white/40 cursor-pointer transition-colors ri-arrow-down-wide-line"></i></h5>

            <div className='pt-4 pb-8 text-center'>
                <h3 className='text-2xl font-bold text-white tracking-tight'>Finding your <span className='text-primary'>Captain</span></h3>
                <p className='text-white/40 text-xs mt-1 uppercase tracking-widest'>Please wait while we connect you</p>
            </div>

            <div className='flex gap-4 justify-between flex-col items-center'>
                <div className='w-full glass-dark rounded-[2rem] p-6 border-white/5 relative overflow-hidden'>
                    {/* Animated Scanning Effect */}
                    <div className='absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]' />

                    <div className='flex items-center justify-center mb-8 relative'>
                        <div className='w-32 h-20 bg-primary/5 rounded-2xl flex items-center justify-center p-4 group'>
                            <img className='w-full h-auto object-contain brightness-125 animate-float' src={
                                props.vehicleType === 'car' ? "https://www.pngall.com/wp-content/uploads/2/White-Car-PNG.png" :
                                    props.vehicleType === 'moto' ? "https://www.freeiconspng.com/uploads/motorbike-png-0.png" :
                                        "https://www.pngall.com/wp-content/uploads/2/Auto-Rickshaw-PNG.png"
                            } alt="Vehicle" />
                        </div>
                        {/* Radar Pulses */}
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <div className='w-24 h-24 rounded-full border border-primary/20 animate-ping' />
                            <div className='w-32 h-32 rounded-full border border-primary/10 animate-ping [animation-delay:0.5s]' />
                        </div>
                    </div>

                    <div className='space-y-4 relative'>
                        <div className='flex items-start gap-4 p-3 bg-white/5 rounded-2xl'>
                            <div className='w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0'>
                                <i className="ri-map-pin-user-fill text-primary"></i>
                            </div>
                            <div>
                                <h3 className='text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold'>Pickup</h3>
                                <p className='text-white font-medium text-sm line-clamp-1'>{props.pickup}</p>
                            </div>
                        </div>

                        <div className='flex items-start gap-4 p-3 bg-white/5 rounded-2xl'>
                            <div className='w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0'>
                                <i className="ri-map-pin-2-fill text-white/60"></i>
                            </div>
                            <div>
                                <h3 className='text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold'>Destination</h3>
                                <p className='text-white font-medium text-sm line-clamp-1'>{props.destination}</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-between p-3 bg-white/5 rounded-2xl'>
                            <div className='flex items-center gap-4'>
                                <div className='w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0'>
                                    <i className="ri-currency-line text-green-500"></i>
                                </div>
                                <p className='text-white font-medium text-sm'>Est. Fare: <span className='text-green-500 font-bold'>₹{props.fare[props.vehicleType]}</span></p>
                            </div>
                            <span className='text-[10px] text-white/20 uppercase tracking-widest'>Cash</span>
                        </div>
                    </div>
                </div>

                <div className='w-full p-4 text-center opacity-40'>
                    <div className='flex justify-center gap-1 mb-2'>
                        <div className='w-1 h-1 bg-primary rounded-full animate-bounce' />
                        <div className='w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.2s]' />
                        <div className='w-1 h-1 bg-primary rounded-full animate-bounce [animation-delay:0.4s]' />
                    </div>
                    <p className='text-[10px] uppercase tracking-[0.3em] text-white'>Request Sent</p>
                </div>
            </div>
        </div>
    )
}

export default LookingForDriver