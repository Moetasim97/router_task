import './App.css';
import image from './Screenshot 2023-06-11 222930.png'
import React from "react"
import 'react-dropdown/style.css';
import Modal from  "./Modal"
import DataTable from "./TableData"






class App extends React.Component{
  constructor(){
    super()
    this.state = { modal_state: false,status:["Active","Locked"],flag:false }

    this.close_modal=this.close_modal.bind(this)
    this.updateStateFromModal=this.updateStateFromModal.bind(this)

  }

  close_modal=()=> {
  this.setState({ modal_state: false })
}



  
  toggle_modal=()=>{
    if(this.state.modal_state==false){
      this.setState(()=>{ return {...this.state,modal_state:true}})
      
     
    }
    else if(this.state.modal_state==true){
      this.setState(() => { return { ...this.state, modal_state: false } })
      
    }
  // This function is responsible for updating the state of the parent from the modal child component
  }
  // why does the name of the argument matter?
  updateStateFromModal=(state)=>{
    
    this.setState(()=>{return  {...this.state,state}})
    
  
  }
  // This function supposedly created a new object in the state of the parent component that initializies 
  // the part of the state that gets passed down to the data table component

  filter_data=(ev)=>{
    console.log(ev)
  }
// this method is going to be called by the datatable component to update the state on editing.
  Revitalize_state=(state)=>{
    this.setState(state)
  }
  // As I now understand it, this function's sole purpose is to update the part of the state that corresponds
  // to the modal
  // ++
  // The render function #############################################################################
  render(){
    console.log(this.state)
    

    // enabling the modal child to change the state of the parent component
   

   
      // logic for rendering the modal
      
    
  
  
    return (
      
      <>
      
      <div className="App bg-white">
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
                <button className="btn_class py-2 dropdown-toggle d-flex align-items-baseline justify-content-between"  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                  <div>ATM Settings</div> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-down " viewBox="0 0 14 14">
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
                <button className="btn_class py-2 Name dropdown-toggle d-flex align-items-baseline justify-content-between" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div>Business Setup</div> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-down " viewBox="0 0 14 14">
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
                <button className="btn_class py-2 Name dropdown-toggle d-flex align-items-baseline justify-content-between" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div>User Management</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-down " viewBox="0 0 14 14">
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
       
        <div className="top_div border border-seconndary" > <strong>Good Morning!</strong> {Date().substring(0,25)}</div>

        
        <div className='container_div border'>
          
          
          <div className='d-flex justify-content-between'>
            <div className="h5">User Management</div>
            <button className='main_trigger d-flex p-2 mx-4' onClick={this.toggle_modal}>
             
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                Add New
              </button>
           
          </div>
         <div className='border w-100 smaller_container'>
        
      
              <Modal state={this.state} close={this.close_modal} updateParent={this.updateStateFromModal}/>
                  <DataTable entire_object={this.state} EditParentState={this.Revitalize_state}/>
                  
      </div>
    </div>
        
      </div>


     


    
    </>
  );
  } 
}

export default App;
