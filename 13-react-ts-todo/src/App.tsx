import React from 'react';
//css
import style from '../src/styles/Main.module.css'

//components
import Header from './components/Header';
import Footer from './components/Footer';
import TaksForm from './components/TaksForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div>
      <Header />
      <main className={style.main}>
        <div>
          <h2>O que vc vai fazer?</h2>
          <TaksForm btnText='Criar tarefa'/>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
