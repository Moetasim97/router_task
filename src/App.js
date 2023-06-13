
import './App.css';
import image from './Screenshot 2023-06-11 222930.png'
import React from "react"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField"
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Modal from "./Modal"





class App extends React.Component{
  constructor(){
    super()
    this.state={age:10,users:[],modal_state:false}

  }

 
  
  toggle_modal=()=>{
    if(this.state.modal_state==false){
      this.setState(()=>{ return {...this.state,modal_state:true}})
     
    }
    else if(this.state.modal_state==true){
     
    }
  }
  render(){
    console.log(this.state)
    const age=this.state.age

     this.handleChange=(e)=>{
      return this.setState({age:e.target.value})
      }
      // logic for rendering the modal
      
    
  
  
    return (

      <>
      
      <div className="App bg-white">
      <Modal state={this.state.modal_state} rendering_function={this.rendering_function}/>

        <div className='sidebar '>
          <img src={image} />
        <div className="form-outline">
          <input type="search" id="form1" className=" searchbar" placeholder="Quick Access" aria-label="Search" />
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="gray" className="bi bi-search" viewBox="0 0 14 14">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
        </div>

        <div className='d-flex flex-column mt-5 '>
            <div className='text-secondary px-2 h5' align="start"> Settings</div>
            <div className="dropdown">
                <button className="btn_class py-2 dropdown-toggle"  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                  ATM Settings
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-down first" viewBox="0 0 14 14">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
                <div className="dropdown">
                <button className="btn_class py-2 Name dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Business Setup
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-down second" viewBox="0 0 14 14">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="btn_class py-2 Name dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  User Management
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-down third" viewBox="0 0 14 14">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div className='text-secondary   mt-3 h6 px-2' align="start"> License management</div>
            </div>
        </div>
       
        <div className="top_div" > <strong>Good Morning!</strong> {Date().substring(0,25)}</div>
        {/* This is the part that I'm now interested in */}
        
        <div className='container_div border'>
          
          
          <div className='d-flex justify-content-between'>
            <div className="h4">User Management</div>
            <button className='main_trigger d-flex p-2 mx-4' onClick={this.toggle_modal}>
             
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                Add New
              </button>
           
          </div>
         
        <Box
        component={"div"}
      sx={{
        display:"flex",
        alignItems:"baseline",
        width: 'fit-content',
        height: 300,
        backgroundColor: 'inherit',
        marginTop:"10px "
      }}
      
    >
       <TextField
          label=""
          id="outlined-start-adornment"
          sx={{ m:1, width: '40ch',display:'flex',justifyContent:"start" }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
            placeholder:"Search..."
          }}
        />
         <TextField
          label="User Name"
          id="named_id"
          sx={{ m:1, width: '20ch',display:'flex',justifyContent:"start" }}
        />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={this.handleChange}
          
          inputProps={{ 'aria-label': 'Without label',
        name:"select",placeholder:"User status"
       }}
          
        >
          
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
       
      
      </FormControl>
      <DatePicker
       label="Creation Date"
       sx={{width:"25ch"}}
        />

        

    </Box>
          
        </div>
        








      </div>


     


    
    </>
  );
  } 
}

export default App;
