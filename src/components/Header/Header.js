import React from 'react'
import './Header.css'

export default function Header({ count, setCount, getUser }) {
  return (
    <div>
        <input
          className='input'
          type="text"
          placeholder="enter the count"
          value={count}
          onChange={(e) => {
            setCount(e.target.value)
          }}
        />
        <button  onClick={getUser} className='btn'>Search</button>
    </div>
  )
}
