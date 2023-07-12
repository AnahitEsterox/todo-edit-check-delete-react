import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header";
import Form from "./components/Form";
import {useEffect, useState} from "react";
import TodoList from "./components/TodoList";

function App() {
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState(initialState);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);
  return (
    <div className="App">
        <div className='container'>
            <Header />
            <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                setEditTodo={setEditTodo}
            />
        </div>
    </div>
  );
}

export default App;
