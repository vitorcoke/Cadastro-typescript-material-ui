import { createContext,useContext,useMemo, useCallback, useState  } from "react";
import { ThemeProvider } from "@mui/material";
import { DarkTheme, LightTheme } from "../themes";
import { Box } from "@mui/system";


interface IThemeContextData {
    themeName: 'light' | 'dark',
    toogleTheme: () => void
}

const ThemeContext = createContext({} as IThemeContextData)

export const useAppThemeContext = () => {
    return useContext(ThemeContext)
}

export const AppThemeProvider: React.FC = ({ children }) => {

    const [themeName, setThemeName] = useState<'light' | 'dark'>('light')

    const toogleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light')
    }, [])

    const theme = useMemo(() => {
        if (themeName === 'light') return LightTheme
        return DarkTheme
    }, [themeName])

    return (
        <ThemeContext.Provider value={{ themeName, toogleTheme }}>
            <ThemeProvider theme={theme}>
                <Box width='100vw' height='100vh' bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}