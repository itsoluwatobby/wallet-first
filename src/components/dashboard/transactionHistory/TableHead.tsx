import { TransactionHistoryHeading } from '../../../utils'

export default function TableHead() {
  return (
    <thead className="rounded-md">
      <tr className="bg-orange-50">
        {
          TransactionHistoryHeading.map((heading) => (
            <th
              key={heading}
              className="capitalize md:text-left text-center text-xs font-semibold p-2"
            >{heading}</th>
          ))
        }
      </tr>
    </thead>
  )
}