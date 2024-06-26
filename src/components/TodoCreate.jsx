import { useState } from "react";

const TodoCreate = ({ handleCreateTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return setTitle("");
    }
    handleCreateTodo(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8 dark:bg-gray-800 transition-all duration-1000"
    >
      <span className="rounded-full border-2 inline-block h-6 w-6 dark:bg-gray-800 border-gray-400 transition-all duration-1000"></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full text-gray-400 outline-none dark:bg-gray-800 transition-all duration-1000"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate;
