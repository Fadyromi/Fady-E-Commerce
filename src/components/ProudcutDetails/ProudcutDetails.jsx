import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { Route, RouterProvider, useParams } from 'react-router-dom'
import styles from './ProudcutDetails.module.css';
import axios from 'axios';






export default function ProudcutDetails() {

  const { id } = useParams();
  const [productdetails, setproductdetails] = useState(null)

  const detailApi = 'https://ecommerce.routemisr.com/api/v1/products/'

  async function getSpecProudcut(id) {
    const { data } = await axios.get(detailApi + id)
    console.log(data);
    setproductdetails(data.data)
  }



 

  useEffect(() => {
    getSpecProudcut(id);
  }, [])




  return (<>

    <div className='grid gap-2 mt-5 sm:grid-cols-12'>
      <div className='col-span-4 py-5'>
        <img src={productdetails?.imageCover} alt="" />
      </div>
      <div className='self-center col-span-8 text-center justifey-center'>
        <h2 className='mt-10 text-4xl '>{productdetails?.title}</h2>
        <p className='mt-6 text-3xl'>{productdetails?.brand.name}</p>
        <p className='mt-6'>{productdetails?.description}</p>
        <p className='mt-6'>Price : { productdetails?.price}</p>
        <p className='mt-6'>Left : { productdetails?.quantity}</p>
        <p className='mt-6'>Rating : { productdetails?.ratingsAverage}</p>
        <button className='w-full py-2 text-white bg-green-600 rounded-md my-7'>Add To Cart</button>

      </div>

    </div>
  </>
  )

}