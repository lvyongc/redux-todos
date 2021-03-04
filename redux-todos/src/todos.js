import React from "react";
import Li from "./li";
import { useSelector } from "react-redux";
export default function Todos(){
    let data = useSelector(state=>state);
    return <ul id="todo-list">
    {data.map(item=>{
        return <Li 
            key={item.id}
            data = {item}
        />
    })}
 </ul>
}