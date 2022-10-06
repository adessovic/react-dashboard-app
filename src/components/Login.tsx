import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    
    const loginUser = () => {
        localStorage.setItem('user', 'test');
        navigate('/dashboard');
    };

    return(
        <div className="login">
            <h2>Login page</h2>
            <p> Please login to continue</p>
            <button onClick={loginUser}>Login</button>
        </div>
    )
}
export default Login;