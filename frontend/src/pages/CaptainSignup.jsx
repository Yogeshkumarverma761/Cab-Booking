import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CapatainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainSignup = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')


  const { captain, setCaptain } = React.useContext(CaptainDataContext)


  const submitHandler = async (e) => {
    e.preventDefault()
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')

  }
  return (
    <div className='min-h-screen w-full relative overflow-y-auto bg-black font-["Outfit"] p-7 flex flex-col justify-between'>
      {/* Background Decor */}
      <div className='absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none' />
      <div className='absolute bottom-1/2 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none' />

      <div className='relative z-10'>
        <div className='flex flex-col items-center mb-10'>
          <img className='w-24 mb-4 animate-float' src="/logo.png" alt="QuickCab Logo" />
          <h2 className='text-3xl font-bold text-white uppercase tracking-tight'>Captain Signup</h2>
          <p className='text-muted-foreground text-sm text-center'>Join the most premium fleet in the city.</p>
        </div>

        <form onSubmit={(e) => submitHandler(e)} className='space-y-6'>
          <div className='space-y-4'>
            <label className='text-sm font-semibold text-white/70 ml-1'>Full Name</label>
            <div className='flex gap-4'>
              <input
                required
                className='bg-white/5 border border-white/10 rounded-2xl px-5 py-4 w-1/2 text-white placeholder:text-white/20 focus:bg-white/10 transition-all'
                type="text"
                placeholder='First name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                required
                className='bg-white/5 border border-white/10 rounded-2xl px-5 py-4 w-1/2 text-white placeholder:text-white/20 focus:bg-white/10 transition-all'
                type="text"
                placeholder='Last name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className='space-y-4'>
            <label className='text-sm font-semibold text-white/70 ml-1'>Contact & Security</label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-white/5 border border-white/10 rounded-2xl px-5 py-4 w-full text-white placeholder:text-white/20 focus:bg-white/10 transition-all mb-4'
              type="email"
              placeholder='captain@quickcab.com'
            />
            <input
              required
              className='bg-white/5 border border-white/10 rounded-2xl px-5 py-4 w-full text-white placeholder:text-white/20 focus:bg-white/10 transition-all'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder='Secure Password'
            />
          </div>

          <div className='space-y-4'>
            <label className='text-sm font-semibold text-white/70 ml-1'>Vehicle Details</label>
            <div className='flex gap-4'>
              <input
                required
                className='bg-white/5 border border-white/10 rounded-2xl px-5 py-4 w-1/2 text-white placeholder:text-white/20 focus:bg-white/10 transition-all'
                type="text"
                placeholder='Color'
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
              />
              <input
                required
                className='bg-white/5 border border-white/10 rounded-2xl px-5 py-4 w-1/2 text-white placeholder:text-white/20 focus:bg-white/10 transition-all'
                type="text"
                placeholder='Plate Number'
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
              />
            </div>
            <div className='flex gap-4'>
              <input
                required
                className='bg-white/5 border border-white/10 rounded-2xl px-5 py-4 w-1/2 text-white placeholder:text-white/20 focus:bg-white/10 transition-all'
                type="number"
                placeholder='Capacity'
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
              />
              <select
                required
                className='bg-white/5 border border-white/10 rounded-2xl px-5 py-4 w-1/2 text-white/40 focus:bg-white/10 transition-all'
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="" disabled className='bg-black'>Type</option>
                <option value="car" className='bg-black'>Car</option>
                <option value="auto" className='bg-black'>Auto</option>
                <option value="moto" className='bg-black'>Moto</option>
              </select>
            </div>
          </div>

          <button className='btn-primary w-full py-4 text-lg mt-4'>
            Complete Registration
          </button>
        </form>

        <p className='text-center mt-8 text-white/60 text-sm'>
          Already a Captain? <Link to='/captain-login' className='text-primary font-bold hover:underline'>Login here</Link>
        </p>
      </div>

      <div className='relative z-10 mt-10 text-center'>
        <p className='text-[10px] text-white/20 leading-tight uppercase tracking-[0.2em]'>
          By registering, you agree to our <span className='text-white/40 border-b border-white/20'>Privacy Policy</span> <br /> & <span className='text-white/40 border-b border-white/20'>Fleet Terms of Service</span>
        </p>
      </div>
    </div>
  )
}

export default CaptainSignup