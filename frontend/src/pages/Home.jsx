import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import axios from 'axios';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
import { SocketContext } from '../context/SocketContext';
import { useContext } from 'react';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import LiveTracking from '../components/LiveTracking';

const Home = () => {
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const vehiclePanelRef = useRef(null)
    const confirmRidePanelRef = useRef(null)
    const vehicleFoundRef = useRef(null)
    const waitingForDriverRef = useRef(null)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const [vehiclePanel, setVehiclePanel] = useState(false)
    const [confirmRidePanel, setConfirmRidePanel] = useState(false)
    const [vehicleFound, setVehicleFound] = useState(false)
    const [waitingForDriver, setWaitingForDriver] = useState(false)
    const [pickupSuggestions, setPickupSuggestions] = useState([])
    const [destinationSuggestions, setDestinationSuggestions] = useState([])
    const [activeField, setActiveField] = useState(null)
    const [fare, setFare] = useState({})
    const [vehicleType, setVehicleType] = useState(null)
    const [ride, setRide] = useState(null)

    const navigate = useNavigate()

    const { socket } = useContext(SocketContext)
    const { user } = useContext(UserDataContext)

    // Guard: ensure user data is loaded before using it
    if (!user || !user._id) {
        return <div className='flex items-center justify-center h-screen text-white'>Loading...</div>
    }

    useEffect(() => {
        socket.emit("join", { userType: "user", userId: user._id })
    }, [user])

    socket.on('ride-confirmed', ride => {


        setVehicleFound(false)
        setWaitingForDriver(true)
        setRide(ride)
    })

    socket.on('ride-started', ride => {
        console.log("ride")
        setWaitingForDriver(false)
        navigate('/riding', { state: { ride } }) // Updated navigate to include ride data
    })


    const handlePickupChange = async (e) => {
        setPickup(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }

            })
            setPickupSuggestions(response.data)
        } catch {
            // handle error
        }
    }

    const handleDestinationChange = async (e) => {
        setDestination(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setDestinationSuggestions(response.data)
        } catch {
            // handle error
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
    }

    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 24
                // opacity:1
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0
                // opacity:0
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [panelOpen])


    useGSAP(function () {
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [vehiclePanel])

    useGSAP(function () {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [confirmRidePanel])

    useGSAP(function () {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [vehicleFound])

    useGSAP(function () {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [waitingForDriver])


    async function findTrip() {
        setVehiclePanel(true)
        setPanelOpen(false)

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
            params: { pickup, destination },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })


        setFare(response.data)


    }

    async function createRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
            pickup,
            destination,
            vehicleType
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })


    }

    return (
        <div className='h-screen w-full relative overflow-hidden bg-black font-["Outfit"]'>
            {/* Logo Overlay */}
            <div className='absolute left-8 top-8 z-[100] flex items-center gap-3 animate-float'>
                <img className='w-12 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]' src="/logo.png" alt="QuickCab Logo" />
            </div>

            {/* Map Container */}
            <div className='h-full w-full grayscale-[0.5] contrast-[1.2] brightness-[0.8]'>
                <LiveTracking />
            </div>

            {/* Interactive Search Panel */}
            <div className='absolute inset-0 pointer-events-none flex flex-col justify-end px-4 pb-6'>
                <div className='glass-dark w-full max-w-lg mx-auto rounded-[2.5rem] p-6 pointer-events-auto border-white/10 shadow-2xl relative overflow-hidden z-[120]'>
                    <div className='absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full' />

                    <div className='flex items-center justify-between mb-6 pt-2'>
                        <h4 className='text-2xl font-bold text-white tracking-tight'>Find a <span className='text-primary'>Trip</span></h4>
                        <button
                            ref={panelCloseRef}
                            onClick={() => setPanelOpen(false)}
                            className='w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 hover:bg-white/10 transition-colors'
                        >
                            <i className="ri-arrow-down-wide-line text-white/60 text-xl"></i>
                        </button>
                    </div>

                    <form className='space-y-4' onSubmit={(e) => submitHandler(e)}>
                        <div className='relative'>
                            <div className='absolute left-5 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1'>
                                <div className='w-2 h-2 rounded-full bg-primary animate-pulse' />
                                <div className='w-[1px] h-10 bg-gradient-to-b from-primary to-transparent' />
                            </div>
                            <input
                                onFocus={() => {
                                    setPanelOpen(true)
                                    setActiveField('pickup')
                                }}
                                value={pickup}
                                onChange={handlePickupChange}
                                className='bg-white/5 border border-white/10 px-12 py-4 text-white rounded-2xl w-full focus:bg-white/10 focus:border-primary/50 transition-all placeholder:text-white/20'
                                type="text"
                                placeholder='Where from?'
                            />
                        </div>

                        <div className='relative'>
                            <div className='absolute left-5 top-1/2 -translate-y-1/2'>
                                <i className="ri-map-pin-2-fill text-xl text-white/40"></i>
                            </div>
                            <input
                                onFocus={() => {
                                    setPanelOpen(true)
                                    setActiveField('destination')
                                }}
                                value={destination}
                                onChange={handleDestinationChange}
                                className='bg-white/5 border border-white/10 px-12 py-4 text-white rounded-2xl w-full focus:bg-white/10 focus:border-primary/50 transition-all placeholder:text-white/20'
                                type="text"
                                placeholder='Where to?'
                            />
                        </div>
                    </form>

                    <button
                        onClick={findTrip}
                        className='btn-primary w-full py-4 text-lg mt-6 shadow-[0_10px_30px_rgba(255,215,0,0.2)]'
                    >
                        Search Rides
                    </button>
                </div>
            </div>

            {/* Suggestions Panel */}
            <div ref={panelRef} className='fixed inset-x-0 bottom-0 z-[110] bg-background/95 backdrop-blur-2xl h-0 overflow-hidden rounded-t-[3rem] border-t border-white/10'>
                <div className='p-8'>
                    <LocationSearchPanel
                        suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                        setPanelOpen={setPanelOpen}
                        setVehiclePanel={setVehiclePanel}
                        setPickup={setPickup}
                        setDestination={setDestination}
                        activeField={activeField}
                    />
                </div>
            </div>

            {/* Bottom Sheets (Vehicles, Confirm, etc) */}
            <div ref={vehiclePanelRef} className='fixed w-full z-[120] bottom-0 translate-y-full glass p-8 rounded-t-[3rem]'>
                <VehiclePanel
                    selectVehicle={setVehicleType}
                    fare={fare} setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
            </div>

            <div ref={confirmRidePanelRef} className='fixed w-full z-[130] bottom-0 translate-y-full glass p-8 rounded-t-[3rem]'>
                <ConfirmRide
                    createRide={createRide}
                    pickup={pickup}
                    destination={destination}
                    fare={fare}
                    vehicleType={vehicleType}
                    setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
            </div>

            <div ref={vehicleFoundRef} className='fixed w-full z-[140] bottom-0 translate-y-full glass p-8 rounded-t-[3rem]'>
                <LookingForDriver
                    createRide={createRide}
                    pickup={pickup}
                    destination={destination}
                    fare={fare}
                    vehicleType={vehicleType}
                    setVehicleFound={setVehicleFound} />
            </div>

            <div ref={waitingForDriverRef} className='fixed w-full z-[150] bottom-0 translate-y-[100%] glass p-8 rounded-t-[3rem]'>
                <WaitingForDriver
                    ride={ride}
                    setVehicleFound={setVehicleFound}
                    setWaitingForDriver={setWaitingForDriver}
                    waitingForDriver={waitingForDriver} />
            </div>
        </div>
    )
}

export default Home