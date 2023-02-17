
import axios from "axios";
import {GET_DATA,GET_LOADING_DATA,GET_DATA_ERROR} from "./fetch.actiontype";

const getDataError=()=>({
    type:GET_DATA_ERROR,
})

const getData=(payload)=>({
    type:GET_DATA,
    payload,
});


export const getAlldata=()=>(dispatch)=>{
  dispatch({type:GET_LOADING_DATA})
// fetching data here
axios.get("https://fakestoreapi.com/products")


// Successfullly got data 
.then(({data})=>dispatch(getData(data)))



// data error 
.catch(()=>dispatch(getDataError()));

}

