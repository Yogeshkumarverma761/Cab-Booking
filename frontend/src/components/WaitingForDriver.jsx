import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div className='font-["Outfit"]'>
      <div className='absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/10 rounded-full' />
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
        props.setWaitingForDriver(false)
      }}><i className="text-3xl text-white/20 hover:text-white/40 cursor-pointer transition-colors ri-arrow-down-wide-line"></i></h5>

      <div className='pt-4 pb-6'>
        <div className='flex items-center justify-between mb-6'>
          <div>
            <h3 className='text-2xl font-bold text-white tracking-tight leading-tight'>Your Captain is <br /><span className='text-primary'>on the way</span></h3>
          </div>
          <div className='bg-primary/10 px-4 py-2 rounded-2xl border border-primary/20 text-center scale-110'>
            <p className='text-[10px] text-primary font-bold uppercase tracking-widest'>OTP</p>
            <h1 className='text-2xl font-black text-white tracking-tighter'>{props.ride?.otp}</h1>
          </div>
        </div>

        <div className='glass-dark rounded-[2.5rem] p-6 border-white/5'>
          {/* Driver & Vehicle Profile */}
          <div className='flex items-center justify-between mb-8 pb-6 border-b border-white/5'>
            <div className='flex items-center gap-4'>
              <div className='w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 overflow-hidden relative'>
                <i className="ri-user-fill text-3xl text-white/20"></i>
                {props.ride?.captain.fullname.firstname && (
                  <div className='absolute inset-0 bg-primary/20 flex items-center justify-center text-primary font-bold text-2xl'>
                    {props.ride.captain.fullname.firstname[0]}
                  </div>
                )}
              </div>
              <div>
                <h2 className='text-lg font-bold text-white capitalize'>{props.ride?.captain.fullname.firstname}</h2>
                <div className='flex items-center gap-2 mt-0.5'>
                  <span className='text-[10px] bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full font-bold uppercase'>Top Rated</span>
                  <span className='text-white/40 text-xs tracking-wide'> ★ 4.9</span>
                </div>
              </div>
            </div>
            <div className='text-right'>
              <h4 className='text-xl font-black text-primary tracking-tighter'>{props.ride?.captain.vehicle.plate}</h4>
              <p className='text-[10px] text-white/40 font-bold uppercase tracking-[0.2em]'>Vehicle ID</p>
            </div>
          </div>

          {/* Trip Details */}
          <div className='space-y-4'>
            <div className='flex items-start gap-4'>
              <div className='w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0'>
                <i className="ri-map-pin-user-fill text-primary text-sm"></i>
              </div>
              <div className='flex-1 overflow-hidden'>
                <h3 className='text-white/30 text-[9px] uppercase tracking-widest font-bold'>Pickup</h3>
                <p className='text-white text-xs font-medium truncate'>{props.ride?.pickup}</p>
              </div>
            </div>

            <div className='flex items-start gap-4'>
              <div className='w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0'>
                <i className="ri-map-pin-2-fill text-white/40 text-sm"></i>
              </div>
              <div className='flex-1 overflow-hidden'>
                <h3 className='text-white/30 text-[9px] uppercase tracking-widest font-bold'>Destination</h3>
                <p className='text-white text-xs font-medium truncate'>{props.ride?.destination}</p>
              </div>
            </div>

            <div className='pt-2 flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center'>
                  <i className="ri-currency-line text-green-500 text-sm"></i>
                </div>
                <p className='text-green-500 font-bold'>₹{props.ride?.fare}</p>
              </div>
              <div className='flex gap-2'>
                <button className='w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors'>
                  <i className="ri-phone-fill text-white/60"></i>
                </button>
                <button className='w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors'>
                  <i className="ri-chat-3-fill text-white/60"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaitingForDriver