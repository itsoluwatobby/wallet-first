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

  const Pages: Record<SideTabs, JSX.Element> = {
    Home: <Home />,
    Accounts: <Accounts />,
    'Transfer Funds': <FundTransfer />,
    'Sync With Bank': <SyncWithBank />,
    'Transaction History': <TransactionHistory />,
  }

  const userDetails = {
    firstName: 'Oluwatobi',
    lastName: 'Samuel',
    picture: null,
    email: 'itsoluwatobby@gmail.com',
    cardNumber: '5542 4129 1787 8765',
    expires: '10/28',
  };

  return (
    <div className='h-full w-full flex'>
      <NavSection user={userDetails} />
      {Pages[tabName]}
      <UserInformation user={userDetails} />
    </div>
  )
}