import {useContext} from 'react';


import {useTheme} from "./ThemeContext"; //value dark değerine ulaşmak için import etmeliyim

function Header(props) {
    const {thema,setThema} =useTheme();
    return (
        <div>Active Header Thema : {thema} <hr/></div>
    );
}

export default Header;