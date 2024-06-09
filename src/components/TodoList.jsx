import TodoItem from "./TodoItem";
import { Droppable, Draggable } from "@hello-pangea/dnd";

const TodoList = ({ todos, removeTodo, handleClick }) => {
  return (
    <Droppable droppableId="todos">
      {(dropableProvider) => (
        <div
          ref={dropableProvider.innerRef}
          {...dropableProvider.droppableProps}
          className="dark:bg-gray-800 transition-all duration-1000 bg-white overflow-hidden rounded-t-md mt-8"
        >
          {todos.map((todo, index) => (
            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
              {(dragabbleProvided) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  handleClick={handleClick}
                  removeTodo={removeTodo}
                  ref={dragabbleProvided.innerRef}
                  {...dragabbleProvided.dragHandleProps}
                  {...dragabbleProvided.draggableProps}
                />
              )}
            </Draggable>
          ))}
          {/* Espacio reservado */}
          {dropableProvider.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TodoList;
