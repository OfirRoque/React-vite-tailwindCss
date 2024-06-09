import Check from "./icons/Check";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({ todo, handleClick, removeTodo }) => {
  const { id, title, completed } = todo;
  return (
    <article className=" flex gap-4 py-4 border-b border-b-gray-400 dark:border-gray-600 py-4 px-4 ">
      {/* <button className="rounded-full border-2 inline-block 
      </button> */}

      <button
        onClick={() => handleClick(id)}
        className={`${completed ? "dark:border-gray-400 rounded-full border-2 inline-block h-6 w-6 flex-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... flex justify-center items-center transition-all duration-1000" : "dark:border-gray-400  flex-none h-6 w-6 rounded-full border-2 inline-block transition-all duration-1000"}`}
      >
        {completed && <Check />}
      </button>
      <p
        className={` grow transition-all duration-1000 dark:text-white ${completed && "line-through text-gray-400  dark:text-gray-600 transition-all duration-1000"}`}
      >
        {title}
      </p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;
