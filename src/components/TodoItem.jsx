import Check from "./icons/Check";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({ todo, handleClick, removeTodo }) => {
  const { id, title, completed } = todo;
  return (
    <article className="flex gap-4 py-4 border-b border-b-gray-400 py-4 px-4">
      {/* <button className="rounded-full border-2 inline-block 
      </button> */}

      <button
        onClick={() => handleClick(id)}
        className={`${completed ? "rounded-full border-2 inline-block h-6 w-6 flex-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... flex justify-center items-center" : "flex-none h-6 w-6 rounded-full border-2 inline-block"}`}
      >
        {completed && <Check />}
      </button>
      <p className={` grow ${completed && "line-through text-gray-400"}`}>{title}</p>
      <button className="flex-none" onClick={() => removeTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;
