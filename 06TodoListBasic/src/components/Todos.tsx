import React from 'react'
import { useState } from 'react'

interface TodoItem {
    id: string;
    text: string;
    completed: boolean;
  }

function Todos() {
    const [todos, setTodos] = useState<TodoItem[]>([]);
    const [newTodo, setNewTodo] = useState('');

   const addTodo = () => {
    if (newTodo.trim() === '') return;
    const newId = crypto.randomUUID();
    const newTodoItem: TodoItem = {
      id: newId,
      text: newTodo,
      completed: false,
    };
    setTodos([...todos, newTodoItem]);  
    setNewTodo('');
  };

  const removeTodo = (id: string)=>{
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggelCompleteTodo = (id: string) => {
      const updatedTodos = todos.map(todo => 
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos); 
  };
  return (    
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4"> Yuvraj Todo List</h1>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-2 bg-gray-100 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggelCompleteTodo(todo.id)}
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <span
                className={`relative ${
                  todo.completed ? 'text-gray-500' : 'text-gray-800'
                }`}
              >
                {todo.text}
                {todo.completed && (
                  <span className="absolute inset-0 bg-blue-500 opacity-50 rounded-lg animate-pulse"></span>
                )}
              </span>
            </div>
            <button
              onClick={() => removeTodo(todo.id)}
              className="px-2 py-1 text-sm text-red-500 bg-red-100 rounded-lg hover:bg-red-200 transition"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-red-500"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 3h6m2 0h3m-14 0H4m1 0v18a2 2 0 002 2h10a2 2 0 002-2V3m-4 0v18m-4-18v18"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 11v6m4-6v6"
                />
            </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todos