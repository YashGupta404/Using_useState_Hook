import React,{useState} from "react";

function App() {

  setInterval(updateTime, 1000);

  let time = new Date().toLocaleTimeString().replace("AM","");

const [count,setCount] = useState(time) // useState Hook


function updateTime(){
  const newTime = new Date().toLocaleTimeString();
  setCount (newTime.replace("AM",""));
  
}

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
