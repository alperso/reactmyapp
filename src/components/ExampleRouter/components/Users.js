import {NavLink,Link,Switch,Route,useRouteMatch} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import User from "./User";


function Users() {
    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const { path, url } = useRouteMatch();//yukardaki linki almak için kullanıyorum
    // console.log(path);
    // console.log("-------------");
    // console.log(url);
    //url : localhost:8080/users
    //path :localhost:8080/users/10



    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
            .finally(() => setLoading(false))
    }, [])
    return <div>
        <h2>Users</h2>
        {
            isLoading && <h3>Loading...</h3>
        }
        <ul>
            {/*<li>*/}
            {/*    <Link to="/user/1">User id :1</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <Link to="/user/2">User id :2</Link>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <Link to="/user/3">User id :3</Link>*/}
            {/*</li>*/}
            {
                users.map((user) => (
                    <li key={user.id}>
                        <NavLink activeClassName="active" activeStyle={{backgroundColor:"red"}} to={`${url}/${user.id}`}>{user.name}</NavLink>
                    </li>
                ))
            }
        </ul>
        <Switch>
            <Route exact path={path}>
                <h3> path : /users olarak geldi. Please select a user.</h3>
            </Route>
            <Route path={`${path}/:id`} component={User}/>
        </Switch>

    </div>;
}

export default Users;