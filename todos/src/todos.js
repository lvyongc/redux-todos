import { Component } from "react";
import Todo from "./todo";

class Todos extends Component {
  render() {
    const { data } = this.props;
    return <ul id="todo-list">
      {
        data.map((item, index) => {
          return <Todo
            key={index}
            {...this.props}
            data={item}
          />
        })
      }
    </ul>
  }
}

export default Todos;