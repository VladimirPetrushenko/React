import React, { useState } from 'react';
import Clicker from './Clicker'
import {WithRef} from './Ref'

function App() {
    const [isClicker, setClicker] = useState(false);

    

    return (
        <div className="App">
          <h2>React App</h2>
            <button onClick={()=>setClicker(!isClicker)}>Toogle clicker</button>
            {isClicker && <Clicker />}
            <WithRef />
        </div>
    );
}

export default App;
