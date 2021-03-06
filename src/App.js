import './App.css';

import { useState, useEffect } from 'react';

const NUMBER_OF_ROWS = 5000

function App() {
  let startTime = performance.now();
  const [elements, setElements] = useState([]);

  useEffect(() => {
    const newElements = [];
    for(let i=0; i<NUMBER_OF_ROWS; i++) {
      newElements.push({ title: `Element ${i}`});
    }
    setElements(newElements);
    setTimeout(() => {
      console.log(`It took ${(performance.now() - startTime).toFixed(2)}ms to mount this component`);
    }, 0)
  }, []);

  const replaceRowsData = () => {
    startTime = performance.now();
    const newElements = [];
    for(let i=0;i<NUMBER_OF_ROWS; i++) {
      newElements.push({ title: `Changed title ${i}`});
    }
    setElements(newElements);
    setTimeout(() => {
      const endTime = performance.now();
      console.log(`This re-render took ${(endTime - startTime).toFixed(2)}ms`);
    }, 0)
  };

  return (
    <div className="App">
      <h1>React</h1>
      <h2>Performance test</h2>
      <button onClick={replaceRowsData}>Replace rows</button>
      {
        elements.map((el, index) => {
          return <div key={index}>{el.title}</div>
        })
      }
    </div>
  );
}

export default App;
