import React, {useState} from 'react';

function Lists(props) {
    const {contacts} = props;//default obje dönüyor yani contacts arrayim
    const [filterText, setFilterText] = useState('');//her arama işlemini state kullanarak yapacagım
    //boş bir state oluşturup içine atıyorum aşağıda her inputta onchange içinde value değerini gönderiyorum
    const filtered = contacts.filter((item) => {
        // item:fullname ve phone_number
        //some:hernangi biri şarta uyuorsa true dönüyor Objenin key değeri gelicek
        return Object.keys(item).some((key) =>
            item[key] //item.fullname gibi düşünebiliriz.
                .toString()
                .toLowerCase()
                .includes(filterText.toLocaleLowerCase())
        );


    });
    //Nasıl Çalışıyor?
    //elimizdeki kaydı alıyoruz yani eklediğimiz obje içinde verilerimiz var (contacts)
    //ver bunun içnde bi filtreleme yapmalıyım arama yapmak için
    //her defasında bize bir item dönüyor
    //her dönen item bir obje oldugu için bunları key lerine göre ayırıyorum (fullname ve phone number)
    //sonra bu keylerinden fullname ve phone number içinden herhangi birinde (some methodu kullandık burada)
    //filterText.toLocaleLowerCase() yani bizim girdiğimiz değer geçiyorsa returnle dedik

    console.log("filtrelenmiş", filtered);
    return (
        <div>
            <h2>Contact List</h2>
            <br/>
            <input
                type="text"
                placeholder="Filter contact - Liste içinde ara"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
            />

            <ul className="list">
                {
                    filtered.map((contactgelenitem, i) => (
                        <li key={i}>
                            <span>{contactgelenitem.fullname}-</span>
                            <span>{contactgelenitem.phone_number}</span>
                        </li>
                    ))
                }
            </ul>
            <p>Toplam dönen sonuç : {filtered.length}</p>
        </div>
    );

}

export default Lists;