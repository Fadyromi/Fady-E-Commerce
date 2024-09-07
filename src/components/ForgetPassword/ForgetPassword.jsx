import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { Link, Route, RouterProvider, useNavigate } from 'react-router-dom'
import styles from './ForgetPassword.module.css';
import { Formik } from 'formik';
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios, { AxiosError } from 'axios';




export default function ForgetPassword() {

  const [apiErrorMsg, setapiErrorMsg] = useState('')
  const [logIsLoading, setlogIsLoading] = useState(false)
  const navigate = useNavigate();



  useEffect(() => { }, [])

  async function forgetPassword(values) {
    setlogIsLoading(true)

    try {
      const { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', values);
      console.log(data);
      if (data.message == 'success') {
        console.log('ok');
        navigate('/');

      }
    } catch (error) {
      console.log(error);
      setapiErrorMsg(error.response.data.message);

    } finally { setlogIsLoading(false) }




  }
  const schema = yup.object().shape({

    email: yup.string().required().email(),

  })

  const formik = useFormik({
    initialValues: {

      "email": "",

    },

    onSubmit: forgetPassword,




    validationSchema: schema,
  })


  return (<>



    <form onSubmit={formik.handleSubmit} className="max-w-sm mx-auto mt-20">
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
      <button type="submit" onSubmit={forgetPassword} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Verify</button>
    </form>









  </>
  )
}
