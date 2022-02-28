import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts/DrawerContext';

const AppRoutes = () => {
  const { toogleDrawerOpen } = useDrawerContext();
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toogleDrawerOpen}>Teste</Button>}/>
      <Route path="*" element={<Navigate to='/pagina-inicial' />} />
    </Routes>
  );
};

export default AppRoutes;