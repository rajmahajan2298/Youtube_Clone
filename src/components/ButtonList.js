import React from 'react'
import Button from './Button'

const list = ['All', 'Football', 'Gaming', 'TalkFootballHd', 'Kr$na', 'Real Madrid', 'Arsenal', 'Beyound Coding', 'Akshay Saini', 'Hitesh Choudhary'];

const ButtonList = () => { 
  return (
    <div className='flex'>
        {list.map((item, i) => (
          <Button key={item} className = {`${ i === 0 ? 'bg-black text-white' : 'bg-gray-200 text-black'}`}
           name={item} />
        ))}
    </div>
  )
}

export default ButtonList;
