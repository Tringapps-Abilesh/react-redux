import React from 'react'
import { useSelector } from 'react-redux'

export default function Left() {
  const elementValue = useSelector((state) => state)
  return (
    <div class='left'>
      <h2>STORE</h2>
      <h3>{elementValue[0]}</h3>
      <h3>{elementValue[2]}</h3>
      <h3>{elementValue[3]}</h3>
      <h3>{elementValue[4]}</h3>
    </div>
  )
}
