import { NavSection, MainSection } from "../components/dashboard";

export default function Dashboard() {

  return (
    <div className='h-full w-full flex'>
      <NavSection />
      <MainSection />
    </div>
  )
}