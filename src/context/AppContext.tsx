import { createContext, useState } from 'react';
import { SideTabEnum } from '../utils/constants';

export const AppContext = createContext<AppContextProps | null>(null);

export const AppContextDataProvider = (
  { children }: { children: React.ReactNode },
) => {
  const [theme, setTheme] = useState<Theme>(
    window.matchMedia
      && window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches ? 'dark' : 'light'
  );
  const [tabName, setTabName] = useState<SideTabs>(SideTabEnum.Home);

  const value = {
    theme, setTheme, tabName, setTabName,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
