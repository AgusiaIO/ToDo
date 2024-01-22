import { useEffect, useState } from "react";
import { Post } from "../types.ts";

export const useFetchPosts = () => {
  const [todos, setTodos] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleRemoveTodo = (todoId: number) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

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
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { todos, isLoading, handleRemoveTodo };
};
