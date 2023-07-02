import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import React from "react"
import "./EditModal.css"
import TextField from "@mui/material/TextField"
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Select from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Autocomplete } from '@mui/material';
import BlockIcon from '@mui/icons-material/Block';
import EditIcon from '@mui/icons-material/Edit';
import HttpsIcon from '@mui/icons-material/Https';
import { Block } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useForm } from 'react-hook-form';







const columns = [
    {
      field: 'Name',
      headerName: 'Full Name',
      width: 150,
    },
    {
      field: 'user_name',
      headerName: 'User Name',
      width: 150,
     
    },
    {
      field: 'email',
      headerName: 'Email Address',
      width: 150 ,

    },
    {
      field: 'Group',
      headerName: 'Group',
      width: 150,
      
    },
    {
      field:'user_profiles',
      headerName:"Status",
      width:150,
  
    },
    {
      field:"created_on",
      headerName:"Created On",
      width:150,
    
    }
  ];
  
  
  export default function DataTable({entire_object,EditParentState}) {
    const {register,formState:{errors},handleSubmit}=useForm()
    console.log(errors)

    var filtered_array=[]
    var getGrid=React.useRef()
    var users=[]
    var selectedRow=0;
    const modal_ref=React.useRef()
    
    if(entire_object.state!=undefined){
      users=entire_object.state.users
    }

    if(entire_object.flag==true){
      users=entire_object.filtered
    }
    
    
    function close_modal(){
      modal_ref.current.style.display="none"
    }


    function open_modal(args){
      modal_ref.current.style.display="block"
     return selectedRow=args.id
    }

    // This function is responsible for editing the parent's state
    function edit_parent()
    {
      var fullName_input= document.querySelector(".editFullName")
      var username_input=document.querySelector(".editUserName")
      var email_input=document.querySelector(".editEmailAddress")
      var group_input=document.querySelector(".editGroup")
      var user_profiles=document.querySelector(".editProfile")
      var editObject={  id: selectedRow, Name: fullName_input.value, user_name: username_input.value, email: email_input.value, Group: group_input.value,user_profiles:user_profiles.value, created_on: Date().substring(0, 15) }
      if(entire_object?.state?.users){
        var users=[...entire_object.state.users]
        
       users.splice(selectedRow-1,1,editObject)
       entire_object.state.users=users
    
      }
      return EditParentState(entire_object),[fullName_input.value="",username_input.value="",email_input.value=""]
    }
// End of this function
    return (
      <>
      <Box
        component={"div"}
      sx={{
        display:"flex",
       
        width: 'fit-content',
        height: "fit-content",
        backgroundColor: 'inherit',
        marginTop:"5px ",
        
      }}
    >
       <TextField
          label=""
          id="outlined-start-adornment"
                sx={{
                  m: 1, width: '30ch', display: 'flex', justifyContent: "start", '& ::placeholder': {
                    fontSize:"14px;",textAlign:"start"
                  }
}}
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
            placeholder:"Search..."
          }}
          // this function is responsible for the filtering
          onChange={(e)=>{
            entire_object.flag=true
            var input=e.target.value
            filtered_array=[]
            
            for(var u=0;u<users.length;u++){
              if(users[u].Name.startsWith(input)){
                filtered_array.push(users[u])
              }
            }
            entire_object.filtered=filtered_array
            if(e.target.value==""){
              entire_object.flag=false
              
            }
// the state of the parent gets updated here
            EditParentState(entire_object)
          }}
        />
         <TextField
         
          id="named_id"
                sx={{
                  m: 1, width: '15ch', display: 'flex', justifyContent: "start", maxHeight: "20px;", '& ::placeholder': {
                    fontSize: "14px;", textAlign: "start",color:"black"
                  } }}
                  inputProps={{placeholder:"User Name"}}
        />
        
        
        <Autocomplete
        id="combo-box-demo"
        sx={{marginTop:"8px",marginRight:"8px", width: 150 }}
        options={entire_object.status}
        multiple
        onChange={(e)=>{
          entire_object.flag=true
            var input=e.target.textContent
            console.log(input)
            filtered_array=[]
            if(entire_object?.state){
              for(var u=0;u<entire_object.state.users.length;u++){
           
                if(entire_object.state.users[u].user_profiles==input){
                  filtered_array.push(entire_object.state.users[u])
                }
              }
            }
            entire_object.filtered=filtered_array
            
            filtered_array=[...entire_object.filtered,filtered_array]
            
           
            if(e.target.textContent==""){
              entire_object.flag=false
              
            }

            console.log(entire_object.filtered)
// the state of the parent gets updated here
            EditParentState(entire_object)
          

        }}
        renderInput={(params) => <TextField {...params} label="User Status" />}
        />
        
                
      <DatePicker
       label="All Time"
       sx={{marginTop:"8px",marginRight:"8px",width:"15ch"}}
       onChange={(e)=>{
        
        entire_object.flag=true
        var input=e.$d
        input=""+input
        input=input.substring(0,15)
 
        
        filtered_array=[]
        if(entire_object?.state){
          for(var u=0;u<entire_object.state.users.length;u++){
       
            if(entire_object.state.users[u].created_on==input){
              filtered_array.push(entire_object.state.users[u])
              
            }
          }
        }
        entire_object.filtered=filtered_array
        
        filtered_array=[...entire_object.filtered,filtered_array]
        
       
        if(input==""){
          entire_object.flag=false
          
        }

        console.log(entire_object.filtered)
// the state of the parent gets updated here
        EditParentState(entire_object)
      
       }}
        />
      </Box>
   
      <div className='edit_modal' ref={modal_ref}>
      <div className="header_modal d-flex justify-content-between  p-2">
                    <div className="text-light pt-1  h6">Add New User</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-x" onClick={close_modal} viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
               </div>
               <form onSubmit={handleSubmit(()=>{return edit_parent()})}>
               <div>
               <div className="d-flex justify-content-start mt-4  mx-4"><label htmlFor="fullName">Full Name</label></div>
               <input className="editFullName custom_style mb-2" type="text" placeholder="Enter Full Name" id="fullName"  {...register("Name",{required:"The full name is required",minLength:{value:10,message:"Minimum length should be at least 10 characters"}})}></input>
               {errors.Name? <div className="validation_message">{errors.Name.message}</div>:<div className="d-none"></div>}
               </div>
               <div>
               <div className="d-flex justify-content-start mx-4"><label htmlFor="userName">User Name</label></div>
               <input className="editUserName custom_style mb-2" type="text" placeholder="Enter username" id="userName" {...register("user_name",{required:"Username is required",minLength:{value:4,message:"Username is too short"}})}></input>
               {errors.user_name? <div className="validation_message">{errors.user_name.message}</div>:<div className="d-none"></div>}
               </div>
               <div>
               <div className="d-flex justify-content-start mx-4"><label htmlFor="email_address">Email Address</label></div>
               <input className="editEmailAddress custom_style mb-2" type="text" placeholder="Enter email address" id="email_address" {...register("email",{required:"Email address is required",pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Invalid Email Address"}})}></input>
               {errors.email? <div className="validation_message">{errors.email.message}</div>:<div className="d-none"></div>}
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
                        <button className="margin modal_buttons bg-success text-white border " type='submit'>Edit User</button>
                    </div>
               </div>
               </form>
      </div>
      <div className='d-flex justify-content-between'>
              <div className='d-flex fit-content'>
                <div className='random_line mx-2'></div>
                <EditIcon sx={{ backgroundColor: "#E7E9EF", borderRadius: "5px;", padding: "5px", fontSize: "37px", margin: "4px",cursor:"pointer" }} />
                <BlockIcon sx={{ backgroundColor: "#E7E9EF", borderRadius: "5px;", padding: "5px", fontSize: "37px", margin: "4px",cursor:"pointer" }} />
                <HttpsIcon sx={{ backgroundColor: "#E7E9EF", borderRadius: "5px;", padding: "5px", fontSize: "37px", margin: "4px",cursor:"pointer" }} />
               
                <button className="smaller_container_btns">Assign to profile</button>
                <button className="smaller_container_btns">Assign to Group</button>
                <MoreVertIcon sx={{ backgroundColor: "#E7E9EF", borderRadius: "5px;", padding: "5px", fontSize: "37px", margin: "4px", cursor: "pointer" }} />
                <div className='unselect'>Unselect All</div>
                  
              </div>
                

              <FileDownloadIcon sx={{ backgroundColor: "#E7E9EF", borderRadius: "5px;", padding: "5px", fontSize: "37px", margin: "4px", cursor: "pointer" }} />
              
            

        </div>


      {/* the code above is for the edit modal component */}
      
      <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
      ref={getGrid}
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

