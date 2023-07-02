import React from 'react'
import './main.css'
import Cookies from 'universal-cookie';

export function index() {
  const cookies = new Cookies ();
  console.log(cookies)
  
    return (
    <>
    <div>index</div>
    </>
  )
}
