import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.module.scss";
//import "./Signup.css";

const Signup = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    /* Signup User */
    async function signupUser() {

        console.log('Signup User:', {
            user : {
                email, password
            }
        });

        const hasPassword = password.trim();
        console.log('hasPassword',hasPassword);

        // Check if user set a Password
        if(!password || !hasPassword){
            alert('Try Again');          
        }
        else{ 
            // Redirect to 'Login' Page
            alert('Signup OK!');
            navigate('/login');
        }
    }


    /* Set User Email */
    const emailChange = (e:any) => {
        setEmail(e.target.value);
    }

    /* Set User Password */
    const passwordChange = (e:any) => {
        setPassword(e.target.value);
    }


    return(
        <div className="login">
            <h2 className="title">Signup</h2> 

            <div>
                <label htmlFor="username"><b>Email</b></label>
                <input type="email" name="username" defaultValue='' onChange={emailChange} />
                <br/>
                <label htmlFor="password"><b>Password</b></label>
                <input type="password" name="password" defaultValue='' onChange={passwordChange} />
            </div>

            <button onClick={signupUser}>Signup</button>
            
        </div>
    )
}
export default Signup;