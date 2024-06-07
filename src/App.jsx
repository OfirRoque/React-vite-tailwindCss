import ImageBg from "./assets/images/bg-mobile-light.jpg";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useState, useEffect } from "react";

const InitialStateTodo = [
  { id: 1, title: "Ver porno", completed: true },
  { id: 2, title: "Ver Netflix", completed: true },
  { id: 3, title: "Ver Potos", completed: true },
  { id: 4, title: "Ir al gim", completed: true },
  { id: 5, title: "Trabajar", completed: false },
];

const App = () => {
  const [todos, setTodos] = useState(InitialStateTodo);
  const handleCreateTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((e) => e.id !== id));
  };

  const handleClick = (id) => {
    setTodos(
      todos.map((e) => (e.id === id ? { ...e, completed: !e.completed } : e))
    );
  };

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((e) => !e.completed));
  };

  return (
    <div
      className={`bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen`}
    >
      <Header />
      <main className="container mx-auto px-4 mt-8">
        <TodoCreate handleCreateTodo={handleCreateTodo} />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          handleClick={handleClick}
        />
        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />
        <TodoFilter />
      </main>

      <footer className="text-center mt-8">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
