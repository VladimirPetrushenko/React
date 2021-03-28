import React,{ useState } from 'react'
import {Books} from './component/Books'
import {Timer} from './component/Timer'
import {Context} from './hooks/Context'
import {Effect} from './hooks/Effect'
import {Reducer} from './hooks/Reducer'
import {State} from './hooks/State'
import {useLocalStorage} from './hooks/useLocalStorage'
import {usePrevious} from './hooks/usePrevious'

function App() {
  const [isEffect, setEffect] = useState(false);
  const [count, setCount] = useState(0);
  const [countStorage, setCountStorage] = useLocalStorage(0, "count");
  const effectShow = () =>{
    setEffect(!isEffect);
  }
  const prevCount = usePrevious(count);
  const prevStorage = usePrevious(countStorage);
  return (
    <div className="App">
      <Context>
        <State />
        <button onClick={effectShow}>UseEffect</button>
        {isEffect && <Effect />}
        <Books />
      </Context>
      <Reducer />
      <br></br>
      <button onClick={()=>setCount(()=>count+1)}>Send</button>
      <h2>Current: {count}</h2>
      <h2>Previous: {prevCount}</h2>

      <br></br>
      <button onClick={()=>setCountStorage(()=>countStorage+1)}>Send</button>
      <h2>Current: {countStorage}</h2>
      <h2>Previous: {prevStorage}</h2>
      <br></br>
      <Timer />

    </div>
  );
}

export default App;
