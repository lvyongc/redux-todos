import { createRef, PureComponent } from "react";
/*
  判断组件是否需要更新2
  PureComponent 功能和 Component 完全一致，只是在组件更新时会进行浅对比，浅对比如果 props 或 state 没有修改则 不进行组件更新，状态为引用类型返回也要是引用类型
*/
/*
  在 input 进入编辑状态时，同时需要 input 获得焦点
*/
/*
  Ref 用于获取 ReactNodes 的实例：用在组件上则获取 组件 实例，用于节点上则获取 DOM实例
*/
class Todo extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      isEdit: false,
      editVal: props.data.todo // 将 todo 的内容备份一份
    }
  }
  editText = createRef();
  componentDidUpdate(prevProps,prevState){
    // 判断是否是刚进入编辑状态 上一次为 false 当前次为 true 代表进入编辑状态
    if((!prevState.isEdit)
      &&this.state.isEdit){
        //console.log("进入编辑状态");current存的实例
        this.editText.current.focus();
    }
  }
  /*
      编辑todo：
        
        1. 记录一下原来的 todo
        2. 退出编辑时，如果内容为空，则恢复原有内容，如果内容不为空则为新内容
  */
  render(){
    const {data,removeTodo,changeDone,editTodo} = this.props;
    const {id,done,todo} = data;
    const { isEdit, editVal } = this.state;
    return <li className={isEdit?"editing":""}>
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
          <div 
            className="todo-content"
            // 双击
            onDoubleClick={()=>{
              this.setState({
                isEdit: true
              })
            }}
          >{todo}</div>
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
            value={editVal}
            onChange={({target})=>{
             // console.log(target.value);
                //editTodo(id,target.value);
                // 编辑时，不修改原有的todo 而是修改复制出来的
                this.setState({
                  editVal:target.value
                })
                
            }}
            ref={this.editText}
            // 失去焦点
            onBlur={()=>{
              // 退出编辑时，判断当前的修改是否为空
              if(editVal.trim()){
                // 如果不为空，则 修改 todo
                  editTodo(id,editVal);
              } else {
                // 如果为空，则将 editTodo 恢复为 todo
                this.setState({
                  editVal:todo
                })
              }

              this.setState({
                isEdit: false
              })
            }}
          />
        </div>
      </div>
    </li>
  }
  
}

export default Todo;