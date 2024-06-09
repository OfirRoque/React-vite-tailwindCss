import { DragDropContext, Draggable } from "@hello-pangea/dnd";
import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useState, useEffect } from "react";

const InitialStateTodo = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const App = () => {
  const [todos, setTodos] = useState(InitialStateTodo);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const filteresTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((e) => !e.completed);
      case "completed":
        return todos.filter((e) => e.completed);
      default:
        return todos;
    }
  };

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  const hadleDragEnd = (result) => {
    const { destination, source } = result;
    if(!destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return;
    setTodos((prevTasks) =>
      reorder(prevTasks, source.index, destination.index)
    );
  };

  return (
    <div
      className={`bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen dark:bg-gray-900 transition-all duration-1000 md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]`}
    >
      <Header />
      <main className="container mx-auto px-4 mt-8 md:max-w-xl">
        <TodoCreate handleCreateTodo={handleCreateTodo} />
        <DragDropContext onDragEnd={hadleDragEnd}>
          <TodoList
            todos={filteresTodos()}
            removeTodo={removeTodo}
            handleClick={handleClick}
          />
        </DragDropContext>
        <TodoComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />
        <TodoFilter filter={filter} changeFilter={changeFilter} />
      </main>

      <footer className="text-center mt-8 dark:text-gray-500">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default App;
