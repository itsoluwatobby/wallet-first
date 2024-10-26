import { NavSection, MainSection } from "../components/dashboard";
// import { useAppContext } from "../hooks/useAppContext";
// import { SideTabEnum } from "../utils/constants";

export default function Dashboard() {
  // const { tabName } = useAppContext();

  return (
    <div className='h-full w-full flex'>
      <NavSection />
      <MainSection />
    </div>
  )
}