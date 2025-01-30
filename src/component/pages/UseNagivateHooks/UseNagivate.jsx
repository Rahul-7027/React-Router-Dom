import React from 'react'
import { useNavigate } from 'react-router-dom'

const UseNagivate = () => {
    const navigate=useNavigate()
  return (
    <div>
      <button onClick={()=>{navigate(-1)}}></button>
    </div>
  )
}

export default UseNagivate
