import Header from "./components/Header";
import { useState } from "react";
import Main from "./components/Main";

import { useFetchPosts } from "./hooks/useFetchPosts.ts";

export default function App() {
  const { todos, isLoading, handleRemoveTodo } = useFetchPosts();
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <div className={`${isDark && "dark"}`}>
      <div className="relative  grid min-h-screen gap-5 bg-darkBg dark:bg-lightBg">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Main
          isLoading={isLoading}
          todos={todos}
          handleRemoveTodo={handleRemoveTodo}
        />
      </div>
    </div>
  );
}
