/// <reference types="types.d.ts" />

type SideTabs = 'Home' | 'Accounts' | 'Transfer Funds' | 'Transaction History' | 'Sync With Bank'
type Theme = 'light' | 'dark'
type AppContextProps = {
  theme: Theme;
  tabName: SideTabs;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  setTabName: React.Dispatch<React.SetStateAction<SideTabs>>;
}

