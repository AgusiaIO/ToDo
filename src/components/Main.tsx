import TableData from "./TableData";
import React from "react";
import { Post } from "../types.ts";
import { CircleIcon, HashTagIcon } from "../assets";

interface MainProps {
  isLoading: boolean;
  todos: Post[];
  handleRemoveTodo: (todoId: number) => void;
}

const Main: React.FC<MainProps> = ({ isLoading, todos, handleRemoveTodo }) => {
  return (
    <main className="container text-grayWhite dark:text-lightDarker">
      {isLoading ? (
        <div role="status">
          <CircleIcon className="flex-center h-52 w-full animate-spin fill-red-500 text-darkSeparator dark:text-lightSeparator" />
        </div>
      ) : (
        <table className="w-full overflow-hidden rounded-t-xl text-left">
          <thead className="bg-darkLighter uppercase dark:bg-lightLighter">
            <tr>
              <th scope="col" className="table-heading">
                <HashTagIcon className="h-5 w-5 fill-current" />
              </th>
              <th scope="col" className="table-heading w-16">
                ID
              </th>
              <th scope="col" className="table-heading w-28">
                User ID
              </th>
              <th scope="col" className="table-heading">
                Todo text
              </th>
              <th scope="col" className="table-heading">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="text-grayWhite dark:text-lightDarker">
            {todos.map((todo: Post) => (
              <tr key={todo.id} className="bg-darkLight dark:bg-white/[10%]">
                <TableData todo={todo} handleRemoveTodo={handleRemoveTodo} />
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
};
export default Main;
