import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
    toggleTheme: () => void
    theme: Theme
}


export function useTheme() : UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)
    const toggleTheme = () => {
        let themeMode: Theme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(themeMode)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, themeMode)
    }

    return {theme, toggleTheme}

}