import React from 'react'
import './Popup.css'
const Popup = (props) => {
    return (props.trigger) ? (
        <div className="popup">
           <div className="popup-inner">
               <button className="close-btn" onClick={()=>props.setTrigger(false)} type="">Close</button>
               <br/>
               {props.children}
           </div> 
        </div>
    ) : "" ;
}

export default Popup
