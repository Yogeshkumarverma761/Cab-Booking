import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'



const UserSignup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})

  const navigate = useNavigate()



  const { user, setUser } = useContext(UserDataContext)




  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if (response.status === 201) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }


    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')

  }
  return (
    <div className='h-screen w-full relative overflow-hidden bg-black font-["Outfit"] p-7 flex flex-col justify-between'>
      {/* Background Decor */}
      <div className='absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none' />
      <div className='absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none' />

      <div className='relative z-10'>
        <div className='flex flex-col items-center mb-8'>
          <img className='w-16 mb-4 animate-float' src="/logo.png" alt="QuickCab Logo" />
          <h2 className='text-3xl font-bold text-white uppercase tracking-tight'>Create Account</h2>
          <p className='text-muted-foreground text-sm text-center'>Start your journey with QuickCab today</p>
        </div>

        <form onSubmit={(e) => submitHandler(e)} className='space-y-4'>
          <div className='space-y-2'>
            <label className='text-sm font-semibold text-white/70 ml-1'>What's your name?</label>
            <div className='flex gap-4'>
              <input
                required
                className='bg-white/5 border border-white/10 rounded-2xl px-5 py-4 w-1/2 text-white placeholder:text-white/20 focus:bg-white/10 active:scale-[0.99] transition-all'
                type="text"
                placeholder='First name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                required
                className='bg-white/5 border border-white/10 rounded-2xl px-5 py-4 w-1/2 text-white placeholder:text-white/20 focus:bg-white/10 active:scale-[0.99] transition-all'
                type="text"
                placeholder='Last name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

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

          <button className='btn-primary w-full py-4 text-lg mt-4'>
            Create Account
          </button>
        </form>

        <p className='text-center mt-6 text-white/60 text-sm'>
          Already have an account? <Link to='/login' className='text-primary font-bold hover:underline'>Login here</Link>
        </p>
      </div>

      <div className='relative z-10'>
        <p className='text-[10px] text-white/30 text-center leading-tight px-4'>
          By signing up, you agree to the <span className='underline'>Privacy Policy</span> and <span className='underline'>Terms of Service</span>.
        </p>
      </div>
    </div>
  )
}

export default UserSignup