import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const SignIn = async () => {

  return (
    <section className='flex flex-row justify-center size-full max-sm:px-6'>
      <AuthForm
        type='sign-up'
      />
    </section>
  )
}

export default SignIn