import React from 'react'
import { useEffect,useState,useContext} from 'react'
import { Route, RouterProvider } from 'react-router-dom'
import styles from './ShowProudct.module.css';






export default function ShowProudct() {

const [counter, setcounter] = useState()

useEffect(() => {}, [])




  return (<>
  
    <div className={styles.why}>ShowProudct</div>
    </>
  )
}
