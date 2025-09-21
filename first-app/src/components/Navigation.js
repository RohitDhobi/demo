import React from 'react'

const Navigation = () => {
  return (
    <div className='bg-slate-800 px-12 items-center flex'>
      <h1 className="text-3xl font-bold underline">Em Service Incharge</h1>
      <div className='space-x-4 ml-auto left '>
      <a className='hover:text-blue-400' href='/'>Home</a>
      <a className='hover:text-blue-400' href='/'>Profile</a>
      <a className='hover:text-blue-400' href='/'>Logout</a>
      </div>
    </div>
  )
}

export default Navigation