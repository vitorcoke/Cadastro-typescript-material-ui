import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import LateralMenu from './shared/components/menu-lateral/LateralMenu';
import { DraweProvider } from './shared/contexts/DrawerContext';
import { AppThemeProvider } from './shared/contexts/ThemeContext';


function App() {
  return (
    <AppThemeProvider>
      <DraweProvider>
        <BrowserRouter>
          <LateralMenu>
            <AppRoutes />
          </LateralMenu>
        </BrowserRouter>
      </DraweProvider>
    </AppThemeProvider >
  );
}
export default App;
