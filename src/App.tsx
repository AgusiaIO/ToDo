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
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setTodos(data);
        // setLoading(false);
      } catch (error) {
        console.error(`Error: ${error}`);
        // setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="relative grid gap-5">
      <Header />
      <Main todos={todos} setTodos={setTodos} />
    </div>
  );
}
