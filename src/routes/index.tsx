import { Routes, Route, Navigate } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/pagina-inicial" element={<p>Pagina Inicial</p>} />
            <Route path="*" element={<Navigate to='/pagina-incial'/>} />
        </Routes>
    )
}

export default AppRoutes