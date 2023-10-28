import React from 'react'
import './Mainsection.css'
import print_icon from '../Assets/icons-print.png'
import export_icon from '../Assets/icons-upload.png'
import send_icon from '../Assets/icons-send.png'
import plus_icon from '../Assets/icons-plus.png'

function Mainsection() {
  return (
    <div className='mainsection'>
      <div className="box">
        <div className="master">
            <div className="master-left">
                <div className="master-title">
                <h2>Item Master </h2>
                <div className="count">8</div>
                </div>
                <div className='para'><p>Keep track of your items</p></div>
                
            </div>
            <div className="master-button">
                <button className="btn btn-primary"><img src={print_icon} alt="" /> Print </button>          
                <button className="btn btn-primary"><img src={export_icon} alt="" /> Export </button>           
                <button className="btn btn-primary"> Send <img src={send_icon} alt="" /></button>          
                <button className="btn btn-primary"> Create <img src={plus_icon} alt="" /></button>    
            </div> 
                  
        </div>
        <hr /> 

        <div className="sort">
            </div>  
      </div>
    </div>
  )
}

export default Mainsection
