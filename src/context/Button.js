import React, {useContext} from 'react';

// import ThemaContext from "./ThemeContext"; //value dark değerine ulaşmak için import etmeliyim
import {useTheme} from "./ThemeContext";

function Button(props) {
    //const data = useContext(ThemaContext);
    //console.log(data);
    //Context
    //Ozaman şu demek oluyor import ve useContext işlemini hangi componentte yaparsam yapayım ContextApi gibi sarmalanmış verilerden
    //istedigimi çekebilirm
    // const {thema, setThema} = useContext(ThemaContext);
    const {thema, setThema} = useTheme();


    return (
        <div>

            {/*Button - {data} -*/}
            Active Thema: {thema}
            {/*//Active Thema: {data.thema}*/}
            <button onClick={() => setThema(thema === "light" ? "dark" : "light")}>Change Thema</button>
            {/*Buradan contextin verisini değiştirdigim için sarmallanmış olan tüm componentlerde değişecek örn: Header*/}


        </div>
    );
}

export default Button;