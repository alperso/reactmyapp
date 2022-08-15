import React from 'react';
import PropTypes from "prop-types";

function User(props) {
    //console.log(props);
    const {name, surname, age, depart, isLoggedIn, friends, friendsArray,location} = props;

    if(!isLoggedIn){
        return (
            <div>Early Return -Giris Yapmadınız...</div>
        )

    }
    return (
        <div>
            <hr/>
            Merhaba User Componentim
            <h1>{name}</h1>
            <h2>{props.surname}</h2>
            <p>{props.age}</p>
            <p>{props.depart}</p>
            <p>{props.isLoggedIn}</p>
            {!props.isLoggedIn ? `isLoggin False ise :${props.depart} / ${props.age}` : null}
            {/*//Gelen arrayi yazdırmak isityorum map ile yazdıracagım*/}
            {/* //bana map içinde bir friend geliyor yani item*/}

            <br/>
            Listem------------------
            {/*
            En dıştaki elemana yani div etiketine bir key
            tanımlamalıyım yoksa bunu benzersiz kabul etmiyor ve consolde uyarı alıyorum
            İlla bunun adı Index olmak zorunda deği

            */}
            {/*{*/}
            {/*    friends.map(*/}
            {/*        //kendi sayıyor Index ile*/}
            {/*        (friend,Index)=>*/}
            {/*            <div key={Index}>*/}
            {/*                {Index}-{friend}*/}
            {/*            </div>*/}
            {/*    )*/}
            {/*    //illa Index vermek zorunda değiliz*/}
            {/*    //friends altında benzersiz bir ifade varsa onu buraya entegre edebiliriz.*/}
            {/*    //örn:*/}
            {/*}*/}


            { friendsArray && //bu array gelirse göster demek
            friendsArray.map(
                    //array içinde dönen her şey item oluyor sonra bu itemi yazdırıyorum
                    (item) => {
                        const x = item.id + 2;
                        return (<div key={item.id}>
                            {item.id}-{item.name} - {x}
                        </div>);
                    }
                )
            }

            {/*//oneOfTypes : Birden fazla veritipinin gönderimi için kullanılır*/}
            {/*Mesela*/}
            {/*<User*/}
            {/*    name={"alper"}*/}
            {/*    surname="Öner"*/}
            {/*    depart={"Bilisim"}*/}
            {/*    age={10}*/}
            {/*    isLoggedIn={false}*/}
            {/*    friends={['Ahmet',"Mehmet","Caner","Caner2","Caner3"]}*/}

            {/*/> */}
            {/*age 10 gönderirken 10 la işlem yapılmacayacksa bunu hem string hem int kabul  eddebiliriz.*/}
            {/*Peki nerede ? yapacagız*/}
            {/*aşagıda Proptypes kısmında oneOfTypes Kullanabiliriz.*/}


            <hr/>
            {location.title} - {location.zip}
        </div>

    );
}
User.propTypes={
    name:PropTypes.string, //beklenen string (expected `string`)
    surname:PropTypes.string.isRequired,
    isLoggedIn:PropTypes.bool,
    // age:PropTypes.number,
    age:PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    friends:PropTypes.array,
    location:PropTypes.shape({
        //Obje olarak gönderdigim datalarda veri kontrolü yapmak için kullanılır
        title:PropTypes.string,
        zip:PropTypes.number
    })
}
User.defaultProps= {
    //name user comp propertysinde gelmezse default kısmı çalışır
    name:"Default Props Kullanıldı",

}

export default User;