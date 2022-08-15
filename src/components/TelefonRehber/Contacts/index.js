import {useEffect, useState} from 'react';
import Lists from  "./List";
import Form from "./Form";
import "../../../App.css";
import "./styles.css";

function Index() {
    const [contacts,setContacts]= useState([
        {
            fullname:"Alper ÖNER",
            phone_number: "50523"
        },
        {
            fullname:"Berat ÖNER",
            phone_number: "50522"
        },
        {
            fullname:"Sevda ÖNER",
            phone_number: "50525"
        },
        {
            fullname:"Alper Şahin ÖNER",
            phone_number: "10522"
        },

        ]);

    useEffect(()=>{
        console.log(contacts);
    },[contacts]);
    return (
        <div className="App">
            <div className="App-container1">
                <Lists contacts={contacts}/>
                <Form
                    addStateContact={setContacts}
                    contacts={contacts}
                />
            </div>

        </div>
    );

}

export default Index;

