import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Form';
import Todolist from './TodoList';


function App() {
  
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState(["All"])
  const [filteredTodos,setFilteredTodos]= useState ([""])

  const filteredHandler = () => {
    switch(status)
    {case "completed" :
  setFilteredTodos (todos.filter(todo=> todo.completed === true));
  break;
  case "uncompleted" :
  setFilteredTodos (todos.filter(todo=> todo.completed === false));
break;
default: 
setFilteredTodos(todos);
break;
}

}
useEffect(() => {
  getLocalTodos(); 
},[]); 
useEffect(() => {
filteredHandler();  
saveLocalTodos();
},[todos, status])

const saveLocalTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos))};
const getLocalTodos = () => {
if (localStorage.getItem("todos",)=== null) {
  localStorage.setItem("todos", JSON.stringify([]));
} else {
  let todoLocal = JSON.parse(localStorage.getItem("todos"))
setTodos(todoLocal);
}
};
  
  return (
    <div className="container">
      <header>
        <h2>GRGA Issue Tracker</h2>
        
      </header>
     <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
     <Todolist todos={todos} filteredTodos={filteredTodos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
