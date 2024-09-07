import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { Link, Route, RouterProvider, useNavigate } from 'react-router-dom'
import styles from './Register.module.css';
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { userContext } from '../../UseContext/userContext';







export default function Register() {

  const [apiErrorMsg, setapiErrorMsg] = useState('')
  const [supIsLoading, setsupIsLoading] = useState(false)
  const navigate = useNavigate();
  useEffect(() => { }, [])

  const regApi = "https://ecommerce.routemisr.com/api/v1/auth/signup";

  const schema = yup.object().shape({
    name: yup.string().required().min(3).max(30),
    email: yup.string().required().email(),
    password: yup.string().required().matches(/^[A-z].{5,}/),
    rePassword: yup.string().required().oneOf([yup.ref('password'), null]),
    phone: yup.string().required().matches(/^01[0125][0-9]{8}$/),



  })
  const formik = useFormik({
    initialValues: {

      "email": "",
      "name": "",
      "password": "",
      "phone": "",
      "rePassword": ""

    },

    onSubmit: handleSubmit,




    validationSchema: schema,
  })

  console.log(formik.errors);

  async function handleSubmit(values) {
    setsupIsLoading(true)
    try {
      const { data } = await axios.post(regApi, values);
      console.log(data);
      if (data.message == 'success') {
        console.log('ok');
        navigate('/')
        settoken(data.token)
      }

    } catch (error) {

      setapiErrorMsg(error.response.data.message);
    } finally { setsupIsLoading(false) }

  }


  useEffect(() => {
  
    
  }, [])


  const{settoken} = useContext(userContext)


  return (<>
    <div className="container mx-auto mt-11">
      <form onSubmit={formik.handleSubmit}>
        {apiErrorMsg ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          {apiErrorMsg}
        </div> : null}


        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="Full_Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
            {formik.errors.name && formik.touched.name ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              {formik.errors.name}
            </div>
              : null}
            <input {...formik.getFieldProps("name")} type="text" name='name' id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Full Name" required />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            {formik.errors.phone && formik.touched.phone ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              {formik.errors.phone}
            </div>
              : null}
            <input {...formik.getFieldProps("phone")} name="phone" type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="012-000-000-00" pattern="[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}" required />
          </div>
          {/* <div>
            <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website URL</label>
            <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" />
          </div> */}
        </div>
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
        <div className="mb-6">
          <label htmlFor="rePassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
          <input {...formik.getFieldProps("rePassword")} name="rePassword"
            type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
          </div>
          <label htmlFor="remember" className="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300">I agree with the <a href="termesAndConditions" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions...</a></label>
        </div>
        <button
          disabled={supIsLoading}
          type="submit" className="disabled:bg-gray-400 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {supIsLoading ? <i className="fa-2x fa-solid fa-shake animate-spin"></i> : "Submit"}
        </button>
      </form>
    </div>

  </>
  )
}
