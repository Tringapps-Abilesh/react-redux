import React from 'react'
import {  useSelector } from 'react-redux'
export default function Head() {
  const elementValue = useSelector((state) => state)
  return (
    <div className='head'>
      <h1>{elementValue[0]}</h1>
    </div>
  )
}
