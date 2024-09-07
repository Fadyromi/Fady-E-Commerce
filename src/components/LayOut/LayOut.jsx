import React from 'react'
import { useEffect,useState,useContext} from 'react'
import { Outlet, Route, RouterProvider } from 'react-router-dom'
import styles from './LayOut.module.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';






export default function LayOut() {


  return (<>
<div><NavBar/></div>
 <div className='container mx-auto  p-4 pt-8'><Outlet/></div>
 <div><Footer/></div>
 

 </>
  )
}
