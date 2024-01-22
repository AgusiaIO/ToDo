import React, { useState } from "react";
import { Post } from "../types.ts";
import { CancelIcon, DoneIcon } from "../assets";

interface TableDataProps {
  todo: Post;
  handleRemoveTodo: (todoId: number) => void;
}

const TableData: React.FC<TableDataProps> = ({ todo, handleRemoveTodo }) => {
  const [done, setDone] = useState(false);
  const [todoText, setTodoText] = useState(todo.title);

  return (
    <>
      <td className="h-4 w-4 border-r-2 border-darkSeparator dark:border-lightLighter">
        <button
          className="flex-center h-full w-full"
          onClick={() => setDone(!done)}
        >
          {done ? (
            <DoneIcon className="h-5 w-5 fill-green-500" />
          ) : (
            <CancelIcon className="h-5 w-5 fill-red-500" />
          )}
        </button>
      </td>
      <td className="table-data text-center">{todo.id}</td>
      <td className="table-data text-center">{todo.userId}</td>
      <td scope="row" className="table-data font-medium">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          disabled={done && true}
          className={`h-16 w-full bg-transparent outline-none ${
            done ? "text-green-500 line-through" : "text-red-500"
          }`}
        />
      </td>
      <td scope="row" className="h-16">
        <button
          className="h-full w-full text-red-500 hover:bg-darkBg dark:hover:bg-lightBg"
          onClick={() => handleRemoveTodo(todo.id)}
        >
          Delete
        </button>
      </td>
    </>
  );
};

export default TableData;
