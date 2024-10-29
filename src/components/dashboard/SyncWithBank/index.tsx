import { MetaTags } from "../../../layout/OGgraph"

type SyncWithBankProps = {
  user: User;
}
export const SyncWithBank = ({ user }: SyncWithBankProps) => {
  
  return (
    <section className="page-fade-in customScrollBar overflow-y-scroll flex-auto flex flex-col gap-y-3 p-5 h-full">
      <MetaTags
        title='Sync With Bank Page'
        description=''
        url=''
        image=''
      />

      SyncWithBank {user.firstName}
    </section>
  )
}