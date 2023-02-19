import {GET_DATA,GET_LOADING_DATA,GET_DATA_ERROR,GET_ASC,GET_DESC} from "./fetch.actiontype";

const initialState={
    isLoading: false,
    isError: false,
    data:[]
}

export const dataReducer=(state=initialState,action)=>{
 switch (action.type) {
    case GET_LOADING_DATA :{
        return{
          ...state,
          isLoading:true,
         }
    }
    case GET_DATA :{
        return{
        ...state,
        isLoading:false,
        data:action.payload,
        }
    } 
    case GET_DATA_ERROR :{
        return{
        ...state,
        isLoading:false,
        data:[],
        isError:true,
        }
    } 
    case GET_ASC :{
        return{
        ...state,
        isLoading:false,
        data:action.payload,
        }
    } 
    case GET_DESC :{
        return{
        ...state,
        isLoading:false,
        data:action.payload,
        }
    } 
    default:{
        return{
            ...state,
        }
    }
}



}
