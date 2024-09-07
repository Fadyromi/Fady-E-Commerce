import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { Link, Route, RouterProvider, useNavigate } from 'react-router-dom'
import styles from './Login.module.css';
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { userContext } from '../../UseContext/userContext';
import ForgetPassword from '../ForgetPassword/ForgetPassword';








export default function Login() {

  const [apiErrorMsg, setapiErrorMsg] = useState('')
  const [logIsLoading, setlogIsLoading] = useState(false)
  const navigate = useNavigate();

  
  useEffect(() => { }, [])

  const LoginApi = "https://ecommerce.routemisr.com/api/v1/auth/signin";

  const schema = yup.object().shape({
    
    email: yup.string().required().email(),
    password: yup.string().required().matches(/^[A-z].{5,}/),
    
  })
  const formik = useFormik({
    initialValues: {

      "email": "",
      "password": "",
    },

    onSubmit: handleLogin,




    validationSchema: schema,
  })

  console.log(formik.errors);

  async function handleLogin(values) {
    setlogIsLoading(true)
    try {
      const { data } = await axios.post(LoginApi, values);
      console.log(data);
      if (data.message == 'success') {
        console.log('ok');
        navigate('/')
        settoken(data.token);
      }

    } catch (error) {

      setapiErrorMsg(error.response.data.message);
    } finally { setlogIsLoading(false) }

  }

useEffect(() => {
  console.log('mounting Login');
  
}, [])



const {settoken} = useContext(userContext)



  return (<>
    <div className="container mx-auto mt-11">
      <form onSubmit={formik.handleSubmit}>
        {apiErrorMsg ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {apiErrorMsg}
        </div> : null}

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
          {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.email}
          </div>
            : null}
          <input {...formik.getFieldProps("email")} name="email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          {formik.errors.password && formik.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
            {formik.errors.password}
          </div>
            : null}
          <input {...formik.getFieldProps("password")} name="password" type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div>
        <button
          disabled={logIsLoading}
          type="submit" className="disabled:bg-gray-400 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {logIsLoading ? <p>Loading</p> : "Login Now"}
        </button>
        
      <h2 className='pt-4'><Link to={"/ForgetPassword"}>Forget Your Password !!!</Link></h2>
      </form>
    </div>

  </>
  )
}
