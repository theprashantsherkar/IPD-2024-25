import React from 'react'
import Form from '@/components/signup-form-demo';

function Login() {
  return (
      <div className='bg-black h-screen flex items-center justify-center'><Form label={"Login"} isLogin={true} /></div>
  )
}

export default Login