import React , {Fragment , useState} from 'react';
import Navbar from "./components/Navbar";
import './App.css';
import Sidebar from "./components/Sidebar";
import Routes from "./components/Routes";
import Footer from "./components/Footer";
const App = () => {
  const [icon,setIcon]= useState("fa fa-align-justify")
  const onclick=()=>{
    if(icon==="fa fa-align-justify"){
 document.getElementById("sidebar-wrapper").style.display="block";

 setIcon("fa fa-chevron-left")
}
else{
  document.getElementById("sidebar-wrapper").style.display="none";

 setIcon("fa fa-align-justify")
}
  }
  return(
    <Fragment>
      <Navbar onclick={onclick} icon={icon}/>
      <div className="flex">
        <Sidebar/>
    <Routes style={{padding:"10px"}}/>
    </div>
    <Footer/>
     </Fragment>
)}

export default App;
