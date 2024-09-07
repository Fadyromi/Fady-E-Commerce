import React from "react";
import "./Brands.module.css";
import { useQuery } from "@tanstack/react-query";
// import Loading from "../Loading/Loading";
import axios from "axios";
import Loadlogo from "../Loadlogo/Loadlogo";
// import Alert from "../Alert/Alert";

export default function getBrands() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["Brands"],
    queryFn: async () =>
      await axios.get("https://ecommerce.routemisr.com/api/v1/brands"),
      select: (data) => data.data.data,
  });

  if (isLoading) return <Loadlogo/>;
  ;

  if (isError) {
    return console.log('bye');
    ;
  }

  return (
    <>
      <div className="min-h-screen mt-8">
        <div className="text-center ">
          <div className="flex flex-wrap items-center justify-center max-w-full py-5">
            {data?.map((brand) => (
              <div
                className="w-[23%] max-lg:w-[29%] max-md:w-[45%] max-sm:w-[100%] grid place-items-center m-2 p-2 rounded border border-[#f0f3f2] shadow hover:shadow-lg duration-500 hover:shadow-green-600"
                key={brand._id}
              >
                <img src={brand.image} alt="brands" />
                <span className="text-xl text-green-600">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
