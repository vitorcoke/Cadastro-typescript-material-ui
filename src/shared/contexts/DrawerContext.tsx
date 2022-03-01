import { createContext, useContext, useCallback, useState } from 'react';

interface IDrawerContextData {
  isDrawerOpen: boolean
  toogleDrawerOpen: () => void
  drawerOptions: IDrawerOptions[]
  setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void
}
interface IDrawerOptions {
  icon: string
  path: string
  label: string
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DraweProvider: React.FC = ({ children }) => {

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);

  const toogleDrawerOpen = useCallback(() => {
    setDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOptions[]) => {
    setDrawerOptions(newDrawerOptions);
  }, []);
  

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toogleDrawerOpen, drawerOptions, setDrawerOptions: handleSetDrawerOptions }}>
      {children}
    </DrawerContext.Provider>
  );
};