//ReactMemoization : React Componentlerin performasını artırmak için kullanılır.
// Memoization ile siz bir fonksiyonu çağırdığınızda uygulamanız fonksiyondan dönen sonucu kaydeder.
// Böylelikle siz fonksiyonu çağırdığınızda içerideki işlemleri tekrardan çalıştırmaktansa, kaydetmiş olduğu sonucu direkt olarak döndürür.
//React’ta ise memoization tekniğini kullanarak, componentlerin veya
//fonksiyonların gereksiz yere tekrar tekrar render edilmesini veya oluşturulmasını engelleyebiliriz.
//Class Kullanımı-------------------
// import React from 'react';
//
// const Header = React.memo((props) => {
//     console.log("Rendering:Header component");
//     return (
//         <div style={{ background: '#040404' }}>
//             <img src={props.imgPath} alt="hey logo" style={{ width: "100%", height: 200 }}></img>
//         </div>
//     )
// })
//
// export default Header;
// or
// export default React.memo(Header);
// ------------------------


//Bir buton yapalım ve artırma olsun (number) state tanımlı oldugu için number değişi değişince return (....) içindekiler tekrar çalışıyor
//çalışıtııg için componentler tekrar render ediliyor ben bunu istemiyorum
//Ne yapacagım ?
// <Header/> Componenti içindeki export yaptımızı kısma Memo ile sarmalamam gereklidir.
// Örn:
// import React from 'react';
//
// function Header(props) {
//     return (
//         <div>Header</div>
//     );
// }
//
// export default React.Memo(Header);

// Peki bu header ne zaman render edilecek?
//     Böyle kalmayacak tabiki <Header  .../> içine yazdıgımız property ler ne zaman render edilirse o zaman render edilecek

//useMemo NEDİR?????---------------------------


import React, {useState,useMemo} from 'react';
import Header from "./components/Header";


function ReactMemoization(props) {
    const [number, setNumber] = useState(0);
    // const data={name:"Alper"};
    // const data =useMemo(()=>{
    //     return {name:"Alper"}
    // },[]); //bu data ne zaman hesaplanacak tekrar ?
    //deps:[] de belirtmiş oldugum parametre değitiginde değişecek
    //deps:[number] number her değiştiignde burası değişecek

    const data =useMemo(()=>{
        return calcObject();
    },[]);

    return (
        <div>
            {/*<Header/>*/}
            {/*<Header number={number < 5 ? 0 : number}/>*/}
            {/*<Header number={number < 5 ? 0 : null} /> */}
            {/*//Number 5 den küçükse 0 olarak propertyden header componentine props olarak göndersin demek */}
            {/*//Eğer küçükse null dönecek ve render edilmeyecek React.Memo kullandıgımiçin
            0 dönecek 5>= oldugunda sürekli 0 gönderdiği için ilk sefer render edilecek sonra aynı property oldugu için render edilmeyecek
            */}

            {/*useMemo*/}
            <Header number={number < 5 ? 0 : null} data={data}/>
            {/*data objemi componentde veri olarak gönderiyorum ama memo yapsam bile header içinde sürekli data gittiği için render ediliyor
            bunu çözmek için useMemo kullanmalıyım
            React memo ile sarmaladıgımız componente proplar değişmediği sürece o component baştan render olmaz demiştik ifade ayni gidiyor ama
            render ediliyor.
            Obje gönderiyorum {}==={} FALSE bir obje bbir objeye denkligini sorgularsam false dönecektir Bellek üzerindekiler referansları farklı
            aynı işlem []===[] false olur
            Ben butona bastıgımda number sürekli değişiyor ve propsda otomatik setnUMBER(number+1) yaptıgım için değişiyor.
            Değiştiği için     const data={name:"Alper"}; referansı da değişiyor. Oyüzden render ediliyor memo false çıktısını aldıgı içinde denk olmamış diyip
            tekrar render ediyor. Nasıl kurtulacagız?     1.yol->const data={name:"Alper"}; dataasını fonksiyon dışında tanımlarsam tekrar render edilmezz
            2-.yol>(illa içeride yazmam gerekiyorsa) useMemo Hook kullan useEffect gibi
            const data =useMemo(()=>{
                return {name:"Alper"}
                },[])
            */}
            <hr/>
            <h1>{number}</h1>
            <button onClick={() => setNumber(number + 1)}>Artır</button>
        </div>
    );
}
function calcObject() {

    return {name:"Alper ÖNER"}
}

export default ReactMemoization;