import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "./index.css";
import AddTodo from "./addTodo";
import Todos from "./todos";
import Stats from "./stats";
export default function App(){
    let data = useSelector(state=>state);
    return <div id="todoapp">
    <div className="title"><h1>todo</h1></div>
    <div className="content">
        <AddTodo />
        {data.length>0?
            <Fragment>
                <Todos />
                <Stats />
            </Fragment>
            : ""
        }
    </div>
</div>
}