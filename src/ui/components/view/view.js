import React, { Component } from 'react'

import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

 class view extends Component {

constructor(props){
  super(props)
    this.state={
      data:[]
    }
}
componentDidMount(){
  axios.get('http://localhost/reactProject/view.php').then(res=>{
    this.setState({data:res.data});
  });
}


  render() {
    return (
      <div className='maincontainer'>
       <h1 className="mr-5 ml-5 mt-5">Therichpost.com</h1>
        <div className="container mb-5 mt-5 text-left">
        
        <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((result) => {
            return (
             
                 <tr>
                  <td>{result.sid}</td>
                  <td>{result.name}</td>
                  <td>{result.username}</td>
                  <td>{result.email}</td>
                </tr>
             
            )
          })}
           
            
          </tbody>
        </table>
       
            
      </div>

      </div>
    )
  }
}

export default view;
