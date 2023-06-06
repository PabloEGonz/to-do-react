import React, { useState } from 'react'

export default function ToDoItem({ tasks, setTasks, deleteTask, setUpdate }) {
    const complete = (id) => {
        setTasks((prevState) =>
            prevState.map((task) => {
                if (task.id === id) {
                    return {
                        ...tasks,
                        completed: !tasks.completed,
                    }
                }
                return task;
            })
        )
    }
    const [edit, setEdit] = useState(false);
    const editing = () => {
        setEdit(true);
    }
    let viewmode = 'flex list';
    let editmode = 'task';
    let crossed = tasks.completed ? 'complete' : '';
    if (edit) viewmode = 'hide';
    else editmode = 'hide';
    const save = (e) => {
        if (e.key === 'Enter') {
            setEdit(false);
        }
    };
    return (
        <li>
            <div className={viewmode}>
                <input type='checkbox' checked={tasks.completed} onChange={() => complete(tasks.id)} />
                <p className={crossed}>{tasks.title}</p>
                <div className='flex buttons'>
                    <button onClick={editing}>Edit</button>
                    <button onClick={() => deleteTask(tasks.id)}>Delete</button>
                </div>
            </div>
            <input className={editmode} type='text' value={tasks.title} onChange={(e) => setUpdate(e.target.value, tasks.id)} onKeyDown={save} />
        </li >
    )
}
