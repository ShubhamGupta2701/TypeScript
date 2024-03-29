import { useState } from "react";

interface todo {
  id:number;
  title:String;
  desc : String;
  isChecked : boolean;
}

function App() {
  return (
    <div>
      <Todo id={1} title="Todo 1" desc="this is first todo" isChecked={false}></Todo>
    </div>
  )
}
function Todo(props:todo){
  let [isChecked,setIsChecked] = useState(props.isChecked);
  function updateCheck(){
    setIsChecked(!isChecked)
  }
  return (
  <div>
    <div>
      <h1>{props.title}</h1>
    </div>
    <div>
      <h2>{props.desc}</h2>
    </div>
    <div>
      <ChangeStatus isChecked={isChecked}/>
    </div>
    <button onClick={updateCheck}>click to comlpete</button>
  </div>
  )
}

function ChangeStatus(props:{isChecked:boolean}){
  return (
    <div>
      <h3>Status : {props.isChecked ? "Comlpeted" : "Not Comlpeted"}</h3>
    </div>
  )
}


export default App
