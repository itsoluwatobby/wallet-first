import { FaPlus } from "react-icons/fa6";
import { MetaTags } from "../../../layout/OGgraph"
import { helper } from "../../../utils"
import { Card } from "../../Card";

type AccountsProps = {
  user: User;
}
export const Accounts = ({ user }: AccountsProps) => {
  
  return (
    <section className="page-fade-in customScrollBar overflow-y-scroll flex-auto flex flex-col gap-y-3 p-5 h-full">
      <MetaTags
        title='Account Page'
        description=''
        url=''
        image=''
      />

      <div className="w-full h-full flex flex-col gap-y-12">
        <article className="w-full h-20 rounded-md bg-gradient-to-tr from-orange-400 to-pink-400 relative">
          <figure className="absolute -bottom-12 left-8 rounded-full bg-gray-200 flex items-center justify-center p-1 w-[6rem] h-[6rem] shadow-sm border-4 border-orange-200">
            {
              user.picture ?
                <img src={user.picture} alt="" className='w-full h-full object-cover rounded-full' />
                : <span className='text-6xl'>{helper.getFirstLetter(user.firstName)}</span>
            }
          </figure>
        </article>

        <div className="flex flex-col p-3">
          <p className="flex flex-col font-medium">
            <span className="first-letter:text-4xl text-base">{helper.reduceTextLength(helper.getFullName(user), 20)}</span>
            <span className="font-normal text-gray-600 text-sm">{helper.reduceTextLength(user.email, 25)}</span>
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
      </div>
    </section>
  )
}