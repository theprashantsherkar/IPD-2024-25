import Form from '@/components/signup-form-demo'
import React from 'react'

function Signin() {
  return (
      <div className='bg-black h-screen flex justify-center items-center'>
          <Form label={"SignUp"} isLogin={false}  />
    </div>
  )
}

export default Signin