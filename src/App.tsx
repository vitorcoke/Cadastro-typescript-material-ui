import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import MenuLateral from './shared/components/menu-lateral/MenuLateral';
import { AppThemeProvider } from './shared/contexts/ThemeContext';
import { Drawerovider } from './shared/contexts/DrawerContext';


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

    </AppThemeProvider>

  );
}

export default App;
