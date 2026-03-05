import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})

  const { user, setUser } = useContext(UserDataContext)
  const navigate = useNavigate()



  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
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
          <img className='w-20 mb-4 animate-float' src="/logo.png" alt="QuickCab Logo" />
          <h2 className='text-3xl font-bold text-white uppercase tracking-tight'>Welcome Back</h2>
          <p className='text-muted-foreground text-sm text-center'>Enter your credentials to continue your journey</p>
        </div>

        <form onSubmit={(e) => submitHandler(e)} className='space-y-6'>
          <div className='space-y-2'>
            <label className='text-sm font-semibold text-white/70 ml-1'>Email Address</label>
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-white/5 border border-white/10 rounded-2xl px-5 py-4 w-full text-white placeholder:text-white/20 focus:bg-white/10 active:scale-[0.99] transition-all'
              type="email"
              placeholder='alex@quickcab.com'
            />
          </div>

          <div className='space-y-2'>
            <label className='text-sm font-semibold text-white/70 ml-1'>Password</label>
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
            Sign In
          </button>
        </form>

        <p className='text-center mt-8 text-white/60 text-sm'>
          New to QuickCab? <Link to='/signup' className='text-primary font-bold hover:underline'>Join Now</Link>
        </p>
      </div>

      <div className='relative z-10 space-y-4'>
        <div className='flex items-center gap-4 text-white/20'>
          <div className='h-[1px] w-full bg-current' />
          <span className='text-[10px] uppercase tracking-[0.3em] whitespace-nowrap'>Partner Access</span>
          <div className='h-[1px] w-full bg-current' />
        </div>
        <Link
          to='/captain-login'
          className='btn-secondary w-full py-4 flex items-center justify-center gap-2'
        >
          <i className="ri-steering-2-line text-xl"></i>
          Sign in as Captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin