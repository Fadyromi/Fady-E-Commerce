import React from 'react'
import { useEffect,useState,useContext} from 'react'
import { Route, RouterProvider } from 'react-router-dom'
import styles from './NotFound.module.css';






export default function NotFound() {

const [counter, setcounter] = useState()

useEffect(() => {}, [])







  return (<>
  
    <div className={styles.why}>NotFound</div>
    </>
  )
}
