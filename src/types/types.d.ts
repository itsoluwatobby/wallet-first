/// <reference types="types.d.ts" />

type CurrencyType = 'EURO' | 'NAIRA' | 'DOLLAR';

type SideTabs = 'Home' | 'Accounts' | 'Transfer Funds' | 'Transaction History' | 'Sync With Bank'
type Theme = 'light' | 'dark'
type AppContextProps = {
  theme: Theme;
  tabName: SideTabs;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  setTabName: React.Dispatch<React.SetStateAction<SideTabs>>;
}

type User = {
  firstName: string;
  lastName: string;
  picture: null;
  email: string;
  cardNumber: string;
  expires: string;
}

type TransactionPropType = {
  id: number;
  title: string;
  type: string;
  status: string;
  date: string;
  value: number;
  currency: CurrencyType;
  channel: string;
  category: string;
}
