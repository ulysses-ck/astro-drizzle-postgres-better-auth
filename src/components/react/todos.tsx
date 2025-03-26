import {useEffect, useState} from "react";

export default function Todos() {
    const [todos, setTodos] = useState<{id: number, title: string, content: string, createdAt: Date, updatedAt: Date}[]>([]);
    const [newTodo, setNewTodo] = useState({title: "", content: ""})
    const handleOnSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch("/api/todo.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: (Math.random() * 10).toFixed(0).toString(),
                title: newTodo.title,
                content: newTodo.content
            })
        })
        const data = await response.json();
        setTodos([...todos, data]);
    }

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch("/api/todo.json");
            const data = await response.json();
            setTodos(data);
        }
        fetchTodos();
    }, [])
    return (
        <div>
            <div>
            <input type="text" name="title" id="title" onChange={(e) => setNewTodo({...newTodo, title: e.target.value})}/>
            <input type="text" name="content" id="content" onChange={(e) => setNewTodo({...newTodo, content: e.target.value})}/>
            <button type="submit" onClick={handleOnSubmit}>Add Todo</button>
            </div>

            <div>
                <h2>Todo List</h2>
                {todos.map((todo) => (
                    <div key={todo.id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}