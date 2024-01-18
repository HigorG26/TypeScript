import React from 'react'
import { ITask } from '../interfaces/Task'

//CSS
import style from '../styles/TaskList.module.css';

interface Props {
  taskList: ITask[],
}

const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={style.task}>
            <div className={style.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={style.actions}>
            <i className='bi bi-pencil'></i>
              <i className='bi bi-trash'></i>
            </div>
          </div>
        ))
      ) : (
        <p>NÃO HÁ TAREFAS CADASTRADAS!</p>
      )}
    </>
  )
}

export default TaskList
