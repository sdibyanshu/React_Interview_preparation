import React, {useEffect } from "react";
import "../App.css"
import { useSelector, useDispatch } from "react-redux";
import { getAlldata ,Ascendingdata,Descendingdata} from "../Redux/Fetch/fetch.action";
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
      <label htmlFor="">Sort Ascending</label>
      <input type="checkbox" onChange={()=>dispatch(Ascendingdata())}/>
      <label htmlFor="">Sort Descending</label>
      <input type="checkbox" onChange={()=>dispatch(Descendingdata())}/>
      
      
      <div className="apnadiv" >
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
