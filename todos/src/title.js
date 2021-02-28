/*函数式组件：
  在 React 16.7 之前，函数式又叫做纯渲染组件或无状态组件，在组件中没有 生命周期和 state
*/

function Title(props) {
  return <div className="title">
    <h1>todo</h1>
  </div>
}

export default Title;