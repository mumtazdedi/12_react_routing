import React, { useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Todo from '../../components/Todo';

const Home = () => {
    const [todos, setTodos] = useState([]);

    const handleDelete = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        console.log("Success Delete id = " + id)
    }

    const handleCheck = (id) => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(newTodos);
        console.log("Success Check id = " + id)
    }
    return (
        <>
            <div className='padding'>
                <Title />
                <Input setTodos={setTodos} />
                {
                    todos.map((todo, index) => {
                        return <Todo key={index} todo={todo} handleDelete={handleDelete} handleCheck={handleCheck} />
                    })
                }
            </div>
        </>
    );
}

export default Home;
