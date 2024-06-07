import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, handleClick }) => {
  return (
    <div className="bg-white rounded-t-md mt-8">
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
