import Header from "./components/Header";
import { useEffect, useState } from "react";
import Main from "./components/Main";
export interface Post {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export default function App() {
  const [todos, setTodos] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setTodos(data);
        setIsLoading(false);
      } catch (error) {
        console.error(`Error: ${error}`);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleRemoveTodo = (todoId: number) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  return (
    <div className={`${isDark && "dark"}`}>
      <div className="dark:bg-lightBg  relative grid min-h-screen gap-5 bg-darkBg">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Main
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          todos={todos}
          setTodos={setTodos}
          handleRemoveTodo={handleRemoveTodo}
        />
      </div>
    </div>
  );
}
