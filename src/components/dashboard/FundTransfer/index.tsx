import { MetaTags } from "../../../layout/OGgraph"

type FundTransferProps = {
  user: User;
}
export const FundTransfer = ({ user }: FundTransferProps) => {
  
  return (
    <section className="page-fade-in customScrollBar overflow-y-scroll flex-auto flex flex-col gap-y-3 p-5 h-full">
      <MetaTags
        title='Fund Transfer Page'
        description=''
        url=''
        image=''
      />
      
      FundTransfer {user.firstName}
    </section>
  )
}