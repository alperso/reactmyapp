import {useContext} from 'react';
import Button from "./Button";
import Header from "./Header";

import {useTheme} from "./ThemeContext";
import Profile from "./Profile";

function Container() {
    const {thema} = useTheme();
    // console.log(thema); aynı değişken isimli olmalı gereklidir. theme olmaz mesela

    return (
        //eğer thema dark ise dark css cağiracagım
        <div className={`context ${thema === 'dark' ? 'dark' : ''}`}>
            {/*Şuan default light ama ben dark yapıp sayfayı yeniledigimde dark kalmayacak sabitlemem lazım nasıl ?*/}
            {/*bir state tanımlayıp değişkeni onun içine atsam çözebilirim.*/}
            {/*bu statei context içinde yazmalıyım*/}
            thema:{thema}
            <Header/>
            <Button/>
            <Profile/>
        </div>
    );
}

export default Container;
