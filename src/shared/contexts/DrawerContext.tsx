import { createContext, useContext, useCallback, useState } from 'react';

interface IDrawerContextData {
  isDrawerOpen: boolean,
  toogleDrawerOpen: () => void
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const Drawerovider: React.FC = ({ children }) => {

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toogleDrawerOpen = useCallback(() => {
    setDrawerOpen(oldDrawerOpen => !oldDrawerOpen );
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toogleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};