import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts/DrawerContext';

const AppRoutes = () => {
  const { toogleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() =>{
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Pagina Inicial'
      },
    ]);
  },[]);


  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toogleDrawerOpen}>Teste</Button>} />
      <Route path="*" element={<Navigate to='/pagina-inicial' />} />
    </Routes>
  );
};

export default AppRoutes;