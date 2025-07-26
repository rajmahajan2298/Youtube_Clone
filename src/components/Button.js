import React from 'react'

const Button = ( {name, className} ) => {
  return (
    <div>
      <button className={`h-10 px-2 py-2 m-3 rounded-lg whitespace-nowrap ${className}`}>{name}</button>
    </div>
  )
}

export default Button;
