import { useState } from "react";
import { Post } from "../App";
export const TableData: React.FC<{
  todo: Post;
  done: boolean;
}> = (props) => {
  const [done, setDone] = useState(false);
  return (
    <>
      <td className="h-4 w-4 border-r-2 border-darkSeparator">
        <button
          className="flex-center h-full w-full"
          onClick={() => setDone(!done)}
        >
          {done ? (
            <svg
              className="h-5 w-5 fill-green-500"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69L432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001" />
            </svg>
          ) : (
            <svg
              className="h-5 w-5 fill-red-500"
              viewBox="0 0 8 8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.41 0L0 1.41l.72.72L2.5 3.94L.72 5.72L0 6.41l1.41 1.44l.72-.72l1.81-1.81l1.78 1.81l.69.72l1.44-1.44l-.72-.69l-1.81-1.78l1.81-1.81l.72-.72L6.41 0l-.69.72L3.94 2.5L2.13.72z" />
            </svg>
          )}
        </button>
      </td>
      <td className="table-data">{props.todo.userId}</td>
      <td className="table-data">{props.todo.id}</td>
      <td scope="row" className="table-data font-medium">
        <input
          type="text"
          value={props.todo.title}
          disabled={done && true}
          className={`h-16 w-full bg-transparent outline-none ${
            done ? "text-green-500 line-through" : "text-red-500"
          }`}
        />
      </td>
      <td scope="row" className="h-16">
        <button className="h-full w-full text-red-500 hover:bg-darkLightBg">
          Delete
        </button>
      </td>
    </>
  );
};
