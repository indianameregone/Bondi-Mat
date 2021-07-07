import React, { Component } from "react";

class PageMain extends Component{
    render(){
         
        return(            
        <div className="container" id="container">            
           <div className="pageone" id="pageone">
                <div className="qr"><h3>{this.props.traveler}</h3><br/>
                    <img  class="imagen"/>
                </div>
                    <div className="tripleft">
                        <h3>Trips Left</h3>
                        <div id="numbers">{this.props.tripsLeft}</div>
                    </div>
            </div>
            <div class="baseone" id="baseone">
                
                <button  className="btn">QR Scanned</button>
            </div>
        </div>
        )
    }
}
export default PageMain;