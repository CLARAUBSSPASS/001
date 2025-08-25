import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1); 
  const decrementCount = () => setCount(count - 1);


  const reset = () => setCount(0);

  return (

    <div className='contador-container'>
      <h1>Contador de Cliques</h1>
      <p>Cliques: {count}</p>

      <div className='botozinhos'>
        <button onClick={incrementCount}>incrementar</button>
        <button onClick={decrementCount}>Decremetar</button>
        <button onClick={reset}>Resetar</button>
      </div>
    </div>


  );
}

export default App;