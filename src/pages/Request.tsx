import RequestComponent from "../components/landing/Sections/RequestComponent"
import SideBar from "../components/templates/SideBar.tsx"
import MainBox from "../components/templates/MainBox"




const Request = () => {
  return (
    <MainBox>
      <SideBar />
        <RequestComponent />
    </MainBox>
  )

}

export default Request