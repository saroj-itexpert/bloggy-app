import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen flex items-center justify-center '>
      <Button variant={'destructive'} className='hover:cursor-pointer'>Click Me!</Button>
      
    </div>
  )
}

export default page