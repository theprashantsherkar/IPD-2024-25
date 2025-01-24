import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
      <div className='h-screen flex flex-col gap-5 items-center justify-start bg-black text-white py-10'>
          <nav className='flex items-center justify-center gap-5'>
              <Link to={'/login'}>Log in</Link>
              <Link to={'/signup'}>Sign in</Link>
          </nav>
          <div className='text-3xl font-semibold'>
              this is the landing page
          </div>
    </div>
  )
}

export default Landing