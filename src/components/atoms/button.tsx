import React from 'react'
import clsx from 'clsx';


const Button = ({title,className}:any) => {
  return (
    <button className={clsx('border text-xs sm:font-semibold font-medium lg:py-3 lg:px-5 py-2 px-4   transition-all uppercase rounded-sm', className)} >
        {title}
    </button>
  )
}

export default Button