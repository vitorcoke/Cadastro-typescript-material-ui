import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts";

const AppRoutes = () => {
    const { toogleTheme } = useAppThemeContext()
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toogleTheme}>Teste</Button>} />
            <Route path="*" element={<Navigate to='/pagina-inicial' />} />
        </Routes>
    )
}

export default AppRoutes