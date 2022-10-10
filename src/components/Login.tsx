import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const secret = 'test123';
    const [email, setEmail] = useState<string>('test@email.com');
    const [password, setPassword] = useState<string>('');

    /* Login User */
    async function loginUserAsync() {
        console.log('Login User Async:', email);

        const response = await fetch(`http://localhost:3030/users/${ email }`,{ method: 'GET' });
        
        // Request Error
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log('Response Data', responseData);
        const { data } = responseData;

        
        // No user was found
        if(!data.email){
            alert(`No user was found with email: ${ email }`);
            return;
        }

        const isSecretOk = (password === secret ? true : false);

        // Validate User Password
        if(isSecretOk){
            localStorage.setItem('user', data);

            // Redirect to 'Dashboard' Page
            navigate('/dashboard');
        }
        else{ // Wrong Password
            alert('Try Again');
        }
    }

    /*const loginUser = () => {
        console.log('Login User:', userEmail);

        fetch(`http://localhost:3030/users/${userEmail}`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
        });

        localStorage.setItem('user', 'test');
        navigate('/dashboard');
    };*/


    /* Set UserName */
    const emailChange = (e:any) => {
        setEmail(e.target.value);
    }

    /* Set Password */
    const passwordChange = (e:any) => {
        setPassword(e.target.value);
    }

    return(
        <div className="login">
            <h2>Login page</h2>
            
            <p> Please login to continue</p>

            <div>
                <label htmlFor="username"><b>Username</b></label>
                <input type="email" placeholder="Enter Email" name="username" defaultValue={email} onChange={emailChange} />
                <br/>
                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" defaultValue={secret} onChange={passwordChange} />
            </div>

            <button onClick={loginUserAsync}>Login</button>
            <br />
            <hr/>
            <Link to='/signup'>Signup</Link>
            
            
        </div>
    )
}
export default Login;