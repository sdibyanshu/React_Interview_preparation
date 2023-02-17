import React, {useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getAlldata } from "../Redux/Fetch/fetch.action";

function Data() {
  const { data, isLoading, isError } = useSelector((store) => store.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlldata());
  }, []);

  console.log(data);

  if (isLoading) {
    return <>...loading</>;
  }
  if (isError) {
    return <>...Error</>;
  }

  return (
    <>
      <div>
        {data.map((el) => (
          <div>
            <img src={el.image} alt="" />
            <p>{el.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Data;
