import React from "react"
import "./Modal.css"

class Modal extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={}
    }


    render(){
        if(this.props.state==false){
            return(<div></div>)
        }
        else {
            return(
                <>
                <div className="modal_background">
                    <div>
                <div className="modal">
                    this is the modal body
                </div>
                </div>
                </div>
                
                </>
            )

        }
        
       
    }

}
export default Modal