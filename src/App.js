import './App.css';
import React, { useState } from 'react';

function App() { 
  const [count,addCount] = useState(1);
  // const [mulCoun,multCount] = useState(1);
  const increase = () => {
  addCount(count + 1);

}

const decrease = () => {
  addCount(count - 1);
  
}

const multiply = () => {
  addCount(count * 2 );
  console.log(addCount);
}



  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor:'rgb(50 188 50 / 37%)',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '300%',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '-15%',
      
    }}>
      
      
      <h1 style={{
        position: 'relative',
        width: '500px',
        backgroundColor: '#7fbd7f87',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: '60px',
        borderRadius: '20px'
      }}>COUNTER APP</h1>
      
      
      
      <p style={{
        fontSize: '100px',
        fontFamily: 'Changa',
        backgroundColor: '#7fbd7f87',
        height: '1.5em',
        width: '1.5em',
        textAlign: 'center'
      }}>{count}</p>

{/* <p style={{
        fontSize: '100px',
        fontFamily: 'Changa',
        backgroundColor: '#7fbd7f87',
        height: '1.5em',
        width: '1.5em',
        textAlign: 'center'
      }}>{mulCoun}</p>
       */}
      
      <div className="buttons">
      
      
      
      <button onClick={increase}
      style={{
        fontSize: '60%',
        position: 'relative',
        top: '20vh',
        marginRight: '5px',
        backgroundColor: 'green',
        borderRadius: '8%',
        color: 'white',
      }}
      >Increase</button>
      
      
      
      <button  onClick={decrease}
      style={{
        fontSize: '60%',
        position: 'relative',
        top: '20vh',
        marginRight: '5px',
        backgroundColor: 'green',
        borderRadius: '8%',
        color: 'white',
      }}
      >decrease</button>


<button  onClick={multiply}
      style={{
        fontSize: '60%',
        position: 'relative',
        top: '20vh',
        marginRight: '5px',
        backgroundColor: 'green',
        borderRadius: '8%',
        color: 'white',
      }}
      >dubble</button>
      </div>
    </div>
  );
}

export default App;
