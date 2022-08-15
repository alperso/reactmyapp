import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function User() {
    const [isLoading, setLoading] = useState(true);
    const {id} = useParams(); // bu sayfaya link içinde gelen idyi aldım
    const [user, setUser] = useState([]);//gelen id ye göre bilgilerini alacagım için state oluşturdum

    //Nasıl aalcagım peki
    // ComponentDidMount ile (useEffect functiondaki kullanımı)
    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {

                    //console.log(res.data.length)

                    setUser(res.data)
                }
            )
            .catch((e) => {
                //console.log("Hata");
                setUser([]);

            })
            .finally(() => setLoading(false))
    }, [id]);

    return <div>
        <h2>User Detail</h2>
        {
            isLoading && <h3>Loading...</h3>
        }
        gelenid: {id}
        <br/>
        {
            //loading yoksa burayı göster
            !isLoading && JSON.stringify(user)
        }
        <br/>
        <br/>
        <br/>
        <Link to={`/users/${parseInt(id) - 1}`}>{parseInt(id) - 1}-Before User</Link>
        <Link to={`/users/${parseInt(id) + 1}`}>Next User ->{parseInt(id) + 1}</Link>


    </div>;
}

export default User;