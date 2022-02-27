import { createTheme } from '@mui/material'
import { cyan, yellow } from '@mui/material/colors'

export const DarkTheme = createTheme({
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
            default: "#202124",
            paper: '#303134'
        }
    }
})
