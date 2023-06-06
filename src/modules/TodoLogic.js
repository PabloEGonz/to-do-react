import React, { useState, useEffect } from 'react'
import ToDoList from './toDoList'
import AddTask from './AddTask';
import { v4 as uuidv4 } from 'uuid';

export default function TodoLogic() {
    const getTasks = () => {
        const tasks = localStorage.getItem('tasks');
        return JSON.parse(tasks) || [];
    }
    const [tasks, setTasks] = useState(getTasks());
    useEffect(() => {
        const array = JSON.stringify(tasks);
        localStorage.setItem('tasks', array);
    }, [tasks]);
    const deleteTask = (id) => {
        setTasks([
            ...tasks.filter((task) => task.id !== id)
        ])
    }
    const addToList = (title) => {
        const newTask = {
            id: uuidv4(),
            title: title,
            completed: false,
        }
        setTasks([...tasks, newTask]);
    }
    const setUpdate = (updateTitle, id) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    task.title = updateTitle;
                }
                return task;
            })
        )
    }
    return (
        <div>
            <AddTask addToList={addToList} />
            <ToDoList tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} setUpdate={setUpdate} /> </div>
    )
}
