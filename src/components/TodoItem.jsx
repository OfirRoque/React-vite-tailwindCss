import React from "react";
import Check from "./icons/Check";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = React.forwardRef(
  ({ todo, handleClick, removeTodo, ...props }, ref) => {
    const { id, title, completed } = todo;
    return (
      <article
        ref={ref}
        {...props}
        className=" flex gap-4 py-4 border-b border-b-gray-400 dark:border-gray-600  px-4 "
      >
        {/* <button className="rounded-full border-2 inline-block 
      </button> */}

        <button
          onClick={() => handleClick(id)}
          className={`${completed ? "dark:border-gray-400 rounded-full border-2  h-6 w-6 flex-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... flex justify-center items-center transition-all duration-1000" : "dark:border-gray-400  flex-none h-6 w-6 rounded-full border-2  transition-all duration-1000"}`}
        >
          {completed && <Check />}
        </button>
        <p
          className={` grow transition-all duration-1000 text-gray-500 ${completed && "line-through dark:text-gray-600 "}`}
        >
          {title}
        </p>
        <button className="flex-none" onClick={() => removeTodo(id)}>
          <CrossIcon />
        </button>
      </article>
    );
  }
);

export default TodoItem;
