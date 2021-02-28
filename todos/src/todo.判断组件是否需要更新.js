import { Component } from "react";

class Todo extends Component {
  /*
      在 React 中，父组件更新，会引起所有的子组件一块更新。
  */
  shouldComponentUpdate(nextProps,nextState){
    // console.log("重新渲染了",nextProps.data.id);
    // 判断之前的状态和现在的状态不一致时再更新
    if(
      this.props.data.done !== nextProps.data.done
      || this.props.data.todo !== nextProps.data.todo
    ){
      return true;
    }
    // 前后一致不更新
    return false;
  }
  render(){
    const {data,removeTodo,changeDone} = this.props;
    const {id,done,todo} = data;
    console.log(id,"更新了");
    return <li className="">
      <div className={"todo "+(done?"done":"")}>
        <div className="display">
          <input 
            className="check" 
            type="checkbox" 
            checked={done}
            onChange={({target})=>{
                changeDone(id,target.checked);
            }}
          />
          <div className="todo-content">{todo}</div>
          <span className="todo-destroy"
            onClick={()=>{
              removeTodo(id);
            }}
          ></span>
        </div>
        <div className="edit">
          <input 
            className="todo-input" 
            type="text" 
          />
        </div>
      </div>
    </li>
  }
  
}

export default Todo;