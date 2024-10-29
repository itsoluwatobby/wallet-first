import { helper } from "../utils";
import { PiWebhooksLogoLight } from "react-icons/pi";

type CardProps = {
  user: User
}

export const Card = ({ user }: CardProps) => {

  return (
    <article className="rounded-xl max-w-80 text-xs p-3 h-40 bg-gradient-to-tr from-orange-200 from-[20%] via-pink-100 to-orange-300 shadow-sm relative flex  flex-col justify-between">
      <PiWebhooksLogoLight 
      className="absolute right-2 text-xl"
      />

      <div className="flex flex-col p-2">
        <span className="font-semibold">Debit</span>
      </div>

      <span className="three-d-text" data-text='WALLET FIRST'>WALLET FIRST</span>

      <div className="w-full px-3 flex flex-col gap-1">
        <p className="flex w-full items-center justify-between">
          <span className="text-[11px]">{helper.getFullName(user)}</span>
          <span className="font-medium text-[11px]">{user.expires}</span>
        </p>
        <span className="font-semibold tracking-widest">{helper.maskCardNumber(user.cardNumber)}</span>
      </div>
    </article>
  );
}