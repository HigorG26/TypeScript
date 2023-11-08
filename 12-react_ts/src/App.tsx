import { useState} from 'react';
import FisrtComponent from './components/fisrtComponent';

function App() {
  //variaveis
  const name: string = 'Higor'



  const userGreeting = (name:string):string => {
    return `Olá, ${name}`
  }



  return (
    <div className="App">
      <h1 className=''>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <h2>{userGreeting(name)}</h2>
      <FisrtComponent/>
    </div>
  );
}

export default App;
