import React from "react";
import { ITodo } from "../../interfaces/interfacetodo";

// type TodoListProps = {
//   todos: any[];
// };

interface TodoListProps {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  console.log();
  if (todos.length === 0) {
    return <p>Дел пока нет</p>;
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();

    onRemove(id);
  };

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.completed) {
          classes.push("completed");
        }

        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                // onClick={() => onRemove(todo.id)}
                // onClick={onRemove.bind(null, todo.id)}
                onClick={(event) => removeHandler(event, todo.id)}
                className="material-icons red text"
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
