import ButtonTabs from "./Tabs";
import { PiMoney } from "react-icons/pi";
import { HiOutlineHome } from "react-icons/hi";
import { IoWalletSharp } from "react-icons/io5";
import { AiOutlineTransaction, AiOutlineLogout } from "react-icons/ai";
import { MdOutlineAccountTree, MdOutlineAccountBalance } from "react-icons/md";
import { LuPanelLeftOpen, LuPanelRightOpen } from "react-icons/lu";
import { useState } from "react";
import { useAppContext, useLogout } from "../../hooks";
import { IconType } from "react-icons";
import { SideTabEnum, helper } from "../../utils";

type NavSectionProps = {
  user: User;
}
export const NavSection = ({ user }: NavSectionProps) => {
  const logout = useLogout();
  const [openSideTab, setOpenSideTab] = useState<boolean>(false);
  const { tabName, setTabName } = useAppContext();

  const buttonTabs: { name: SideTabs, Icon: IconType }[] = [
    { name: SideTabEnum.Home, Icon: HiOutlineHome },
    { name: SideTabEnum.Accounts, Icon: MdOutlineAccountTree },
    { name: SideTabEnum.Transfer, Icon: AiOutlineTransaction },
    { name: SideTabEnum.Transaction, Icon: PiMoney },
    { name: SideTabEnum.Sync, Icon: MdOutlineAccountBalance },
  ]

  const sideTabClass = 'absolute right-1 top-3 text-xl cursor-pointer hidden maxScreen:block maxMobile:hidden';

  return (
    <section className={`h-full w-fit flex-none ${openSideTab ? '' : 'maxScreen-translate-x-[8.5rem] maxScreen:w-14'} items-center duration-300 transition-transform flex flex-col justify-between shadow-lg p-1 pb-4`}>
      <div className='w-full px-1 flex flex-col gap-y-6 text-sm relative'>
        {
          openSideTab ?
            <LuPanelRightOpen
              title="close tab"
              className={sideTabClass}
              onClick={() => setOpenSideTab(false)}
            />
            :
            <LuPanelLeftOpen
              title='open tab'
              className={sideTabClass}
              onClick={() => setOpenSideTab(true)}
            />
        }

        <IoWalletSharp className="hidden maxMobile:block ml-2 my-3 text-blue-800 text-center text-2xl" />

        <h1 className={`${openSideTab ? '' : 'maxScreen:hidden'} font-bold flex items-center text-xl gap-1.5 p-2`}>
          <IoWalletSharp className="text-blue-800 maxMobile:block" />
          <span className={``}>Wallet First</span>
        </h1>

        <div className={`w-full flex flex-col gap-y-2 ${openSideTab ? '' : 'maxScreen:mt-20 maxMobile:mt-0 maxScreen:gap-y-6'} text-sm`}>
          {
            buttonTabs.map(tab => (
              <ButtonTabs
                key={tab.name}
                name={tab.name}
                Icon={tab.Icon}
                tabName={tabName}
                handleCLick={() => setTabName(tab.name)}
                openSideTab={openSideTab}
              />
            ))
          }
        </div>
      </div>

      <div className="cursor-pointer rounded-md hover:shadow-md hover:bg-gray-100 p-1 w-fit flex gap-1 items-center shadow-sm">
        <div
          title='profile'
          onClick={() => setTabName(SideTabEnum.Accounts)}
          className={`flex-auto flex gap-1 items-center ${openSideTab ? '' : 'maxScreen:hidden'}`}>
          <figure className="rounded-full bg-gray-200 flex items-center justify-center p-1 w-[2.8rem] h-[2.8rem] shadow-sm">
            {
              user.picture ?
                <img src={user.picture} alt="" className='w-full h-full object-cover rounded-full' />
                : <span className='font-medium text-4xl'>{helper.getFirstLetter(user.firstName)}</span>
            }
          </figure>

          <p className="flex flex-col text-[12px]">
            <span>{user.firstName}</span>
            <span>{helper.reduceTextLength(user.email, 13)}</span>
          </p>
        </div>

        <AiOutlineLogout
          title='logout'
          onClick={logout}
          className='flex-none text-3xl bg-gray-200 p-1 cursor-pointer rounded-md'
        />
      </div>
    </section>
  )
}
