import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { UserType } from './Users';

const SingleUser = () => {

    const params = useParams();

    const [user, setUser] = useState<UserType>();

    useEffect(() => {
        console.log('User', params);
        const UserApiEndpoint = `https://jsonplaceholder.typicode.com/users/${params.userId}`;

        fetch(UserApiEndpoint)
            .then(response => response.json())
            .then(json => setUser(json));
    }, [params]);

    return (
        <>
        <Link to="/users">Go back</Link>
        {
            user && (

                <div className="users__card">

                    <h1><span className="normal">{user.name}</span> </h1>
                    <p>Email: <span className="normal">{user.email}</span></p>
                    <p>Phone: <span className="normal">{user.phone}</span></p>
                    
                </div>
            )
        }
        </>
    )
}
export default SingleUser;