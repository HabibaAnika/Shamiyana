
import Footer from "../components/Footer";
import { Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar"

function MainLayouts() {
  return (
     <div>
        <Navbar></Navbar>
        <Outlet/>
        <Footer></Footer>
     </div>
  )
}

export default MainLayouts;