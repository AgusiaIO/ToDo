import { Post } from "../App";
import { TableData } from "./TableData";

export const Main: React.FC<{
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  todos: Post[];
  setTodos: (todo: []) => void;
  handleRemoveTodo: (todoId: number) => void;
}> = (props) => {
  // props.todos.map((todo) => console.log(todo.userId));
  return (
    <main className="dark:text-lightDarker container text-grayWhite">
      {props.isLoading ? (
        <div role="status">
          <svg
            aria-hidden="true"
            className="flex-center dark:text-lightSeparator h-52 w-full animate-spin fill-red-500 text-darkSeparator"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      ) : (
        <table className="w-full overflow-hidden rounded-t-xl text-left">
          <thead className="bg-darkLighter dark:bg-lightLighter uppercase">
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

          <tbody className="dark:text-lightDarker text-grayWhite">
            {props.todos.map((todo: Post) => (
              <tr key={todo.id} className=" bg-darkLight dark:bg-white/[10%]">
                <TableData
                  todo={todo}
                  handleRemoveTodo={props.handleRemoveTodo}
                />
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
};
export default Main;
