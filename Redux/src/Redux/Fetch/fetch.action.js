
import axios from "axios";
import {GET_DATA,GET_LOADING_DATA,GET_DATA_ERROR,GET_ASC,GET_DESC} from "./fetch.actiontype";

const getDataError=()=>({
    type:GET_DATA_ERROR,
})

const getData=(payload)=>({
    type:GET_DATA,
    payload,
});
const getAscData=(payload)=>({
  type:GET_ASC,
  payload,
})

const getDescData=(payload)=>({
  type:GET_DESC,
  payload,
})



export const getAlldata=()=>(dispatch)=>{
  dispatch({type:GET_LOADING_DATA})
// fetching data here
axios.get("https://fakestoreapi.com/products")


// Successfullly got data 
.then(({data})=>dispatch(getData(data)))



// data error 
.catch(()=>dispatch(getDataError()));

}

// Getting Ascending Data 


export const Ascendingdata=()=>(dispatch)=>{
  dispatch({type:GET_LOADING_DATA})
// fetching data here
axios.get("https://fakestoreapi.com/products?sort=asc")


// Successfullly got data 
.then(({data})=>dispatch(getAscData(data)))



// data error 
.catch(()=>dispatch(getDataError()));

}


// Getting Descending Data 

export const Descendingdata=()=>(dispatch)=>{
  dispatch({type:GET_LOADING_DATA})
// fetching data here
axios.get("https://fakestoreapi.com/products?sort=desc")


// Successfullly got data 
.then(({data})=>dispatch(getDescData(data)))



// data error 
.catch(()=>dispatch(getDataError()));

}

