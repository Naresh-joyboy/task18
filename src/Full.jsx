import React, { useState } from 'react'
import './index.css';
import  ReactDOM  from 'react-dom';
import './App.css';
import BasicButtonExample from './Dropdown';

const Addtodo = ({ addTask }) => {
  const [value, updateValue] = useState("");
};
const gosubmit = e => {
  e.preventDefault();
  if (value !== "") 
  {
    addTask(value)
    updateValue("");
  }
};
return (
  <form onSubmit={gosubmit}>
    <input
      type='text'
      value={value}
      placeholder="Todo Name"
      onChange={e => updateValue(e.target.value)}>
    </input>
    <input
      type='text'
      value={value}
      placeholder="Todo Description"
      onChange={e => updateValue(e.target.value)}>
    </input>
    <button type='submit'>Add Todo</button>
  </form>
);
}
const Todolist = () => {
  const addTask = text =>updatetask([...tasks,{text}]);
  const [tasks, updatetask] = useState([
    {
      in: 1,
      Name: "task1",
      Description: "my first task",
      iscompleted: false
    },
    {
      id: 2,
      Name: "task2",
      Description: "my second task",
      iscompleted: false
    }
  ]);

  const removeTodo = index => {
    const newtask = [...tasks];
    newtask.splice(index, 1);
    updatetask(newtask)
  }
  return (
    <div className='list-todo'>
      {tasks.map((task, index) => (
        <div className='todoin'>
          Name:{task.Name}<br></br>
          Description:{task.Description}<br></br>
          Status <BasicButtonExample />
          <div className='butin'>
            <button className='editb'>Edit</button>
            <button className='deleteb' onClick={() => removeTodo(index)}>Delete</button>
          </div>
        </div>
      ))};
      <Addtodo addTask={addTask} />
    </div>
  );
}

export Todolist


/* 
      <div className='box'>
        <label>Name:{}</label>
        <label>Description:{}</label>
        <label>status:<BasicButtonExample /></label>
        <button className='but1'>Edit</button>
        <button className='but2'>Delete</button>

      </div>*/