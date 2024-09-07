import React from 'react'
import { useEffect,useState,useContext} from 'react'
import { Route, RouterProvider } from 'react-router-dom'
import styles from './Products.module.css';
import {CounterContext} from '../../UseContext/CounterContext';






export default function Products() {

// const [counter, setcounter] = useState()

useEffect(() => {}, [])

const {counter,changCounter} = useContext(CounterContext);





  return (<>
  
    <div className="pt-10">Products{counter}</div>
    <button onClick={changCounter}>Ok</button>
    </>
  )
}
