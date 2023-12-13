import { useState} from 'react';
import State from './components/State';
import FisrtComponent from './components/fisrtComponent';

function App() {
  //variaveis
  const name: string = 'Higor'



  const userGreeting = (name:string):string => {
    return `Olá, ${name}`
  }

  //state



  return (
    <div className="App">
      <h1 className=''>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <h2>{userGreeting(name)}</h2>
      <FisrtComponent/>

      <State/>
    </div>
  );
}

export default App;
