import React from "react"
import "./Modal.css"
import { useEffect } from "react"
import {useForm} from "react-hook-form"

function Modal({state,close,updateParent}){

    const {register,control,handleSubmit,formState:{errors}}=useForm()
    console.log(errors)

  
    const [id,setId]=React.useState(1)
    const [array_counter,setCounter]=React.useState(0)
    const [users,setUsers]=React.useState([])
    var combined={users,id,array_counter}



// this function will handle collapsing the modal child component
    function do_something(){
   
        return close()
    }

    // This function is going to receive the input from the user and update the state accordingly.

     function recieve_input(formValues){
        
        // this array_counter variable is only for iterating through the copy of the state.users object
       console.log(formValues)
        if (id >= 1){
        setId((prevState)=>prevState=prevState+1)
        }
        else{
            console.log("You somehow decremented the id, good job idiot!", id)
        }
            
       var fullName_input= document.querySelector("#fullName")
       var username_input=document.querySelector("#userName")
       var email_input=document.querySelector("#email_address")
       var group_input=document.querySelector("#user_group")
       var user_profiles=document.querySelector("#user_profile")

        var userObject = { id: id, Name: fullName_input.value, user_name: username_input.value, email: email_input.value, Group: group_input.value,user_profiles:user_profiles.value, created_on: Date().substring(0, 15) }
        var userss = [...users]
    // this line above creates a shallow copy of the users state
          
        userss[array_counter]=userObject
        // console.log(userss)
        // I'm also assuming that I can do this move here because the users' array is no longer immutable
        // after it became equal to the temp array on the first render
        
    


   
       
       
    
        
        setCounter((prevState)=> prevState=prevState+1)
        setUsers((prevState)=> prevState=userss)
        
        
        // I'm assuming now that the line above caused the component to render before updating the parent's
        // state. That's why the data did not get reflected in the table after clicking the add user button.
    

        // this timeout function solved the mystery. The above setstate method will update
        // the state of the parent  the state of the 
        // parent asynchronously. What only gets passed to the datatable method is the state of the modal
        // as it was updated by the users[array_counter]=userobject statement.
        // setTimeout(() => {
        //     updateParent(this.state)
        // }, 2000);

        return [fullName_input.value = '', username_input.value = '', email_input.value = '', group_input = '',user_profiles.value='' ]
    }   

    // I've introduced this hook because I ran into a problem where the updateparent function gets called 
    // before the state of the modal gets updated.
    useEffect(()=>{
        updateParent(combined)
    },[users])

    
    return(<>
       
      {state.modal_state==false ? <><div className="d-none"></div></>
    :
     
    
    <div className="modal_background ">
   <div className="header_modal d-flex justify-content-between  p-2">
    
        <div className="text-light pt-1  h6">Add New User</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-x" onClick={()=>{
            do_something()
        }} viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
   </div>
   {/* The line below is responsible for all of the functionality of the form */}
   <form onSubmit={handleSubmit((formValues)=>{return recieve_input(formValues)})}
>

   <div>
    <div className="d-flex justify-content-start mt-4"><label htmlFor="fullName">Full Name</label></div>
    
    <input className="fullusername custom_style mb-2" type="text" placeholder="Enter Full Name" id="fullName" {...register("Name",{required:"The full name is required",minLength:{value:10,message:"Minimum length should be at least 10 characters"}})}
   ></input>
       {errors.Name? <div className="validation_message">{errors.Name.message}</div>:<div className="d-none"></div>}

    </div>
    
    <div>
    <div className="d-flex justify-content-start"><label htmlFor="userName">User Name</label></div>
    <input className="username custom_style mb-2" type="text" placeholder="Enter username" id="userName" {...register("user_name",{required:"Username is required",minLength:{value:4,message:"Username is too short"}})}></input>
    {errors.user_name? <div className="validation_message">{errors.user_name.message}</div>:<div className="d-none"></div>}
    </div>
    <div>
    <div className="d-flex justify-content-start"><label htmlFor="email_address">Email Address</label></div>
    <input className="emailaddress custom_style mb-2" type="text" placeholder="Enter email address" id="email_address" {...register("email",{required:"Email address is required",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Invalid Email Address"}})}></input>
    {errors.email? <div className="validation_message">{errors.email.message}</div>:<div className="d-none"></div>}
    </div>
    <div>
    <div className="d-flex justify-content-start">
        <label htmlFor="user_group">User Group</label></div>
    <select className="custom_style mb-2" name="groups"  id="user_group" {...register("Group",{required:"Please select a group"})}>
            <option value="" disabled selected>Choose User Group</option>
            <option value="Office">Office</option>
            <option value="Managers">Managers</option>
            <option value="Head Office">Head Office</option>

        </select>
        {errors.Group? <div className="validation_message">{errors.Group.message}</div>:<div className="d-none"></div>}
    </div>
    {/* this next select is going to be present for aesthetic purposes only to match
    the look and feel of the client's design */}
    <div>
    <div className="d-flex justify-content-start">
        <label htmlFor="user_profile">Assign Profile</label></div>
                    <select className="custom_style mb-2" name="profiles"  id="user_profile" 
                    {...register("user_profiles",{required:"Assign a profile"})}>
                       

                        <option value="" disabled selected>Assign Profile</option>
                        <option value="Active">Active</option>
                        <option value="Locked">Locked</option>


                    </select>
                    {errors.user_profiles? <div className="validation_message">{errors.user_profiles.message}</div>:<div className="d-none"></div>}
    </div>
    <div className="d-flex w-90  justify-content-between align-items-baseline ">
            <p className="mx-4 reset">Reset Fields</p>
            <div className="mx-4" >
                <button className="modal_buttons bg-white border" onClick={()=>{
                    do_something()
                }}>Cancel</button>
                <input type="Submit" className="margin modal_buttons bg-success text-white border " value="Add User" ></input>
            </div>
    </div>
    </form>
   

    </div>
   
   
}
</>
    )
}
export default Modal