import React from "react";
import './contactus.css';
const Contactus=()=>{
    document.title = "Contact Us";
    const mystyle = {
        color: "#00bcd4",
        fontWeight:"bold",
      };
return(
    <section className="contact">
        <div className="content">
            <h2 style={mystyle}>Contact Us</h2>
            
        </div>
        <div className="container">
            <div className="contactInfo">
                <div className="box">
                    <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                    <div className="text">
                        <h3>Address</h3>
                        <p>4671 Sugar Camp Road,Saket,New Delhi,110080  </p>
               
                     </div>    
            </div>
        
            
            <div className="box">
                <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                <div className="text">
                    <h3>Phone</h3>
                    <p>999-092-3224</p>
                </div>
            </div>
            <div className="box">
                <div className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></div>
                <div className="text">
                    <h3>Email</h3>
                    <p>sachin.hillboy190171@gmail.com</p>
                </div>
             </div>
           </div>
           
           <div className="contactForm">
               <form method="POST" action="query"  >
                   <h2>Send Messages</h2>
                  
                   <div className="inputBox">
                    <input type="text" name="mail" required="required"/>
                    <span>Email</span>
                </div>
                <div className="inputBox">
                 <textarea type="text" name="uquery" required="required"></textarea>
                 <span>Type your Message...</span>
                 </div>
                 <div className="inputBox">
                     <input type="submit" name="" value="Send"/>
                </div>
               </form>
               
           </div>
        </div>
        
        
    </section>  
)
}
export default Contactus