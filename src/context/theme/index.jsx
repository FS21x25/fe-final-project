import { createContext } from "react";

const initialValue = "light"; // light or dark

const ThemeContext = createContext(initialValue);

export default ThemeContext;
