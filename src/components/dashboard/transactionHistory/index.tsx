import { Cell, Pie, PieChart } from 'recharts';
import { CURRENCY, helper } from '../../../utils';
import TransactionTable from './TransactionTable';

export const TransactionHistory = () => {

  const AccountInformation = [
    { color: 'bg-red-600', type: 'Income', fill: 'rgba(250,5,15,0.7)', value: 400 },
    { color: 'bg-green-400', type: 'Expense', fill: 'rgba(170,225,15,0.3)', value: 350 },
    { color: 'bg-orange-300', type: 'Others', fill: 'rgba(250,155,5,0.5)', value: 150 },
  ]

  return (
    <section className="page-fade-in customScrollBar overflow-y-scroll flex-auto flex flex-col gap-y-3 p-5 h-full">
      <div className="flex flex-col">
        <h1 className="text-orange-400 text-lg flex items-center">
          <b>Welcome <span className="italic">Oluwatobi</span></b>
        </h1>
        <span className="text-xs text-gray-500">Manage your transaction history efficiently</span>
        <span className='text-gray-500 text-end text-xs mt-2'>{helper.getCurrentDate()}</span>
      </div>

      <article className='w-full px-0.5 py-0 shadow-md rounded-md'>
        <div className='self-start flex items-center gap-x-0.5'>
          <PieChart width={150} margin={{ top: -140, left: -40 }} height={120}>
            <Pie
              data={AccountInformation}
              cx={120}
              cy={200}
              innerRadius={20}
              outerRadius={40}
              fill="#8884d8"
              paddingAngle={3}
              dataKey="value"
            >
              {AccountInformation.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>

          <div className='flex flex-col gap-y-2 h-full text-sm'>
            <b>Accounts: <span>{5}</span></b>

            <div className='flex flex-col gap-y-0.5'>
              <span className='text-xs text-gray-500'>Total Balance</span>
              <b>{CURRENCY['DOLLAR']}{helper.totalAmount(AccountInformation)}</b>
            </div>
          </div>
        </div>
      </article>

      <article className='mt-2 flex flex-col gap-y-2'>
        <div className='flex items-center w-full justify-between'>
          <h2 className='font-medium'>Recent Transactions</h2>
          <button className='focus:none outline-none rounded-md border text-xs p-1.5 shadow-md bg-blue-500 text-white active:scale-[1.02] transition-transform'>
            view all
          </button>
        </div>

        <TransactionTable />

      </article>

    </section>
  )
}