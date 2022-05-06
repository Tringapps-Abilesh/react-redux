import React from 'react'
import {  useSelector } from 'react-redux'
export default function Foot() {
  const elementValue = useSelector((state) => state)
  return (
    <div className='foot'>
      <h1>{elementValue[1]}</h1>
    </div>
  )
}
