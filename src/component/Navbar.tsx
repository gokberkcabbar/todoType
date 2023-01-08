import React from 'react'
import { IconChecklist, IconUserCircle } from '@tabler/icons'
import { Outlet } from 'react-router-dom'
import { Button } from './Button'
import { useNavigate } from 'react-router-dom'
import { Footer } from './Footer'
import { Avatar } from './Avatar'
export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <nav className='sticky top-0 left-0 right-0 h-auto z-50 p-4 shadow-xl bg-white items-center flex flex-row justify-between'>
        <IconChecklist size={32} />
        {localStorage.getItem('token') ? <Avatar /> : <Button title='Login' onClick={() => navigate('/login')} />}

      </nav>

      <main className='container mx-auto flex flex-col mt-7'>
        <Outlet />
      </main>

      <div className='mt-5'>
        <Footer />
      </div>
    </>
  )
}
