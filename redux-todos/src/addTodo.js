import React, {useState } from "react";
import { useDispatch } from "react-redux";
export default function AddTodo() {
    let [val,setVal] = useState("");
    let dispatch = useDispatch();
    return <div id="create-todo">
        <input
            id="new-todo"
            placeholder="What needs to be done?"
            autoComplete="off"
            type="text"
            value={val}
            onChange={({ target }) => {
                setVal(target.value);
            }}
            onKeyDown={({ keyCode }) => {
                if (keyCode == 13) {
                    if (val.trim()) {
                        // 提交数据
                        dispatch({
                            type: "ADD_TODO",
                            title: val
                        });
                        setVal("");
                    } else {
                        alert("请输入事项")
                    }
                }
            }}

        />
    </div>
}