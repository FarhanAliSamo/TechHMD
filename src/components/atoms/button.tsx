import React from 'react'
import clsx from 'clsx';


const Button = ({title,className}:any) => {
  return (
    <button className={clsx('border border-white text-xs font-semibold py-3 px-5 transition-all uppercase rounded-sm', className)} >
        {title}
    </button>
  )
}

export default Button