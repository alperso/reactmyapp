import {createContext, useState, useEffect, useContext} from "react";

const ThemeContext = createContext();

 const ThemeProvider=({children})=>{
    // const [thema,setThema]=useState("light");//Bir tane state luşturdum sarmaladıgım bütüm componentlerde bu değerini olmasını istiyorum
    const [thema,setThema]=useState(localStorage.getItem('thema') || 'light'); //eger localstorage de bir şeyyoksa default light yazsın sayfaya ilk defa girenin localstroge tanımlanmadıgı için
    const values={
        thema,setThema
    }//bir değişkene attım
    // ThemeProvider içine yazılan her şey (<DİV.....<bUTTUN>.....<) children içine geldi
    useEffect(()=>{
        // Bu tema her değiştiginde bana söyle
        //console.log("Bu tema her değiştiginde bana söyle"+thema);
        localStorage.setItem("thema",thema);
        //Local Storage: JavaScript sitelerinin ve uygulamalarının son kullanma tarihi olmadan,
        //bir web tarayıcısında key/value değerlerinin kaydedebilmesine izin veren bir özelliktir. F12->Application->localStorage

        //Session Storage: Bir web tarayıcısında key/value değerlerini yalnızca bir oturum süresi için tarayıcıya kaydedebilmesine izin
        //veren bir özelliktir. Yani tarayıcı sekmesi kapatıldığında veriler de kaybolur.

        // FARKLARI :session storage yalnızca tarayıcı açıkken (sayfa yeniden yüklendiğindeki veya geri yüklendiğindeki durumlar dahil olmak üzere)
        // bir depolama alanı sağlarken local storage tarayıcı kapatıldıktan sonra da verileri depolamaya devam eder.

        //ŞUAN LOCALDEKİNİ DEĞİŞTİRİYORUM AMA SAYFA F5 OLDUGUNDA TEKRAR ESKİ HALİNE GELİYOR NE YAPMALIYIM?
        //YUKARIDAKİ localstroage varsayılan değerine aktarmalıyım
        // const [thema,setThema]=useState("light");
        // const [thema,setThema]=useState(localStorage.getItem('thema'));

    },[thema])

    return <ThemeContext.Provider value={values}>
        {children}
        {/*//<ThemeProvider>...</ThemeProvider>*/}
        {/*içne yazacagım her şey provider oluyor ve children ile buradan çekiyorum*/}
        {/*//<Button geliyor mesela children oluyor onnu çekiyroum*/}
    </ThemeContext.Provider>;
};

// export default ThemeContext;
//Bir hook tanımlıyorum
 const useTheme=()=> useContext(ThemeContext); //hersayfaya bu işlemi yapıyordum artık gerek yok burada 1 kere tanımlayacagım

export {useTheme,ThemeProvider};