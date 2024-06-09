import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, handleClick }) => {
  return (
    <div className="dark:bg-gray-800 transition-all duration-1000 bg-white overflow-hidden rounded-t-md mt-8">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleClick={handleClick}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
