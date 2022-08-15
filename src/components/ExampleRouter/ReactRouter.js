//React Router kullandıgımız zaman sayfa submit olmadan componentlerde değiştirebiliyoruz
import React from "react";
//pages
import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User"; //url parametre örneği için
import Error404 from "./components/Error404";
import {BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";

function ReactRouter() {
    const {isActive}=true;
    return (
        <div>

        {/*Link Kullanmak istediğimiz yerde en dışa BrowserRouter yazmamız gereklidir.*/}
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact to="/"
                                     activeStyle={{backgroundColor:"lightblue"}}
                            >Home</NavLink>
                            {/*<br/>*/}
                            {/*<a href="/">Sayfa Komple yenileniyor Bunu istemediğimiz için Link kullanıyoruz</a>*/}
                        </li>
                        <li>
                            {/*strict :/about/ olanıda kabul ederim demek*/}
                            <NavLink strict to="/about"
                                    // className={isActive=>"nav-link"+(!isActive ? " unselected":"")}
                                     activeStyle={{backgroundColor:"lightblue"}}
                            >About</NavLink>
                            {/*<br/>*/}
                            {/*<a href="/about">a href About</a>*/}
                        </li>
                        <li>
                            <NavLink to="/users"
                                     //activeStyle={{backgroundColor:"lightblue"}}
                                     style={isActive => ({
                                         textDecoration:'none',
                                         backgroundColor: isActive ? "lightgreen" : "lightyellow"
                                     })}
                            >Users</NavLink>
                        </li>
                        {/*<li>*/}
                        {/*    <Link to="/users">Users</Link>*/}
                        {/*</li>*/}
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. Buna uyuyorsa link buna eşleş gibi switch case gibi düşünebiliriz
            sadece Linkler içinde arama yapark istenilen sonuca yönlendiriyor*/}
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/> {/*Eğer Endpoint about ise component olan About çalıştır demiş*/}
                    <Route path="/users" component={Users}/>
                    {/*<Route path="/user/:id" component={User}/>*/}
                    <Route path="*" component={Error404}/>{/*Buradaki pathlerden başka bir sayfaya gidilirse(uyuşmadıysa yukarıdakilerden) 404.html componentine atsın*/}



                    {/*
                     <Route path="/about" component={About}/> {/*Eğer Endpoint about ise component olan About çalıştır demiş
                     <Route path="/users" component={Users}/>
                     <Route path="/" component={Home}/>

                    En sona Neden / pathi yazdım ?
                    Switch girerken path olana bakıyor about değil users değil en son home bakıyor */}
                    {/*Ama path / olanu en başa yazsaydım diğer pathlerdede /about,/home... /(slash) oldugu için sayfa linki*/}
                    {/*değişecek ama component içeriği home da kalacak tı*/}
                    {/* En sona path / yazmamın sebebi budur.
                    Peki ne yapacagız?
                       Exact Yazmalıyız Sadece istenilen sayfaya gitsin

                    <Route path="/" exact component={Home}/>
                    <Route path="/about"  component={About}/>
                    <Route path="/users" component={Users}/>
                    */}


                    {/*Uzun Kullanımı*/}
                    {/*<Route path="/about">*/}
                    {/*    <About />*/}
                    {/*</Route>*/}
                    {/*<Route path="/users">*/}
                    {/*    <Users />*/}
                    {/*</Route>*/}
                    {/*<Route path="/">*/}
                    {/*    <Home />*/}
                    {/*</Route>*/}

                {/*Bir Route' parametre Nasıl Gönderirim?*/}


                </Switch>
            </div>
        </Router>
        </div>
    );
}

// function Home() {
//     return <h2>Home</h2>;
// }
//
// function About() {
//     return <h2>About</h2>;
// }
//
// function Users() {
//     return <h2>Users</h2>;
// }
export default ReactRouter;