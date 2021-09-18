import { useState, useEffect } from "react";
import { themes } from "../resource/contants";
import { isEmptyString } from "../utils";

const useDarkTheme = () => {
    const [theme, setTheme] = useState(themes.LIGHT);

    useEffect(() => {
        if (!isEmptyString(localStorage.getItem('ToDoTheme'))) {
            setTheme(localStorage.getItem('ToDoTheme'));
        }
        
    }, []);

    useEffect(() => localStorage.setItem('ToDoTheme', theme === themes.LIGHT ? themes.LIGHT : themes.DARK), [theme]);

    const themeToggler = () => setTheme(theme === themes.LIGHT ? themes.DARK : themes.LIGHT);

    return [theme, themeToggler];

}

export default useDarkTheme;