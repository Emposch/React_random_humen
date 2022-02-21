import React, { useEffect, useState } from 'react'
import './Main.css'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { API } from '../../components/confiq'

export default function Main() {
  const [count, setCount] = useState('')
  const [user, setUser]= useState()
console.log(count)
  const getUser = async (e) => {
    const req = await fetch(API+count)
    const res = await req.json()
    console.log(res.results)
    setUser(res.results)
  }
  useEffect(() => {
    getUser()
  }, [count])
  return (
    <div className='main'>
      <Header count={count} setCount={setCount} getUser={getUser}/>
      {
        user?.map((el, index)=>{
          return(
            <div className='main_render' key={index}>
              <h1>{el?.name.title} {el?.name.first} {el?.name.last}</h1>
              <p>Name: {el?.name.first}</p>
              <p>Gender: {el?.gender}</p>
              <p>Age: {el?.dob.age}</p>
              <p>Phone: {el?.phone}</p>
              <p>Country: {el?.location.country}</p>
              <img src={el?.picture.large} alt="img" className='avatar' />
            </div>
          )
        })
      }
      <Footer />
    </div>
  )
}