import React from 'react'

const ConfirmRide = (props) => {
    return (
        <div className='font-["Outfit"]'>
            <div className='absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/10 rounded-full' />
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setConfirmRidePanel(false)
            }}><i className="text-3xl text-white/20 hover:text-white/40 cursor-pointer transition-colors ri-arrow-down-wide-line"></i></h5>

            <h3 className='text-2xl font-bold text-white tracking-tight mb-8 pt-4'>Confirm your <span className='text-primary'>Ride</span></h3>

            <div className='flex gap-4 justify-between flex-col items-center'>
                <div className='w-full glass-dark rounded-[2rem] p-6 border-white/5'>
                    <div className='flex items-center justify-center mb-6'>
                        <div className='w-32 h-20 bg-white/5 rounded-2xl flex items-center justify-center p-4 animate-float'>
                            <img className='w-full h-auto object-contain brightness-125' src={
                                props.vehicleType === 'car' ? "https://www.pngall.com/wp-content/uploads/2/White-Car-PNG.png" :
                                    props.vehicleType === 'moto' ? "https://www.freeiconspng.com/uploads/motorbike-png-0.png" :
                                        "https://www.pngall.com/wp-content/uploads/2/Auto-Rickshaw-PNG.png"
                            } alt="Vehicle" />
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <div className='flex items-start gap-4 p-3 hover:bg-white/5 rounded-2xl transition-colors'>
                            <div className='w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0'>
                                <i className="ri-map-pin-user-fill text-primary"></i>
                            </div>
                            <div>
                                <h3 className='text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold'>Pickup</h3>
                                <p className='text-white font-medium text-sm line-clamp-1'>{props.pickup}</p>
                            </div>
                        </div>

                        <div className='flex items-start gap-4 p-3 hover:bg-white/5 rounded-2xl transition-colors'>
                            <div className='w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0'>
                                <i className="ri-map-pin-2-fill text-white/60"></i>
                            </div>
                            <div>
                                <h3 className='text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold'>Destination</h3>
                                <p className='text-white font-medium text-sm line-clamp-1'>{props.destination}</p>
                            </div>
                        </div>

                        <div className='flex items-start gap-4 p-3 hover:bg-white/5 rounded-2xl transition-colors'>
                            <div className='w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0'>
                                <i className="ri-currency-line text-green-500"></i>
                            </div>
                            <div>
                                <h3 className='text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold'>Total Fare</h3>
                                <p className='text-green-500 font-black text-lg'>₹{props.fare[props.vehicleType]} <span className='text-[10px] text-white/20 font-normal ml-2 tracking-widest uppercase'>Cash Payment</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <button onClick={() => {
                    props.setVehicleFound(true)
                    props.setConfirmRidePanel(false)
                    props.createRide()
                }} className='btn-primary w-full py-4 text-lg mt-4 shadow-[0_10px_30px_rgba(255,215,0,0.2)]'>
                    Confirm Booking
                </button>
            </div>
        </div>
    )
}

export default ConfirmRide