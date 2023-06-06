import React, { useState } from 'react'

export default function AddTask({ addToList }) {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addToList(title);
            setTitle('');
            setMessage('')
        } else {
            setMessage('Please enter a valid task.')
        }

    }
    return (
        <>
            <form className='flex' onSubmit={handleSubmit}>
                <input type='text' placeholder='Add a task' value={title} onChange={handleChange} />
                <button>Add</button>
            </form>
            <span>{message}</span>
        </>
    )
}
