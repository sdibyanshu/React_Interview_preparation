import {INC,DEC} from "./counter.actiontype";
export const increment=(value=1)=>({type:INC,payload:value});
export const decrement=(value=1)=>({type:DEC,payload:value});
