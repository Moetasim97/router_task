import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import React from "react"
import "./EditModal.css"






const columns = [
    {
      field: 'Name',
      headerName: 'Full Name',
      width: 200,
    },
    {
      field: 'user_name',
      headerName: 'User Name',
      width: 200,
    },
    {
      field: 'email',
      headerName: 'Email Address',
      width: 200 ,
    },
    {
      field: 'Group',
      headerName: 'Group',
      width: 200
    },
    {
      field:'user_profiles',
      headerName:"Status",
      width:200
    },
    {
      field:"created_on",
      headerName:"Created On",
      width:150
    }
  ];
  
  
  export default function DataTable({entire_object,EditParentState}) {
    console.log(entire_object)

    var users=[]
    var selectedRow=0;
    const modal_ref=React.useRef()
    
    if(entire_object.state!=undefined){
      users=entire_object.state.users
     
      
    }
    
    
    function close_modal(){
      modal_ref.current.style.display="none"
    }
    function open_modal(args){
     
      modal_ref.current.style.display="block"
      console.log(args.id)
     return selectedRow=args.id
    }
    function edit_parent(args)
    {
      console.log(selectedRow)
      var fullName_input= document.querySelector(".editFullName")
      var username_input=document.querySelector(".editUserName")
      var email_input=document.querySelector(".editEmailAddress")
      var group_input=document.querySelector(".editGroup")
      var user_profiles=document.querySelector(".editProfile")
      var editObject={  id: selectedRow, Name: fullName_input.value, user_name: username_input.value, email: email_input.value, Group: group_input.value,user_profiles:user_profiles.value, created_on: Date().substring(0, 15) }
      if(entire_object?.state?.users){
        var users=[...entire_object.state.users]
        
       users.splice(selectedRow-1,1,editObject)
       console.log(users)
       entire_object.state.users=users
       console.log(entire_object)
      }
      
     
      
      return EditParentState(entire_object)
    }


    return (
      <>
      <div className='edit_modal' ref={modal_ref}>
      <div className="header_modal d-flex justify-content-between  p-2">
                    <div className="text-light pt-1  h6">Add New User</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-x" onClick={close_modal} viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
               </div>
               <div>
               <div className="d-flex justify-content-start mt-4  mx-4"><label htmlFor="fullName">Full Name</label></div>
               <input className="editFullName custom_style mb-2" type="text" placeholder="Enter Full Name" id="fullName"></input>
               </div>
               <div>
               <div className="d-flex justify-content-start mx-4"><label htmlFor="userName">User Name</label></div>
               <input className="editUserName custom_style mb-2" type="text" placeholder="Enter username" id="userName"></input>
               </div>
               <div>
               <div className="d-flex justify-content-start mx-4"><label htmlFor="email_address">Email Address</label></div>
               <input className="editEmailAddress custom_style mb-2" type="text" placeholder="Enter email address" id="email_address"></input>
               </div>
               <div>
               <div className="d-flex justify-content-start mx-4">
                <label htmlFor="user_group">User Group</label></div>
               <select className="custom_style mb-2 editGroup" name="groups" required id="user_group">
                    <option value="" disabled selected>Choose User Group</option>
                    <option value="Office">Office</option>
                    <option value="Managers">Managers</option>
                    <option value="Head Office">Head Office</option>

                </select>
               </div>
               {/* this next select is going to be present for aesthetic purposes only to match
               the look and feel of the client's design */}
               <div>
               <div className="d-flex justify-content-start mx-4 ">
                <label htmlFor="user_profile">Assign Profile</label></div>
                            <select className="custom_style mb-3 editProfile" name="profiles" required id="user_profile">
                                <option value="" disabled selected>Assign Profile</option>
                                <option value="Active">Active</option>
                                <option value="Locked">Locked</option>


                            </select>
               </div>
               <div className="d-flex w-90  justify-content-center mb-2 align-items-baseline ">
                   
                    <div className="mx-4" >
                        <button className="modal_buttons bg-white border" onClick={close_modal}>Cancel</button>
                        <button className="margin modal_buttons bg-success text-white border " onClick={edit_parent}>Edit User</button>
                    </div>
               </div>
      </div>


      {/* the code above is for the edit modal component */}
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={users}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          onRowClick={open_modal}
          
        />
      </Box>
      </>

    );
  }