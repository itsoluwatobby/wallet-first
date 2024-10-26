import { FaPlus } from "react-icons/fa6";
import { helper } from "../../utils";
import { Card } from "../Card";

type UserInformationProps = {
  user: User;
}

export const UserInformation = ({ user }: UserInformationProps) => {

  return (
    <section className="hidden w-80 h-full mdXl:flex flex-col gap-y-6">
      <article className="w-full h-20 bg-gradient-to-tr from-orange-400 to-pink-400 relative">
        <figure className="absolute -bottom-6 left-4 rounded-full bg-gray-200 flex items-center justify-center p-1 w-[2.8rem] h-[2.8rem] shadow-sm border-2 border-orange-200">
          {
            user.picture ?
              <img src={user.picture} alt="" className='w-full h-full object-cover rounded-full' />
              : <span className='font-medium text-4xl'>{helper.getFirstLetter(user.firstName)}</span>
          }
        </figure>
      </article>

      <div className="flex flex-col p-3">
        <p className="flex flex-col font-medium text-[12px]">
          <span>{helper.reduceTextLength(helper.getFullName(user), 20)}</span>
          <span className="font-normal text-gray-600">{helper.reduceTextLength(user.email, 25)}</span>
        </p>

        <div className='flex flex-col mt-6 gap-y-7'>
          <p className="flex items-center justify-between text-xs">
            <span><b>Accounts</b></span>
            <button className="flex items-center text-gray-700 rounded-full px-1 py-0.5 border shadow active:scale-[1.01] transition-transform focus:border-none outline-none">
              <FaPlus />
              <span>Add bank</span>
            </button>
          </p>

          <Card user={user} />
        </div>

      </div>
    </section>
  )
}
