import { CURRENCY, helper, TransactionStatus, TransactionType } from '../../../utils';

type TableBodyProps = {
  transactionHistory: {
    id: number;
    title: string;
    type: string;
    status: string;
    date: string;
    value: number;
    currency: string;
    channel: string;
    category: string;
  }[]
}
export default function TableBody({ transactionHistory }: TableBodyProps) {

  const isDebit = (type: string) => {
    return type === TransactionType.Debit;
  }

  const status = (status: string) => {
    if (status === TransactionStatus.Success) return 2;
    if (status === TransactionStatus.Pending) return 1;
    return 0;
  }

  transactionHistory.sort((a, b) => b.date.localeCompare(a.date));
  
  return (
    <tbody className="">
      {
        transactionHistory.map((transaction) => (
          <tr key={transaction.id}
            className="text-[11px] hover:opacity-90 cursor-pointer border even:bg-orange-50"
          >
            <td
              className="font-medium p-2">{transaction.title}
            </td>
            <td
              className={`${isDebit(transaction.type) ? 'text-red-500 before:content-["-"] before:font-semibold' : 'text-green-600'} font-normal p-2`}>
              <span className='font-medium'>{CURRENCY[transaction.currency as keyof typeof CURRENCY]}</span>{transaction.value}
            </td>
            <td
              className='font-normal p-2'>
              <span className={`border rounded-full p-0.5 px-1.5 ${status(transaction.status) === 2 ? 'border-green-500 bg-green-100 text-green-600' : status(transaction.status) === 1 ? 'border-orange-500 bg-orange-100 text-orange-600' : 'border-red-500 bg-red-100 text-red-600'}`}>
                {transaction.status}
              </span>
            </td>
            <td
              className="font-normal p-2">{helper.formatTime(transaction.date)}
            </td>
            <td
              className="font-normal p-2">{transaction.channel}
            </td>
            <td
              className="font-normal p-2">{transaction.category}
            </td>
          </tr>
        ))
      }
    </tbody>
  )
}