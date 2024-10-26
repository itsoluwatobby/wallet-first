import { GiPayMoney, GiReceiveMoney, GiMoneyStack } from "react-icons/gi";
import { transactionHistory } from "../../../utils/history";
import { useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { CURRENCY, helper } from "../../../utils";

const KeyValues = {
  Total: 'Total',
  Debit: 'Debit',
  Credit: 'Credit',
} as const;

type TransactionTypes = keyof typeof KeyValues;
export default function TransactionTable() {
  const [keyName, setKeyName] = useState<keyof typeof KeyValues>(KeyValues.Total);

  const iconClass = 'text-4xl bg-orange-100 rounded-full p-1';

  const transactions = {
    Total: <GiMoneyStack className={`${iconClass} text-blue-800`} />,
    Debit: <GiPayMoney className={`${iconClass} text-red-700`} />,
    Credit: <GiReceiveMoney className={`${iconClass} text-green-800`} />,
  };

  const filteredHistory = (type: TransactionTypes) => {
    return transactionHistory.filter((transaction) => {
      if (type === KeyValues.Total) return transaction;
      return transaction.type === type;
    });
  };

  return (
    <div className='w-full text-sm flex flex-col gap-y-6'>
      <article className='w-full text-sm flex flex-col gap-y-4'>
        <div className='flex items-start gap-x-6'>
          {
            Object.keys(transactions).map((name) => (
              <button key={name}
                onClick={() => setKeyName(name as TransactionTypes)}
                className={`capitalize text-xs text-gray-600 font-medium ${name === keyName ? 'text-orange-500 border-orange-500' : ''} pb-0.5 border-b-2`}
              >
                {name}
              </button>
            ))
          }
        </div>

        <div className="w-full flex items-start text-xs gap-x-2 rounded-md bg-orange-50 p-2.5 shadow relative">
          {transactions[keyName]}
          <div className="flex flex-col gap-y-1 font-semibold">
            <span className="capitalize">{KeyValues[keyName]}</span>
            <span className="text-gray-700 font-semibold text-[11px]">
              {CURRENCY['DOLLAR']}{helper.totalAmount(filteredHistory(keyName))}
            </span>
          </div>

          <span className="capitalize rounded-lg p-0.5 px-2 bg-orange-200 absolute right-2">{KeyValues[keyName]}</span>
        </div>
      </article>

      <div className="hideBars w-full overflow-x-scroll">
        <table className="w-full border border-collapse">
          <TableHead />
          <TableBody />
        </table>
      </div>
    </div>
  )
}