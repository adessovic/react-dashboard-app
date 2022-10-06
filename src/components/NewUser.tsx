import { useState } from 'react';
import { UserType } from './Users';
import { Link } from 'react-router-dom';

const NewUser = () => {

    const [newUserData, setNewUserData] = useState<UserType>({ id: 0, name: '', email : '', phone: '' });
    
    const handleChange = (e:any) => {
        //console.log('Field Change', { field : e.target.name, value : e.target.value });
        const _newUserData = {...newUserData} as any;
        _newUserData[e.target.name] = e.target.value;
        setNewUserData(_newUserData);
    }

    const handlePostData = () => {
        console.log('Save New User:', newUserData);
        alert('New User was Added');
    }

    return(
       <div className="new-user">
         <h1>Add a new user</h1><br />

         <Link to="/users">Go back</Link>

         <div className="new-user__form">

            <div className="new-user__form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={handleChange} value={newUserData.name} placeholder="John Doe"  />
            </div>
            <div className="new-user__form-group">
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" onChange={handleChange} value={newUserData.phone} placeholder="+46"  />
            </div>
            <div className="new-user__form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={handleChange} value={newUserData.email} placeholder="email@adress.com"  />
            </div>
            <div className="new-user__form-group">
                <button onClick={handlePostData}> Save user data </button>
            </div>
            
         </div>

       </div>
    )
}
export default NewUser;