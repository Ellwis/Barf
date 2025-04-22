
import Dashboard from '../components/landing/Sections/DashboardComponent';
import MainBox from '../components/templates/MainBox';
import SideBar from '../components/templates/SideBar.tsx';


export default function Landing() {
  
  return (
    <MainBox>
      <SideBar />
      <Dashboard />
    </MainBox>


  );
}

