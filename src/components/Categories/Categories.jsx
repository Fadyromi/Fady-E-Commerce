import React from "react";
import "./Categories.module.css";
import { useQuery } from "@tanstack/react-query";
// import Alert from "../Alert/Alert";
import axios from "axios";
import Loadlogo from "../Loadlogo/Loadlogo";

export default function Categories() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: async () =>
      await axios.get("https://ecommerce.routemisr.com/api/v1/categories"),
    select: (data) => data.data.data,
  });

  if (isLoading) {
    return <Loadlogo/>;
  }

  if (isError) {
    return console.log('hi');
    ;
  }
  return (
    <div className="grid mt-10 gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((p) => (
        <CategoryItem key={p._id} category={p} />
      ))}
    </div>
  );
  
  function CategoryItem({ category }) {
    return (
      <div className="flex flex-col p-4 duration-500 rounded-lg shadow cursor-pointer hover:shadow-lg hover:shadow-green-600">
        <div className="grow">
          <img
            className="object-cover object-center w-full h-full"
            src={category.image}
            alt=""
          />
        </div>
        <div>
          <h5 className="my-3 text-2xl font-semibold text-center text-green-600 dark:text-white">
            {category.name}
          </h5>
        </div>
      </div>
    );
  }
  
}
