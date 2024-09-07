import React, { useContext, useEffect, useState } from "react";
import "./WishList.module.css";
import WishListItem from "../WishListItem/WishListItem";
import { cartContext } from "../../UseContext/CartContext";


export default function WishList() {
  const { getWishList } = useContext(cartContext);
  const [wishData, setWishData] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  async function getUserWishlist() {
    const response = await getWishList();
    if (response.data.status === "success") {
      const data = response?.data;
      setWishData(data);
      // setIsLoading(false);
      console.log(data);
    }
  }

  useEffect(() => {
    getUserWishlist();
  }, []);

  

  return (
    <div className="min-h-screen bg-white mt-7 ">
      <div className="hero-content">
        <div className="max-w-full container bg-[#f0f3f2] py-5 px-3">
          <div className="flex items-center justify-center">
            <h1>Wishlist</h1>
            <h2>{wishData?.count}</h2>
          </div>

          {wishData?.data?.map((item) => (
            <WishListItem
              item={item}
              setWishData={setWishData}
              key={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
