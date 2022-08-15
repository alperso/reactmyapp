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

        <ReactMemoization/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
