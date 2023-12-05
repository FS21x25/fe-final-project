import { createContext } from "react";

const initialTodos = ["sleep", "eat", "play"];

const TodoContext = createContext(initialTodos);

export default TodoContext;
