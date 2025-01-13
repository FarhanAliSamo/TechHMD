import React from 'react'

const Header = () => {
  return (
    <div className='border-b border-white px-8 flex items-center justify-between bg-[#3a3b626e] backdrop-blur-sm h-[75px] fixed top-0 left-0 w-full z-50'>

      <img className='h-full p-2' src="/assets/images/logos/logo-header.png" alt="" />
      
      <ul className='flex items-center gap-6 list-none p-0 m-0 '>
        <li>
          <a href="#" className='text-white font-semibold text-sm uppercase '>Home</a>
        </li>
        <li>
          <a href="#" className='text-white font-semibold text-sm uppercase '>About</a>
        </li>
        <li>
          <a href="#" className='text-white font-semibold text-sm uppercase '>Service</a>
        </li>
        <li>
          <a href="#" className='text-white font-semibold text-sm uppercase '>Portfolio</a>
        </li>
        <li>
          <a href="#" className='text-white font-semibold text-sm uppercase '>Career</a>
        </li>
        <li>
          <a href="#" className='text-white font-semibold text-sm uppercase '>Blog</a>
        </li>
        <li>
          <a href="#" className='text-white font-semibold text-sm uppercase '>Cotact</a>
        </li>
      </ul>

      <div>
          <span className="text-medium text-white">Language..</span>
      </div>

    </div>
  )
}

export default Header