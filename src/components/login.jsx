import React,{useState} from 'react';
import './content.css';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
      const [formData,setFormData]=useState([]);
    const navigation=useNavigate();

    const handleForm = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      }; 


    const handlesub= async (e)=>{
        e.preventDefault();
        console.log(formData);
        const {Email,Password}=formData;
      
        const response = await fetch('https://trello-back-end-beta.vercel.app/login',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({Email,Password})
        })
   
        const data = await response.json();
      
        const data1 ={name:data.username}
        console.log(data1.name);
        if(data1.name !==undefined){
            alert(`${data1} login successfuly`) 
            navigation('/')
        }else{
            alert("Your are not registerd please Signup !!")
            navigation('/signup');
        }
       
       
    }
    return (
        <div>
         
             <div className='hh'>
            
            <div className='bd'>
                <form onSubmit={handlesub} method='get'> 
                <fieldset>
                   
                    <h1>Login </h1>
                    <label for="email">Email     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp; </label>
                    <input type="email" name="Email" id="email" onChange={handleForm} autoFocus required/><br/>
                    <br/>
                    <label for="password">Password  :&nbsp;&nbsp; </label>
                    <input type="password" name="Password" id="password" onChange={handleForm} autoFocus required /><br/><br/>

                    
                   
                    <input type="submit" value="Login" className='sub'/><br/><br/>
                    <Link to='/' style={{color:'white'}}>Back to home page!</Link>

                </fieldset>
            </form> 
            </div>
        </div>
        </div>
       
    );
}

export default Login;