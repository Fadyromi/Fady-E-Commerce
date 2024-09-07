import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { Link, Route, RouterProvider, useNavigate } from 'react-router-dom'
import styles from './NavBar.module.css';
import Home from '../Home/Home';
import { CounterContext } from '../../UseContext/CounterContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { userContext } from '../../UseContext/userContext';
import ShopingCart from "../../assets/images/Shopping_cart_icon.svg.png";
import {
  FaFacebook,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { cartContext } from '../../UseContext/CartContext';





export default function NavBar() {

  // const [counter, setcounter] = useState()

  useEffect(() => { }, [])
  const { cartItems } = useContext(cartContext);
  const { counter } = useContext(CounterContext);
  const { token, settoken } = useContext(userContext);
  const Navigate = useNavigate

  console.log(counter);

  function signOut() {

    settoken(null);
    Navigate('/login')
  }



  return (<>



    <nav className="fixed top-0 z-20 w-full bg-white border-b border-gray-200 dark:bg-gray-900 start-0 dark:border-gray-600">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={ShopingCart} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FADY E-Commerce</span>

        </a>

        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <div className="px-4 py-2 ">
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
            <i></i>
            <i></i>
          </div>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div className="flex justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          {token && <>
            <div className='flex justify-center start-1/3 '>
              <ul className="flex flex-row mt-0 space-x-8 text-sm font-medium rtl:space-x-reverse">
                <li>
                  <Link to="" className="block px-3 py-2 text-white rounded bg-lime-800 -900 md:bg-transparent md:text-green-800 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                </li>
                <li>
                  <Link to="Cart" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Cart</Link>
                </li>
                <li>
                  <Link to="WishList" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">WishList</Link>
                </li>
                <li>
                  <Link to="Brands" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Brands</Link>
                </li>
                <li>
                  <Link to="Categories" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0 md:dark:hover:text-green-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Category</Link>
                </li>
              </ul>
            </div>
          </>}
          {!token && <>
            <div className='absolute end-5'>
              <ul className="relative flex p-4 mt-4 font-medium border border-gray-100 rounded-lg start-0 md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li><Link to="register" href="" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Regsiter</Link></li>
                <li><Link to="Login" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</Link></li>
              </ul>
            </div>
          </>}
          {token && <>
            <div className='absolute end-5'>
              <ul className="relative flex p-4 mt-4 font-medium border border-gray-100 rounded-lg start-0 md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li><Link onClick={signOut} className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-800 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">SignOut</Link></li>
                <li>
                  <Link to={'cart'}>
                    <span className="relative flex items-center px-3 py-2 text-gray-900 transition-all duration-300 rounded-lg cursor-pointer hover:bg-gray-100 dark:text-white dark:hover:text-green-500 dark:hover:bg-gray-700">
                      <CiShoppingCart className="text-3xl" />
                      <span className="absolute right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white -translate-x-1/2 translate-y-1/2 bg-green-600 rounded-full -top-2">
                        {cartItems}
                      </span>
                    </span>
                  </Link>
                </li>
                  <div className='relative'>
                  <ToggleMode></ToggleMode>
                  </div>
                
                <li className="flex gap-4 px-3 py-2 text-gray-900 rounded lg:border-0 lg:p-0 dark:text-white">
                  <a
                    className="hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-green-700 lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                    href=""
                  >
                    <FaFacebook />
                  </a>
                  <a
                    className="hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-green-700 lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                    href=""
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    className="hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-green-700 lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                    href=""
                  >
                    <FaTiktok />
                  </a>
                  <a
                    className="hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-green-700 lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                    href=""
                  >
                    <FaTwitter />
                  </a>
                  <a
                    className="hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-green-700 lg:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                    href=""
                  >
                    <FaYoutube />
                  </a>
                </li>
              </ul>

            </div>
          </>}


        </div>


      </div>
    </nav>

  </>
  )
}
function ToggleMode() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    document.querySelector("html").classList.toggle("dark", isDark);
    localStorage.setItem("color-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      id="theme-toggle"
      type="button"
      className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
    >
      {isDark ? (
        <svg
          id="theme-toggle-dark-icon"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg
          id="theme-toggle-light-icon"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </button>
  );
}
