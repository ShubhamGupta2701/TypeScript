import { useState } from "react";

interface todo {
  title:String;
  desc : String;
  isChecked ?: boolean;
}

function App() {
  
  return (
    <>
      <Todo title="Todo 1" desc="this is first todo" isChecked={false}></Todo>
    </>
  )
}
function Todo(props:todo):any{
  const [check,setCheck] = useState(props.isChecked);
  function updateCheck(){
    setCheck(true);
    console.log(props.isChecked);
  }
  return (
<div>
    <h1>{props.title}</h1>
    <h2>{props.desc}</h2>
    <h3>Status : Not Completed</h3>
    <button onClick={updateCheck}>click to comlpete</button>
  </div>
  )
}


export default App
