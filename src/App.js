//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";//Header Component
import User from "./components/User"; //User Component
import React from "react";
// const name="Alper";
const isLoggedIn=false;

const uniqArray=[
    {
        id:1,
        name:'Ahmet'
    },
    {
        id:2,
        name:'Alper'
    },
    {
        id:3,
        name:'Can'
    },
    {
        id:4,
        name:'Deni'
    }
    ];
function App() {

    //return  React.createElement('div',null,"Hello ALper");
    return(
        // <React.Fragment>
        // <Header/>
        //     <p>Alper</p>
        // </React.Fragment>
        <div>
            {/*Props*/}
            {/*Component parametre gönderme işlemi yapmak için kullanılır*/}


            <Header></Header>
            <User
                name={"alper"}
                surname="Öner"
                depart={"Bilisim"}
                age={"10"}
                isLoggedIn={false}
                friends={['Ahmet',"Mehmet","Caner","Caner2","Caner3"]}
                location={{
                    title:"Ataşehir Ankara",
                    zip:3453
                }}
                friendsArray={uniqArray}

            />
            <span>
                {/*{isLoggedIn && `isLoggedIn true ${name}`  }*/}
                {/*/!*false ise*!/*/}
                {/*{!isLoggedIn && `Giriş Yapmadınız`  }*/}
                {/*//Koşullu render*/}
                {/*{isLoggedIn ? `isLoggedIn True 2 .Yöntem`:`False`}*/}

            </span>
            {/*<h1> {name}</h1>*/}
            {/*<p> {`Benim  Adim ${name}, asss` } </p>*/}

            {/*<p className="xyz">*/}
            {/*    Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
            {/*    Accusamus accusantium adipisci animi autem cum cumque delectus dicta,*/}
            {/*    exercitationem, fugit ipsa libero nihil quas rem sequi sit tempore velit*/}
            {/*    vitae voluptas!*/}
            {/*</p>*/}
            {/*<label htmlFor="myinput">*/}
            {/*    name*/}
            {/*    <input id="myinput"/>*/}
            {/*</label>*/}
        </div>

    );

  // return (
  //     // <div>
  //     //   <h1> Hello React</h1>
  //     //   <Header></Header>
  //     // </div>
  //
  //   // <div className="App">
  //   //   <header className="App-header">
  //   //     <img src={logo} className="App-logo" alt="logo" />
  //   //     <p>
  //   //       Edit <code>src/App.js</code> and save to reload.
  //   //     </p>
  //   //     <a
  //   //       className="App-link"
  //   //       href="https://reactjs.org"
  //   //       target="_blank"
  //   //       rel="noopener noreferrer"
  //   //     >
  //   //       Learn React
  //   //     </a>
  //   //   </header>
  //   // </div>
  // );
}

export default App;
