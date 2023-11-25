//import logo from './logo.svg';
import './App.css';
import Todolist from './Full';
import BasicButtonExample from './Dropdown';

function App() {
  return (
    <div className="App">
      <div className='title1'>My todo</div>
      <div className='getinp'>
        <input className='input1' type='text' placeholder='Todo Name' />
        <input className='input1' type='text' placeholder='Todo Description' />
        <button className='intbutton'>Add Todo</button>
      </div>
      <div className='subtit'>
        <h4 className='title2'>My Todos</h4>
        <h4 className='title3'>Status Filter : <BasicButtonExample /></h4>
      </div>
      <Todolist />
    </div>
  );
}

export default App;
