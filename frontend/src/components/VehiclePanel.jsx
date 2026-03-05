import React from 'react'

const VehiclePanel = (props) => {
    return (
        <div className='font-["Outfit"]'>
            <div className='absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/10 rounded-full' />
            <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
                props.setVehiclePanel(false)
            }}><i className="text-3xl text-white/20 hover:text-white/40 cursor-pointer transition-colors ri-arrow-down-wide-line"></i></h5>

            <div className='flex items-center justify-between mb-8 pt-4'>
                <h3 className='text-2xl font-bold text-white tracking-tight'>Choose a <span className='text-primary'>Ride</span></h3>
            </div>

            <div className='space-y-3 pb-6'>
                {/* QuickGo */}
                <div onClick={() => {
                    props.setConfirmRidePanel(true)
                    props.selectVehicle('car')
                }} className='group flex items-center justify-between p-4 bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 rounded-2xl cursor-pointer transition-all active:scale-[0.98]'>
                    <div className='flex items-center gap-4'>
                        <div className='w-16 h-12 bg-white/5 rounded-xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform'>
                            <img className='w-full h-auto object-contain brightness-125' src="https://www.pngall.com/wp-content/uploads/2/White-Car-PNG.png" alt="Car" />
                        </div>
                        <div>
                            <div className='flex items-center gap-2'>
                                <h4 className='text-white font-bold text-base'>QuickGo</h4>
                                <span className='flex items-center gap-1 text-[10px] bg-white/10 text-white/60 px-2 py-0.5 rounded-full'>
                                    <i className="ri-user-3-fill"></i> 4
                                </span>
                            </div>
                            <p className='text-white/40 text-xs mt-0.5 tracking-wide'>2 mins away • Affordable</p>
                        </div>
                    </div>
                    <div className='text-right'>
                        <h2 className='text-lg font-black text-primary'>₹{props.fare.car}</h2>
                        <i className="ri-arrow-right-s-line text-white/20"></i>
                    </div>
                </div>

                {/* Moto */}
                <div onClick={() => {
                    props.setConfirmRidePanel(true)
                    props.selectVehicle('moto')
                }} className='group flex items-center justify-between p-4 bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 rounded-2xl cursor-pointer transition-all active:scale-[0.98]'>
                    <div className='flex items-center gap-4'>
                        <div className='w-16 h-12 bg-white/5 rounded-xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform'>
                            <img className='w-full h-auto object-contain brightness-125' src="https://www.freeiconspng.com/uploads/motorbike-png-0.png" alt="Moto" />
                        </div>
                        <div>
                            <div className='flex items-center gap-2'>
                                <h4 className='text-white font-bold text-base'>Moto</h4>
                                <span className='flex items-center gap-1 text-[10px] bg-white/10 text-white/60 px-2 py-0.5 rounded-full'>
                                    <i className="ri-user-3-fill"></i> 1
                                </span>
                            </div>
                            <p className='text-white/40 text-xs mt-0.5 tracking-wide'>3 mins away • Express</p>
                        </div>
                    </div>
                    <div className='text-right'>
                        <h2 className='text-lg font-black text-primary'>₹{props.fare.moto}</h2>
                        <i className="ri-arrow-right-s-line text-white/20"></i>
                    </div>
                </div>

                {/* QuickAuto */}
                <div onClick={() => {
                    props.setConfirmRidePanel(true)
                    props.selectVehicle('auto')
                }} className='group flex items-center justify-between p-4 bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 rounded-2xl cursor-pointer transition-all active:scale-[0.98]'>
                    <div className='flex items-center gap-4'>
                        <div className='w-16 h-12 bg-white/5 rounded-xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform'>
                            <img className='w-full h-auto object-contain brightness-125' src="https://www.pngall.com/wp-content/uploads/2/Auto-Rickshaw-PNG.png" alt="Auto" />
                        </div>
                        <div>
                            <div className='flex items-center gap-2'>
                                <h4 className='text-white font-bold text-base'>QuickAuto</h4>
                                <span className='flex items-center gap-1 text-[10px] bg-white/10 text-white/60 px-2 py-0.5 rounded-full'>
                                    <i className="ri-user-3-fill"></i> 3
                                </span>
                            </div>
                            <p className='text-white/40 text-xs mt-0.5 tracking-wide'>3 mins away • Smart</p>
                        </div>
                    </div>
                    <div className='text-right'>
                        <h2 className='text-lg font-black text-primary'>₹{props.fare.auto}</h2>
                        <i className="ri-arrow-right-s-line text-white/20"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VehiclePanel