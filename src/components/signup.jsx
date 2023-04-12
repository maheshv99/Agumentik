import React,{useState} from 'react';
import './content.css'
import {Link,useNavigate} from 'react-router-dom'


const Signup = () => {
    const navigation=useNavigate();
    const [state, setstate] = useState({
        Email:"",Name:'',State:'',Password:'',Cpassword:''
    });

    const cleanUpFields=()=>{
        setstate({
            Email:"",Name:'',State:'',Password:'',Cpassword:''
        })
    }

    const handlesub=async (e)=>{
        const {Email,Name,State,Password,Cpassword}=state
        e.preventDefault();
        console.log("Hi i am clicked");
        // console.log(state);
        const re=await fetch("https://trello-back-end-beta.vercel.app/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({Email,Name,State,Password,Cpassword})

        });
        const dd=await re;
        alert(`Welcome to mr ${Name} and your email is ${Email} this data is stored in Backend`)
        navigation('/login');
            cleanUpFields();
       
    }
    const handlestate = e => {
        const { name, value } = e.target;
        setstate(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    return (
        <div className='hh' >
            <div className='bd'>
                <form method='POST' onSubmit={handlesub}>
                <fieldset>
                    
                    <h1>Signup</h1>
                    <label for="email">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;: &nbsp;</label>
                    <input type="email" value={state.Email} onChange={handlestate} name="Email" id="email" required/><br/><br />
                    <label for="name">Name &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;: &nbsp;</label>
                    <input type="text" value={state.Name} onChange={handlestate}   name="Name" id="name" required /><br/><br />
                    <label for="state">State  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;: &nbsp;</label>
                    <input type="text" value={state.State} onChange={handlestate}  name="State" id="state" required /><br/><br />
                    
                    <label for="password">Password &nbsp;&nbsp;: &nbsp;</label>
                    <input type="password" value={state.Password} onChange={handlestate}  name="Password" id="password" required /><br/><br />

                    <label for="repassword">Re-pass  &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;</label>
                    <input type="password" value={state.Cpassword} onChange={handlestate}  name="Cpassword" id="repassword" required /><br/>
                   <br />
                    <input type="submit" value="Sign up" className='sub'/><br/><br />

                    <Link to='/login' style={{color:'white'}}>Already have an account? login in here!</Link>

                </fieldset>
            </form> 
            </div>
           
        </div>
    );
}

export default Signup;