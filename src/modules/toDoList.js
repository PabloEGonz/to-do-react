import ToDoItem from './ToDoItem';

export default function ToDoList({ tasks, setTasks, deleteTask, setUpdate }) {
    return (
        <ul className='flex'>
            {tasks.map((task) => (<ToDoItem key={task.id} tasks={task} setTasks={setTasks} deleteTask={deleteTask} setUpdate={setUpdate} />))}
        </ul>
    )
}
