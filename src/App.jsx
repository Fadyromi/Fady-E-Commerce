import { useStateوCSSProperties, useContext } from 'react'
import './App.css'
import LayOut from './components/LayOut/LayOut'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Categories from './components/Categories/Categories'
import Brands from './components/Brands/Brands'
import Wishlist from './components/Wishlist/Wishlist'
import Login from './components/Login/Login'
import NotFound from './components/NotFound/NotFound'
import Register from './components/Register/Register'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CounterContextProvider from '../src/UseContext/CounterContext'
import UserContextProvider from './UseContext/userContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TermesAndConditions from './components/TermesAndConditions/TermesAndConditions'
import ProudcutDetails from './components/ProudcutDetails/ProudcutDetails'
import Cart from './components/Cart/Cart'
import CartContextProvider from './UseContext/CartContext'
import WishList from './components/Wishlist/Wishlist'






const routing = createBrowserRouter([
  {
    path: "", element: <LayOut />, children: [
      { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
      { path: 'products', element: <ProtectedRoute><Products /></ProtectedRoute> },
      { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
      { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
      {path: "wishlist",element: (<ProtectedRoute><WishList /></ProtectedRoute>), },
    
      { path: 'proudcutDetails/:id', element: <ProtectedRoute><ProudcutDetails /></ProtectedRoute> },
      { path: 'ForgetPassword', element: <ForgetPassword /> },
      { path: 'TermesAndConditions', element: <TermesAndConditions /> },

      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },

      { path: '*', element: <NotFound /> },
    ]
  },

])



const myClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 20 * 1000,
    },
  },
});


function App() {


  return (
    <>
      <QueryClientProvider client={myClient}>
        <UserContextProvider>
          <CartContextProvider>
            <CounterContextProvider>
              <RouterProvider router={routing} />
            </CounterContextProvider>
          </CartContextProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
