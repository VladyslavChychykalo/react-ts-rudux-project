import React, { useState } from "react";

interface TodoFromProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFromProps> = ({ onAdd }) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <div className="input-filed mt2">
      <label htmlFor="title" className="active">
        Type Todo
      </label>
      <input
        type="text"
        id="title"
        placeholder="Type Todo"
        value={title}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
    </div>
  );
};

export default TodoForm;
