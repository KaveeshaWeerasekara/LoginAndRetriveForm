import React, { Component } from 'react'
//import { Typography,Box, InputLabel, TextField, Button } from '@mui/material'
import './SignUp.css'
import Button from '@material-ui/core/Button';
import { Card, CardActions, CardContent } from '@material-ui/core';
//import TextFieldBox from '../../textField/TextFieldBox';
import TextFieldBox from '../../textField/TextFieldBox';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import view from '../view/view';


const labelStyles={ 
    marginBottom:2,
    marginTop:2,
    fontSize:'14px', 
    // fontWeight:'bold',
   
  };

  // const navigate=useNavigate();

 class signup extends Component {


 

    constructor(props){
        super(props);
        this.onChangeName= this.onChangeName.bind(this);
        this.onChangeUserName= this.onChangeUserName.bind(this);
        this.onChangeEmail= this.onChangeEmail.bind(this);
        this.onChangePassword= this.onChangePassword.bind(this);
        this.onChangePasswordconform= this.onChangePasswordconform.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
       
        this.state ={
          name: '',
          username: '',
          email: '',
          password: '',
          passwordConform: ''
       
        }
      }


      onChangeName(e){
        this.setState({
          name:e.target.value
        });
      }

      onChangeUserName(e){
        this.setState({
          username:e.target.value
        });
      }
       
      onChangeEmail(e){
        this.setState({
          email:e.target.value
        });
      }
       
      
       
      onChangePassword(e){
        this.setState({
          password:e.target.value
        });
      }
       
      onChangePasswordconform(e){
        this.setState({
          passwordConform:e.target.value
        });
      }

      onSubmit(e){
       
        e.preventDefault();

        if(this.state.password===this.state.passwordConform){
        const obj ={
          name:this.state.name,
          username:this.state.username,
          email:this.state.email,
          password:this.state.password,
          passwordConform:this.state.passwordConform,
        };
       

        axios.post('http://localhost/reactProject/insert.php',obj)
        .then((res) => {
          console.log(res.data);
         
      })
        .catch(error => {
          console.log(error.response)
      });

      this.setState({
        name: '',
        username:'',
        email:'',
        password:'',
        passwordConform:'',
     
      })
    }
    else{
        alert("Password mismatch")
      }
       
        // console.log(obj);
      }



  render() {

    const myStyle={
      backgroundImage: 
"url('https://wallpaper.dog/large/5525840.jpg')",
      height:'110.5vh',
      marginTop:'-70px',
      fontSize:'50px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };


    return (
      <div style={myStyle}>
      <div className='card'>
        <Card className='cardStyle'>
        <CardContent>
            <div className='signupText'>SignUp</div>
            <TextFieldBox 
            label="Full Name" 
            value={this.state.name} 
            onChange={this.onChangeName}/>

            <TextFieldBox 
            label="UserName"
            value={this.state.username}
            onChange={this.onChangeUserName}/>

            <TextFieldBox 
            label="Email" 
            value={this.state.email} 
            onChange={this.onChangeEmail}/>

            <TextFieldBox 
            type="password" 
            label="Password" 
            value={this.state.password} 
            onChange={this.onChangePassword}/>


            <TextFieldBox 
            type="password" 
            label="Confirm Password"  
            value={this.state.passwordConform} 
            onChange={this.onChangePasswordconform}/>

            </CardContent>


            <CardActions className='CardActions'>
            <Button style={{background:'black',color:'white'}} onClick={this.onSubmit}> Register </Button>
            </CardActions>

        </Card>
           
           
            
      </div>
      </div>
    )
  }
}

export default signup;
