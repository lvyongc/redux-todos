import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
export default function Li(props) {
    let { id, title, done } = props.data;
    let [isEdit,setIsEdit] = useState(false);
    let [editVal,setVal] = useState(title);
    let editInput = useRef();
    let dispatch = useDispatch();
    useEffect(()=>{
        if(isEdit){
            editInput.current.select();
        }
    },[isEdit]);
    return <li className={isEdit ? "editing" : ""}>
        <div className={"todo " + (done ? "done" : "")}>
            <div className="display">
                <input
                    className="check"
                    type="checkbox"
                    checked={done}
                    onChange={({ target }) => {
                        dispatch({
                            type: "CHANGE_DONE",
                            id,
                            done: target.checked
                        })
                    }}
                />
                <div
                    className="todo-content"
                    onDoubleClick={() => {
                        setIsEdit(true);
                    }}
                >{title}</div>
                <span
                    className="todo-destroy"
                    onClick={() => {
                        dispatch({
                            type:"REMOVE_TODO",
                            id
                        });
                    }}
                ></span>
            </div>
            <div className="edit">
                <input
                    className="todo-input"
                    type="text"
                    value={editVal}
                    ref={editInput}
                    onChange={({ target }) => {
                        setVal(target.value)
                    }}
                    onBlur={() => {
                        if(editVal.trim()){
                            dispatch({
                                type:"EDIT_TODO",
                                id,
                                title:editVal
                            });
                            setVal("")
                        } else {
                            setVal(title);
                        }
                        setIsEdit(false);
                    }}
                />
            </div>
        </div>
    </li>
}
