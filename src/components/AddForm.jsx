import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/TodoSlice"

export default function AddForm() {
    let [task, setTask] = useState("")
    const dispatch = useDispatch()

    const handlerSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(task))
        setTask("")
    }
    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <input type="text" onChange={(e) => setTask(e.target.value)} />
                <button>Add</button>
            </form>
        </div>
    )
}