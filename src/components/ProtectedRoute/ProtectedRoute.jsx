import React from 'react'
import { useEffect,useState,useContext} from 'react'
import { Navigate, Route, RouterProvider } from 'react-router-dom'
import styles from './ProtectedRoute.module.css';
import { userContext } from '../../UseContext/userContext';
import { Alert } from 'react-bootstrap';






export default function ProtectedRoute(p) {

const [counter, setcounter] = useState()

useEffect(() => {}, [])

const {token} = useContext(userContext)


if(token){
  return p.children
}
else{
 

  return <Navigate to={'/login'}></Navigate>
}

}
