import React from 'react'
import { IoWalletSharp } from 'react-icons/io5';
import { CURRENCY, helper, TransactionStatus, TransactionType } from '../../../utils';
import { LiaTimesSolid } from 'react-icons/lia';

type ReceiptProps = {
  transaction: TransactionPropType | undefined;
  dialogModalRef: React.RefObject<HTMLDialogElement>;
}

export const Receipt = ({ transaction, dialogModalRef }: ReceiptProps) => {

  const isDebit = (type: string) => {
    return type === TransactionType.Debit;
  }

  const status = (status?: string) => {
    if (status === TransactionStatus.Success) return 2;
    if (status === TransactionStatus.Pending) return 1;
    return 0;
  }

  return (
    <dialog
      ref={dialogModalRef}
      className={`relative w-[55%] mdXl:w-[33%] mobile:w-[75%] mobile:-right-10 h-f p-3 flex flex-col focus:border-0 focus:outline-none items-center gap-5 bg-gradient-to-b from-orange-50 to-white shadow-md rounded-md`}>

      <LiaTimesSolid 
        onClick={() => dialogModalRef.current?.close()}
        className='absolute cursor-pointer right-2 top-2 shadow text-lg'
      />

      <IoWalletSharp className="text-blue-800 text-center text-3xl" />

      <div className='flex flex-col text-sm gap-3 items-center w-full'>
        <span>{transaction?.title}</span>

        <div className='flex flex-col items-center'>
          <p
            className={`${isDebit(transaction?.type as string) ? 'text-red-500 before:content-["-"] before:font-semibold' : 'text-green-600'} font-normal p-2`}>
            <span className='font-medium'>{CURRENCY[transaction?.currency as CurrencyType]}</span>{helper.formatPrice(transaction?.value, 2)}
          </p>

          <span className={`text-[11px] ${status(transaction?.status) === 2 ? 'text-green-600' : status(transaction?.status) === 1 ? 'text-orange-600' : 'text-red-600'}`}>
            {transaction?.status}
          </span>
        </div>

        <div className='text-xs flex flex-col gap-2 w-full mt-2 p-2'>
          <span className='text-start font-medium'>Transaction details</span>

          <TransactionDetails title='Transaction Type' value={transaction?.type} />
          <TransactionDetails title='Sender Details' value={transaction?.type} />
          <TransactionDetails title='Remarks' value={transaction?.type} />
          <TransactionDetails title='Channel' value={transaction?.channel} />
          <TransactionDetails
            title='Transaction Date'
            value={helper.formatTime(transaction?.date as string, true)}
          />
        </div>

      </div>
    </dialog>
  )
}

type TransactionDetailsProps = {
  title: string;
  value?: string;
}
const TransactionDetails = ({ title, value }: TransactionDetailsProps) => {

  return (
    <p className='text-[11px] flex items-center w-full justify-between'>
      <span className='text-gray-700'>{title}</span>
      <span className='text-end text-[10px]'>{value}</span>
    </p>
  )
}
