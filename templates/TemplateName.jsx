import React from 'react'
import { useEffect,useState,useContext} from 'react'
import { Route, RouterProvider } from 'react-router-dom'
import styles from './TemplateName.module.css';






export default function TemplateName() {

const [counter, setcounter] = useState()

useEffect(() => {}, [])




  return (<>
  
    <div className={styles.why}>TemplateName</div>
    </>
  )
}
