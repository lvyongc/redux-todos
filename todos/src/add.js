
export default function Add(props) {
    const {addTodo} = props;
    return <div id="create-todo">
        <input 
          id="new-todo" 
          placeholder="What needs to be done?" 
          autoComplete="off" 
          type="text"
          onKeyDown={(e)=>{
            const {target,keyCode} = e;
            if(keyCode === 13){
              if(target.value.trim()){
                addTodo(target.value);
                target.value="";
              } else {
                alert("请输入todo");
              }
            }
          }}
        />

      </div>
  }