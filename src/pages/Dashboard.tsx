import {
  Accounts,
  Home,
  NavSection,
  FundTransfer,
  SyncWithBank,
  TransactionHistory,
  UserInformation,
} from "../components/dashboard";
import { useAppContext } from "../hooks";

export default function Dashboard() {
  const { tabName } = useAppContext();

  
  const userDetails = {
    firstName: 'Oluwatobi',
    lastName: 'Samuel',
    picture: null,
    email: 'itsoluwatobby@gmail.com',
    cardNumber: '5542 4129 1787 8765',
    expires: '10/28',
  };
  
  const Pages: Record<SideTabs, JSX.Element> = {
    Home: <Home user={userDetails} />,
    Accounts: <Accounts user={userDetails} />,
    'Transfer Funds': <FundTransfer user={userDetails} />,
    'Sync With Bank': <SyncWithBank user={userDetails} />,
    'Transaction History': <TransactionHistory user={userDetails} />,
  }

  return (
    <div className='h-full w-full flex'>
      <NavSection user={userDetails} />
      {Pages[tabName]}
      <UserInformation user={userDetails} />
    </div>
  )
}