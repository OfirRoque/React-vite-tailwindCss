const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
  return (
    <section className="dark:bg-gray-800 py-4 px-4 flex justify-between bg-white rounded-b-md transition-all duration-1000">
      <span className="dark:text-gray-500 text-gray-400 transition-all duration-1000">
        {computedItemsLeft} items left
      </span>
      <button
        className=" transition-all duration-1000 dark:text-gray-500 text-gray-400"
        onClick={() => clearCompleted()}
      >
        Clear Complete
      </button>
    </section>
  );
};

export default TodoComputed;
