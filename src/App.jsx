import { useEffect, useState } from "react";
import Content from "./components/Content";
import Timmer from "./components/Timmer";
import Avata from "./components/Avata";
import { Chat } from "./components/Chat";

const App = () => {
    const [mounted, setMounted] = useState(false);
    const [count, setCount] = useState(0);

    //useEffect
    useEffect(() => {
      
    })

    const onHandleDecrease = () => {
      setCount((prevCount) => {
        if(prevCount <= 0) {
          return 0;
        } else {
          return prevCount - 1;
        }
      })
    }
  return (
    <div>
      <div>
      <button onClick={() => setCount(onHandleDecrease)}>-</button>
      <span>{!isNaN(count) ? count : 0}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <button onClick={() => setMounted(!mounted)}>
        {mounted === false ? 'show': 'hidden'}
      </button>
      {mounted && <Avata/>}
    </div>
  )
}
export default App;