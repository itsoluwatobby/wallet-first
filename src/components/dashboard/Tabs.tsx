import { IconType } from 'react-icons';

type ButtonTabsProps = {
  name: string;
  Icon: IconType;
  handleCLick: () => void;
  openSideTab: boolean;
  tabName: SideTabs;
}

export default function ButtonTabs(
  { name, Icon, handleCLick, openSideTab, tabName }: ButtonTabsProps) {
  return (
    <button
    title={name}
    className={`w-full p-4 flex items-center gap-2 rounded-md ${tabName === name ? 'bg-orange-400 text-white shadow-md' : ''} hover:scale-[1.002] transition-all text-sm relative`}
    onClick={handleCLick}
    >
      <Icon className={`text-xl ${openSideTab ? '' : 'maxScreen:absolute maxScreen:right-3 maxScreen:text-2xl'}`} />
      <span className={`${openSideTab ? '' : 'maxScreen:hidden'}`}>{name}</span>
    </button>
  )
}
