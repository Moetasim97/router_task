import React from "react"
import "./Modal.css"

class Modal extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={id:1,array_counter:0,users:[]}
        this.recieve_input=this.recieve_input.bind(this)
    }
// this function will handle collapsing the modal child component
    do_something=()=>{
   
        return this.props.close()
    }

    // This function is going to receive the input from the user and update the state accordingly.

    recieve_input(){
        
        // this array_counter variable is only for iterating through the copy of the state.users object
        var array_counter=this.state.array_counter
        var id=this.state.id
        if (this.state.id >= 1){
        this.setState({ id: id + 1 })
        }
        else{
            this.state.id=1
        }
            
       var fullName_input= document.querySelector("#fullName")
       var username_input=document.querySelector("#userName")
       var email_input=document.querySelector("#email_address")
       var group_input=document.querySelector("#user_group")
       var user_profiles=document.querySelector("#user_profile")

        var userObject = { id: this.state.id, Name: fullName_input.value, user_name: username_input.value, email: email_input.value, Group: group_input.value,user_profiles:user_profiles.value, created_on: Date().substring(0, 15) }
        var users = this.state.users
    // this line above creates a deep copy of the state
           
        users[array_counter]=userObject
        
        var temp =[...this.state.users];
       
        temp.push(userObject);
        
    
//   console.log(temp)
//   console.log(users)
//   Just as I expected, temp contains two copies of the userobject.Yet somehow only one object gets passed
// to the datatable component
   
       
       
    
        
        
    
        array_counter++
     
       
        this.setState({users:temp, array_counter })
    

        // this timeout function solved the mystery. The  above setstate method updates the state of the 
        // parent asynchronously. What only gets passed to the datatable method is the state of the modal
        // as it was updated by the users[array_counter]=userobject statement.
        // setTimeout(() => {
        //     this.props.updateParent(this.state)
        // }, 2000);

        this.props.updateParent(this.state)
       

        
         
        
        return [fullName_input.value = '', username_input.value = '', email_input.value = '', group_input = '',user_profiles.value='' ]
    }   

    render(){
       
      
        if(this.props.state.modal_state==false){
            return (<><div> </div></>)
        }
        
        else {
            
            return(
                
                <>
                    
                 
                <div className="modal_background ">
               <div className="header_modal d-flex justify-content-between  p-2">
                    <div className="text-light pt-1  h6">Add New User</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-x" onClick={this.do_something} viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
               </div>
               <div>
               <div className="d-flex justify-content-start mt-4"><label htmlFor="fullName">Full Name</label></div>
               <input className="fullusername custom_style mb-2" type="text" placeholder="Enter Full Name" id="fullName"></input>
               </div>
               <div>
               <div className="d-flex justify-content-start"><label htmlFor="userName">User Name</label></div>
               <input className="username custom_style mb-2" type="text" placeholder="Enter username" id="userName"></input>
               </div>
               <div>
               <div className="d-flex justify-content-start"><label htmlFor="email_address">Email Address</label></div>
               <input className="emailaddress custom_style mb-2" type="text" placeholder="Enter email address" id="email_address"></input>
               </div>
               <div>
               <div className="d-flex justify-content-start">
                <label htmlFor="user_group">User Group</label></div>
               <select className="custom_style mb-2" name="groups" required id="user_group">
                    <option value="" disabled selected>Choose User Group</option>
                    <option value="Office">Office</option>
                    <option value="Managers">Managers</option>
                    <option value="Head Office">Head Office</option>

                </select>
               </div>
               {/* this next select is going to be present for aesthetic purposes only to match
               the look and feel of the client's design */}
               <div>
               <div className="d-flex justify-content-start">
                <label htmlFor="user_profile">Assign Profile</label></div>
                            <select className="custom_style mb-2" name="profiles" required id="user_profile">
                                <option value="" disabled selected>Assign Profile</option>
                                <option value="Active">Active</option>
                                <option value="Locked">Locked</option>


                            </select>
               </div>
               <div className="d-flex w-90  justify-content-between align-items-baseline ">
                    <p className="mx-4 reset">Reset Fields</p>
                    <div className="mx-4" >
                        <button className="modal_buttons bg-white border" onClick={this.props.close}>Cancel</button>
                        <button className="margin modal_buttons bg-success text-white border " onClick={this.recieve_input}>Add User</button>
                    </div>
               </div>
                </div>
               
                </>
            )

        }
        
       
    }

}
export default Modal