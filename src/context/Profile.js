import {useContext, useState} from 'react';

import UserContext from "./UserContext";
function Profile(props) {
    const {user,setUser}=useContext(UserContext);
    //console.log(data);
    const [isLoading,setLoading]=useState(false);
    const handleLogin=()=>{
        setLoading(true);
        setTimeout(()=>{
            setUser({id:1,username:"alperso",password:"123123"})
            setLoading(false);
        },1500)
    }
    const handleLogout=()=>{
        setUser(null);
    }
    return (
        <div>
            {
                !user &&  <button onClick={handleLogin}>{isLoading ? "Loading..." : 'Login'}</button>
            }


            <br/>
            {JSON.stringify(user)}

            {
                user && <button onClick={handleLogout}>Logout</button>
            }

        </div>
    );
}

export default Profile;