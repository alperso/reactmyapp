import React,{useEffect,useState} from 'react';
import axios from "axios";

function LibAxios(props) {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        // Component Mount Edildiğinde burası çalışacak
        axios('https://jsonplaceholder.typicode.com/users')
            .then((res)=>res.data)
            .then(data=>{
                setUsers(data);//burası bittiginde loading false olacak ve ekrandaki loading yazısı silinecek
                setisLoading(false);
            })
            .catch(e=>console.log(e))
        // .finally((e)=>isLoading(false)) //hata olursa catch düşecegi için
        // loading false olmadıgı için ekranda gözükecek finally içinde böyle yapabiliriz. hata olsa bile loading çalışsın
    },[]);

    //veri yüklenmeye çalışırken loading bekleyelim
    const[isLoading,setisLoading]=useState(true);

    return (
        <div>
            Fetch and Axios Lib
            FakeApi Users Componentim Mount edildiği anda çekilsin
            {
                isLoading && <div>Loading.....</div>
            }
            {
                users.map((item,key)=>(
                    <div key={key}>
                        {item.name}
                    </div>
                ))
            }
        </div>
    );
}

export default LibAxios;