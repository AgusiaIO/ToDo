import Post from "../App";
import { TableData } from "./TableData";

export const Main: React.FC<{
  todos: Post[];
  setTodos: (todo: []) => void;
}> = (props) => {
  // props.todos.map((todo) => console.log(todo.userId));
  return (
    <main className="container text-grayWhite">
      <table className="w-full overflow-hidden rounded-t-xl text-left">
        <thead className="bg-darkLighterBg uppercase">
          <tr>
            <th scope="col" className="table-heading">
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.018 3.815L15.232 8h-4.966l.716-3.815l-1.964-.37L8.232 8H4v2h3.857l-.751 4H3v2h3.731l-.714 3.805l1.965.369L8.766 16h4.966l-.714 3.805l1.965.369l.783-4.174H20v-2h-3.859l.751-4H21V8h-3.733l.716-3.815zM14.106 14H9.141l.751-4h4.966z" />
              </svg>
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
        <tbody className="text-grayWhite">
          {props.todos.map((todo: typeof Post) => (
            <tr key={todo.id} className="bg-black/[5%]">
              <TableData todo={todo} />
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
export default Main;
