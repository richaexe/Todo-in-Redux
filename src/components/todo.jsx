import { useSelector } from 'react-redux';
import AddForm from './AddForm';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todo/TodoSlice';

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch()
    const handlerClick = (id) => {
        dispatch(deleteTodo(id))
    }
    return (
        <div>
            <AddForm />
            <h3>Todos</h3>
            <ul>
                {todos.map((todo) => (<li key={todo.id}>{todo.task}<button onClick={() => handlerClick(todo.id)}>Delete</button></li>))}
            </ul>
        </div>
    )
}