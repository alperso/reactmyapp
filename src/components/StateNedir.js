// State Nedir ?
//     Component içinde çalışan değerinin değişme potansiyeli olan (btna basılınca veya form tıklanınca gibi)
// bütün verileri tutan JS objesidir.Componentin herhangi bir anında potansiyel değişim gerçekleşirse state değişir, değer değişince
// component tekrar render edilir ve değişim aynen gerçekleşir.

import React, {useState} from 'react';
import Counter from "./Counter";
import InputExample from "./InputExample";

import EuseEffectExample from "./useEffectExample";

function StateNedir() {
    const [isVisible,setIsVisible]=useState(true);
    const [name, setName] = useState('Alper');//state imi oluşturdum ve açmış oldugum default state parametre verebiliyorum
    // setName: Bu statein değerini değiştirmek için kullanılır.
    const [age, setAge] = useState(25);//varsayılan age 25 oldu
    //STATE DEĞİŞTİĞİ ANDA COMPONENT TEKRAR OLUŞUR!!!!!!!!!!!!!!!
    const [friends, setFriends] = useState(['Alper', 'Berat']);//VARSAYILAN OLUŞTURUULDUGUNDA ARRAY OLSUN İKİTANE VALUE OLSUN
    const [adress, setAdress] = useState(
        {
            title: "Ankara",
            zip: 3423
        },
        {
            title: "İstanbul",
            zip: 60102
        }
    );
    return (
        <div>
            <h1>Merhaba {name}</h1>
            <h2>Merhaba {age}</h2>

            <button onClick={() => setName("Butona basıldı ve State name Değiştirdim")}>ChangeName</button>
            <button onClick={() => setAge(30)}>ChangeAge</button>
            <hr/>

            <h3>Friends</h3>
            {
                friends.map((friendsitem, key) => <div key={key}>{friendsitem}</div>)
            }
            <button onClick={() => setFriends(['Bütün state sildim kendimi ekledim'])}>AddFriends</button>
            {/*//önceki verileri korumak istiyorsam ...friends*/}
            {/*//yazmalıyım yoksa hepsini slip yeniitembasar*/}
            <button onClick={() => setFriends([...friends, 'Önceki state korudum sonuna eklendim'])}>LastAddFriends
            </button>
            <button onClick={() => setFriends(['Fyeniİtem', ...friends])}>FirsAddFriends</button>
            <hr/>
            <h2>Adress Object State</h2>
            <div>
                {/*{*/}

                {/*    adress.map(*/}
                {/*        (item1, key) => (*/}
                {/*            <div key={key}>{item1.title}</div>*/}
                {/*        )*/}
                {/*    )*/}
                {/*}*/}
                {adress.title} - {adress.zip}

                <button onClick={() => setAdress({title: "Amasya", zip: 2323})}>SetAdres</button>
                {/*//sadece güncellenecek title için bunu yazıyoruz*/}
                <button onClick={() => setAdress({...adress, title: "Antalya"})}>SetAdddAdres</button>
            </div>
            <hr/>
            {/*<Counter></Counter>*/}
            <hr/>
            {/*<InputExample></InputExample>*/}
            <hr/>
            {
                // isVisible True ise burayı göster demek
                isVisible &&  <EuseEffectExample/>
            }


            <button onClick={()=>setIsVisible(!isVisible)}>Componenti Kaldır</button>
        </div>
    );
};

export default StateNedir;