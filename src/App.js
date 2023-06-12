
import './App.css';
import image from './Screenshot 2023-06-11 222930.png'
import React from "react"
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={}
  }
  render(){
    return (
      <div>
      <div className="App bg-white">

        <div className='sidebar '>
          <img src={image} />
        <div class="form-outline">
          <input type="search" id="form1" className=" searchbar" placeholder="Quick Access" aria-label="Search" />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
        </div>

        <div className='d-flex flex-column mt-5'>
        <div className='text-secondary px-2' align="start"> Settings</div>
              <Dropdown
                arrowClosed={<span className="arrow-closed" />}
                arrowOpen={<span className="arrow-open" />}
              />;
        </div>
            
      </div>


      <div>say hello to my ltertagasdg  </div>


    </div>
    </div>
  );
  } 
}

export default App;
