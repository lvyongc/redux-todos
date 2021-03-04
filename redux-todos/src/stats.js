import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
export default function Stats() {
    let data = useSelector(state => state);
    let unDoneData = data.filter(item => (!item.done));
    let doneDataLen = data.length - unDoneData.length;
    let dispatch = useDispatch();
    return <div id="todo-stats">
        <span className="todo-count">
            <span className="number">{unDoneData.length}</span>
            <span className="word">项待完成</span>
        </span>
        {
            doneDataLen > 0 ?
                <span className="todo-clear"><a
                    onClick={() => {
                        dispatch({ type: "ClEAR_DONE_TODO" })
                    }}
                >Clear <span>{doneDataLen}</span> 已完成事项</a></span>
                : ""
        }

    </div>
}