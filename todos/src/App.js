// ref 引入
import { Component, Fragment, createRef } from "react";
import "./index.css";
import Add from "./add";
import Stats from "./stats";
import Title from "./title";
import Todos from "./todos";
/*
  !!! 在 React 如果状态是引用类型，修改状态时最好返回一个新的引用
*/
/*
  ref 使用
  Ref 用于获取 ReactNodes 的实例：用在组件上则获取 组件 实例，用于节点上则获取 DOM实例


*/
export default class App extends Component {
  state = {
    // 状态时引用类型返回也是引用类型
    data: [
      {
        id: 1,
        todo: "今晚上王者",
        done: false
      },{
        id: 2,
        todo: "给学员留一个大惊喜",
        done: false
      },{
        id: 3,
        todo: "给学员留一个大惊吓",
        done: false
      }
    ]
  }
  // 添加 todo
  addTodo=(todo)=>{
    const { data } = this.state;
    this.setState({
      // 状态时引用类型返回也是引用类型，否则后面比较时拿不到更新前后值的区别
      data:[...data,{
        id: Date.now(),
        todo,
        done: false
      }]
    })
  }
  // 删除todo
  removeTodo=(id)=>{
    const { data } = this.state;
    this.setState({
      data: data.filter(item=>id!==item.id)
    })
  }
  // 修改 done 状态
  changeDone=(id,done)=>{
    const { data } = this.state;
    for(let i = 0; i < data.length; i++){
      let todo = data[i];
      // 状态时引用类型返回也是引用类型
      if(todo.id === id){
        data[i]={
          ...todo,
          done
        }
        break;
      }
    }
    this.setState({
      data
    })
  }
  // 编辑todo
  editTodo=(id,todo)=>{
    const { data } = this.state;
    for(let i = 0; i < data.length; i++){
      let nowTodo = data[i];
      if(nowTodo.id === id){
        data[i]={
          ...nowTodo,
          todo
        }
        break;
      }
    }
    this.setState({
      data
    })
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log(this.state.data,nextState.data);
  //   return true;
  // }

  // ref 创建
  box=createRef()
  todos=createRef()
  contont = createRef()

  componentDidMount(){
    console.log(this.box);
    console.log(this.todos);
    console.log(this.contont);
  }
  render() {
    const { data } = this.state;
    return <div 
      id="todoapp"
      // ref 使用，想获取谁的实例就在谁里面用ref
      ref={this.box}
    >
      <Title />
      <div 
        className="content"
        ref={this.contont}
      >
        <Add 
          addTodo={this.addTodo}
        />
        {
          data.length > 0 && (
            <Fragment>
              <Todos
                data={data}
                removeTodo={this.removeTodo}
                changeDone={this.changeDone}
                editTodo={this.editTodo}
                ref={this.todos}
              />
              <Stats
                data={data}
              />
            </Fragment>
          )
        }
      </div>
    </div>
  }
}