import React, { useState, useEffect } from "react";
import "../../App.css";

const FetchThen = () => {
    const [user, SetUser] = useState([]);
    const APiLink = "https://fakestoreapi.com/products";
    // original API=>  https://fakestoreapi.com/products
  
    useEffect(() => {
      async function fetchAPI() {
        await fetch(APiLink)
          .then((res) =>  res.json())
          .then((res) => SetUser(res))
          .catch((err) => console.log(err));
      }
      fetchAPI();
    }, []);
    console.log(user);
    return (
      <>
           <h1>Products Page</h1>
           <div className="main">
           {user?.map((el) => (
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
  };
  
  export default FetchThen;