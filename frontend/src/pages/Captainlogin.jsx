import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CaptainDataContext } from '../context/CapatainContext'

const Captainlogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { captain, setCaptain } = React.useContext(CaptainDataContext)
  const navigate = useNavigate()



  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain)

    if (response.status === 200) {
      const data = response.data

      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')

    }

    setEmail('')
    setPassword('')
  }
  return (
    <div className='h-screen w-full relative overflow-hidden bg-black font-["Outfit"] p-7 flex flex-col justify-between'>
      {/* Background Decor */}
      <div className='absolute -top-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none' />
      <div className='absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none' />

      <div className='relative z-10'>
        <div className='flex flex-col items-center mb-10'>
          <img className='w-24 mb-4 animate-float' src="/logo.png" alt="QuickCab Logo" />
          <h2 className='text-3xl font-bold text-white uppercase tracking-tight'>Captain Portal</h2>
          <p className='text-muted-foreground text-sm text-center'>Ready to take the wheel? Sign in to start earning.</p>
        </div>

        <form onSubmit={(e) => submitHandler(e)} className='space-y-6'>
          <div className='space-y-2'>
            <label className='text-sm font-semibold text-white/70 ml-1'>Captain Email</label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-white/5 border border-white/10 rounded-2xl px-5 py-4 w-full text-white placeholder:text-white/20 focus:bg-white/10 active:scale-[0.99] transition-all'
              type="email"
              placeholder='captain@quickcab.com'
            />
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-semibold text-white/70 ml-1'>Secret Password</label>
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-white/5 border border-white/10 rounded-2xl px-5 py-4 w-full text-white placeholder:text-white/20 focus:bg-white/10 active:scale-[0.99] transition-all'
              type="password"
              placeholder='••••••••'
            />
          </div>

          <button className='btn-primary w-full py-4 text-lg mt-2'>
            Captain Login
          </button>
        </form>

        <p className='text-center mt-8 text-white/60 text-sm'>
          Want to join the fleet? <Link to='/captain-signup' className='text-primary font-bold hover:underline'>Register Now</Link>
        </p>
      </div>

      <div className='relative z-10 space-y-4'>
        <div className='flex items-center gap-4 text-white/20'>
          <div className='h-[1px] w-full bg-current' />
          <span className='text-[10px] uppercase tracking-[0.3em] whitespace-nowrap'>Passenger Access</span>
          <div className='h-[1px] w-full bg-current' />
        </div>
        <Link
          to='/login'
          className='btn-secondary w-full py-4 flex items-center justify-center gap-2'
        >
          <i className="ri-user-fill text-xl"></i>
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default Captainlogin