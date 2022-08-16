import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import StateNedir from "./components/StateNedir";
import Contacts from "./components/TelefonRehber/Contacts";
import Apps from "./components/Apps";
import ModuleCss from "./components/ModuleCss";
import UsersFetchAndAxios from "./components/FetchorAxios/Users";
import LibAxios from "./components/FetchorAxios/LibAxios";
import ReactRouter from "./components/ExampleRouter/ReactRouter";
import ReactMemoization from "./components/ReactMemoization/ReactMemoization";
import {ThemeProvider} from "./context/ThemeContext";
import {UserProvider} from "./context/UserContext";
import Button from "./context/Button";
import Header from "./context/Header";
import Container from "./context/Container";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/*<App />*/}
        {/*<StateNedir></StateNedir>*/}
        {/*Telefon Uygulaması*/}
        {/*<Contacts/>*/}
        {/*<Apps/>*/}
        {/*ModuleCSS iki componentte aynı style (aynı title,h1 etiketlerinin property çakışmaması için) çakışmaması için*/}
        {/*<ModuleCss/>*/}
        {/*<UsersFetchAndAxios/>*/}
        {/*<LibAxios/>*/}

        {/*Link Yönlendirme işlemleri*/}
        {/*<ReactRouter/>*/}

        {/*Component Performası için kullanılır, tekrar tekrar render edilmesin diye*/}
        {/*<ReactMemoization/>*/}

        {/*//Context Sarmallama İşlemi Nedir*/}
        <ThemeProvider>
            {/*//Data Sağlayıcı bu içeri ne componenti yazarsam contexdeki bütün verileri üstten alta doğru göndermeden istedigim yerde çekebilirm*/}
            {/*dark diye bir value tutuyorum ve buraya yazdıgım comp.lardan bu değere erişebilecegim*/}
            {/*<Header/>*/}
            {/*<Button/>*/}

            {/*//Thema Switcher (temayı butonla değiştirme) butonları bir tane componentten buraya çekicem container içinde themeprvider dan gele ndatayı kullanacagım*/}
            <UserProvider>
                <Container/>
            </UserProvider>
        </ThemeProvider>
        {/*//Bu ThemeContext.Provider olan Provider i illa burada yapmak zorunda değiliz ThemeContext.js içinde de yapabilirim Temiz gözüksin diye*/}

    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
