import React, { useState } from 'react';
//css
import style from '../src/styles/Main.module.css'

//components
import Header from './components/Header';
import Footer from './components/Footer';
import TaksForm from './components/TaksForm';
import TaskList from './components/TaskList';

//INTERFACE
import { ITask } from './interfaces/Task';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])


  return (
    <div>
      <Header />
      <main className={style.main}>
        <div>
          <h2 className='text-xl underline'>O que você vai fazer?</h2>
          <TaksForm btnText='Criar tarefa' taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <hr className='h-px max-w-96 mx-auto mb-3 bg-black border-2 border-black' />
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
