"use client"

import React, { useEffect, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Icon } from "@iconify/react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`border-b border-[#9292924d] px-8 flex items-center justify-between bg-[#3a3b626e] backdrop-blur-sm h-[75px] fixed top-0 left-0 w-full z-50 web_nav transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`} >

      <img className='h-full p-2' src="/assets/images/logos/logo-header.png" alt="" />
      
      <ul className='flex items-center lg:gap-6 md:gap-4 gap-3 list-none p-0 m-0 web_nav_ul'>
        <li>
          <a href="#" className='text-white lg:font-semibold font-medium lg:text-sm text-xs uppercase '>Home</a>
        </li>
        <li>
          <a href="#" className='text-white lg:font-semibold font-medium lg:text-sm text-xs uppercase '>About</a>
        </li>
 
        <li>
          <a href="#" className='text-white lg:font-semibold font-medium lg:text-sm text-xs uppercase '>Service</a>
        </li>
        <li>
          <a href="#" className='text-white lg:font-semibold font-medium lg:text-sm text-xs uppercase '>Portfolio</a>
        </li>
        <li>
          <a href="#" className='text-white lg:font-semibold font-medium lg:text-sm text-xs uppercase '>Career</a>
        </li>
        <li>
          <a href="#" className='text-white lg:font-semibold font-medium lg:text-sm text-xs uppercase '>Blog</a>
        </li>
        <li>
          <a href="#" className='text-white lg:font-semibold font-medium lg:text-sm text-xs uppercase '>Contact</a>
        </li>
      </ul>

 
      <Menu as="div" className="relative inline-block text-left web_nav_language_dropdown">
       
        <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5  group">

          <Icon icon="material-symbols-light:language" className='text-white lg:text-2xl text-xl ' />
          <span className='text-white max-lg:text-sm font-medium pr-1'>PK</span>
          <Icon icon="line-md:arrow-down" className='text-white lg:text-xl text-lg ' />
        </MenuButton>
     

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              PK
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              USA
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              UAE
            </a>
          </MenuItem>
          
        </div>
      </MenuItems>
    </Menu>



     

    </div>
  )
}

export default Header