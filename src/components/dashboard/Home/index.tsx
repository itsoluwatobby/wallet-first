import { MetaTags } from "../../../layout/OGgraph"

type HomeProps = {
  user: User;
}
export const Home = ({ user }: HomeProps) => {
  
  return (
    <section className="page-fade-in customScrollBar overflow-y-scroll flex-auto flex flex-col gap-y-3 p-5 h-full">
      <MetaTags
        title='Home Page'
        description=''
        url=''
        image=''
      />

      Home {user.firstName}
    </section>
  )
}