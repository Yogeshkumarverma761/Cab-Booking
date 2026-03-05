import React from 'react'

const RidePopUp = (props) => {
    return (
        <div className='font-["Outfit"]'>
            <div className='absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/10 rounded-full' />
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setRidePopupPanel(false)
            }}><i className="text-3xl text-white/20 hover:text-white/40 cursor-pointer transition-colors ri-arrow-down-wide-line"></i></h5>

            <div className='pt-4 pb-6'>
                <h3 className='text-2xl font-bold text-white tracking-tight mb-6'>New <span className='text-primary'>Ride Available!</span></h3>

                <div className='glass-dark p-6 rounded-[2.5rem] border border-primary/20 bg-primary/5 relative overflow-hidden group'>
                    <div className='absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity' />

                    <div className='flex items-center justify-between relative z-10'>
                        <div className='flex items-center gap-4'>
                            <div className='w-14 h-14 rounded-2xl bg-white/10 p-0.5 overflow-hidden border border-white/10'>
                                <img className='w-full h-full object-cover rounded-[14px]' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="User" />
                            </div>
                            <div>
                                <h2 className='text-white font-bold text-lg leading-tight'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
                                <p className='text-primary font-bold text-[10px] uppercase tracking-widest mt-0.5'>Premium Client</p>
                            </div>
                        </div>
                        <div className='text-right'>
                            <h5 className='text-xl font-black text-white tracking-tighter'>2.2 KM</h5>
                            <p className='text-[9px] text-white/30 font-bold uppercase tracking-widest'>Distance</p>
                        </div>
                    </div>
                </div>

                <div className='mt-8 space-y-4'>
                    <div className='flex items-start gap-4 p-4 glass-dark rounded-2xl border-white/5'>
                        <div className='w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0'>
                            <i className="ri-map-pin-user-fill text-primary"></i>
                        </div>
                        <div className='flex-1 min-w-0'>
                            <h3 className='text-white/30 text-[9px] uppercase tracking-widest font-bold'>Pickup Point</h3>
                            <p className='text-white text-sm font-medium truncate'>{props.ride?.pickup}</p>
                        </div>
                    </div>

                    <div className='flex items-start gap-4 p-4 glass-dark rounded-2xl border-white/5'>
                        <div className='w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0'>
                            <i className="ri-map-pin-2-fill text-white/60"></i>
                        </div>
                        <div className='flex-1 min-w-0'>
                            <h3 className='text-white/30 text-[9px] uppercase tracking-widest font-bold'>Drop Location</h3>
                            <p className='text-white text-sm font-medium truncate'>{props.ride?.destination}</p>
                        </div>
                    </div>

                    <div className='flex items-center justify-between p-4 glass-dark rounded-2xl border-white/5'>
                        <div className='flex items-center gap-4'>
                            <div className='w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center'>
                                <i className="ri-currency-line text-green-500"></i>
                            </div>
                            <div>
                                <h3 className='text-white/30 text-[9px] uppercase tracking-widest font-bold'>Net Payout</h3>
                                <p className='text-green-500 font-bold text-lg leading-tight'>₹{props.ride?.fare}</p>
                            </div>
                        </div>
                        <span className='px-3 py-1 bg-white/5 rounded-full text-[10px] text-white/40 uppercase tracking-widest border border-white/5'>Cash Only</span>
                    </div>
                </div>

                <div className='mt-8 flex gap-4'>
                    <button onClick={() => {
                        props.setRidePopupPanel(false)
                    }} className='btn-secondary flex-1 py-4 text-white/60'>
                        Ignore
                    </button>
                    <button onClick={() => {
                        props.setConfirmRidePopupPanel(true)
                        props.confirmRide()
                    }} className='btn-primary flex-[2] py-4 text-lg shadow-[0_10px_30px_rgba(255,215,0,0.2)]'>
                        Accept Ride
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RidePopUp