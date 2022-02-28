import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import MenuLateral from './shared/components/menu-lateral/MenuLateral';
import { Drawerovider } from './shared/contexts/DrawerContext';
import { AppThemeProvider } from './shared/contexts/ThemeContext';


function App() {
  return (
    <AppThemeProvider>
      <Drawerovider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </Drawerovider>
    </AppThemeProvider >

  );
}
export default App;
