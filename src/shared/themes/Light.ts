import { createTheme } from '@mui/material'
import { cyan, yellow } from '@mui/material/colors'

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: yellow[700],
            dark: yellow[600],
            light: yellow[500],
            contrastText: '#fff'
        },
        secondary: {
            main: cyan[700],
            dark: cyan[600],
            light: cyan[500],
            contrastText: '#fff'
        },
        background: {
            default: "#f7f8f3",
            paper: '#fff'
        }
    }
})
