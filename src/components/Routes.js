import React from "react";
import { Router } from "@reach/router";
import Home from "./Home";
import Register from "./Register";
import Goandgive from "./Goandgive";
import Donate from "./Donate";
import Checkavailability from "./CheckAvailability";
import Contactus from "./Contactus";
import Faq from "./Faq";
import Organisations from "./Organisations";

const Routes= props =>{
return(<Router style={props.style}>
    <Home path="/"/>
    <Register path="/register"/>
    <Goandgive path="/goandgive"/>
    <Donate path="/donate"/>
    <Checkavailability path="/checkavailability"/>
    <Organisations path="/organisations"/>
    <Faq path="/faq"/>
    <Contactus path="/contactus"/>
</Router>)
}
export default Routes