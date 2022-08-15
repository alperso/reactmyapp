import {useState, useEffect} from 'react';

//Component Lifecycle

function EuseEffectExample() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('Alper');
    //Ben bu state güncellenemesi halini yakalamak istiyorum
    //useEffect kullanmalıyım

    // useEffect(() => {
    //     console.log("State Güncellendi");
    // });

    //componentDidMount edildiğinde yanu bu EuseEffectExample bittiğinde
    useEffect(() => {
        console.log("Component Mount Edildi");
        console.log("Component Mount Edildi ve setNumber ile number 1 saniyede para artacak");
        const interval = setInterval(() => {
            setNumber((n) => n + 1)
        }, 1000)

        //return ()=> console.log("Component unMount Edildi");
        return ()=> clearInterval(interval);
    }, []);

    //hangi state dinlemek istiyorsam
    // useEffect(() => {
    //     console.log("name state değişti");
    // }, [name]);


    return (
        <div>
            <h2>{number}</h2>
            <h2>{name}</h2>
            <button onClick={() => setNumber(number + 1)}>PlusClick</button>
            <button onClick={() => setName('SET')}>setName</button>
        </div>
    );
}

export default EuseEffectExample;

