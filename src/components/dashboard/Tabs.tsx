import { IconType } from 'react-icons';

type ButtonTabsProps = {
  name: string;
  Icon: IconType;
  handleCLick: () => void;
  openSideTab: boolean;
}

export default function ButtonTabs({ name, Icon, handleCLick, openSideTab }: ButtonTabsProps) {
  return (
    <button
    className='w-full p-4 flex items-center gap-2 rounded-md focus:text-white focus:bg-blue-500 focus:shadow-md hover:scale-[1.002] transition-all text-sm relative'
    onClick={handleCLick}
    >
      <Icon className={`text-xl ${openSideTab ? '' : 'maxScreen:absolute maxScreen:right-3 maxScreen:text-2xl'}`} />
      <span className={`${openSideTab ? '' : 'maxScreen:hidden'}`}>{name}</span>
    </button>
  )
}