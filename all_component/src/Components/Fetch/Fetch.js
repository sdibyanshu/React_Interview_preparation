import React, { useState, useEffect } from "react";
import "../../App.css";

const getData = async (url) => {
  let res = await fetch(url);
  return res.json();
};

function Fetch() {
  const [info, setinfo] = useState([]);

  useEffect(() => {
    getData("https://fakestoreapi.com/products?limit=10").then((res) => {
      setinfo(res);
    });
  }, []);
  console.log(info);

  return (
    <>
    <h1>Products Page</h1>
    <div className={"main"}>
    {info?.map((el) => (
        <div key={el.id}>
          <img src={el.image} alt="products" />
          <p>{el.title}</p>
          <p>{el.category}</p>
          <p>{el.price}</p>
        </div>
      ))}
    </div>

    </>
  );
}

export default Fetch;


