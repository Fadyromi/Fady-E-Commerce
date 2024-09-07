import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { Route, RouterProvider, Link } from 'react-router-dom'
import styles from './Home.module.css';
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";
import { userContext } from '../../UseContext/userContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSlider from '../Slick/Slick';
import CategorySlider from '../CatogerySlider/CatogerySlider';
import Loadlogo from '../Loadlogo/Loadlogo';
import ProudcutDetails from '../ProudcutDetails/ProudcutDetails';










export default function Home() {

  const [products, setproducts] = useState([])
  async function getProducts() {
    const { data } = await axios('https://ecommerce.routemisr.com/api/v1/products')
    console.log(data.data);
    setproducts(data.data)
  }

  useEffect(() => {
    getProducts();
  }, [])

  const { token, settoken } = useContext(userContext);




  return (<>
    <MainSlider />
    <CategorySlider />

    <div className='container grid gap-2 py-10 sm:grid-cols-2 lg:grid-cols-6'>
      {products.length == 0 ? <Loadlogo />
        :
        products.map(function (p) {
          return <>
            <React.Fragment key={p._id}>
              <div>
              <Link to={'/ProudcutDetails'+'/'+ p._id}>
                <div className='p-2 duration-500 border shadow border-slate-900 double border-3 hover:shadow-lg hover:shadow-green-600 group' onClick={ProudcutDetails}>
                  <div className=''><img className='w-full ' src={p.imageCover} alt="" /></div>

                  <h3 className='font-bold text-green-500 lg:text-sm'>{p.title.split(' ').slice(0, 2).join(' ')}</h3>
                  <p className='mb-2 line-clamp-1'>{p.description}</p>
                </div>
              </Link>
              <button className={`w-full py-2 text-white transition-all duration-500 translate-y-2 bg-green-600 rounded-md opacity-1 group-hover:opacity-100 m' onClick=${async ()=>{await addItemToCard()}}?`}>Add To Cart</button>
              </div>
            </React.Fragment >
          </>
        })}

    </div >


  </>)

}
