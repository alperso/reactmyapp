import React, {useState} from 'react';

function Counter() {
    //Bir input içinde statei güncelleme işlemi yapacagız
    // const [name, setName] = useState('');//boş bir state oluşturuyorum
    // const func_onChangeName=(event)=>{
    //     setName(event.target.value)
    // }
    const [form,setForm]=useState({name:"",surname:""});
    const onChangeInput=(e)=>{
        //Tek Fonksiyonda input içinden state değiştirme
        // console.log(e.target.name);//input name geldi
        setForm({...form,[e.target.name]:e.target.value})

    };
    const [surname, setsurname] = useState('');//boş bir state oluşturuyorum
    return (
        <div>
            {/*<label htmlFor="namelbl">Please enter name*/}
            {/*    <br/>*/}

            {/*    <input type='text' name="name" value={name}/>*/}
            {/*    <br/>*/}
            {/*    <input type='text' value={name} onChange={(event)=>setName(event.target.value)}/>*/}
            {/*    <br/>*/}
            {/*    <input type='text' value={name} onChange={func_onChangeName}/>*/}
            {/*    {name}     <br/>*/}

            {/*</label>*/}
            {/*<label htmlFor="namelbl1">Please surname*/}
            {/*    <br/>*/}
            {/*    <input type='text' value={surname}/>*/}
            {/*    <br/>*/}
            {/*    <input type='text' value={surname} onChange={(event)=>setsurname(event.target.value)}/>*/}
            {/*    <br/>*/}

            {/*</label>*/}
            <label htmlFor="namelbl2">Please 1 function
                <br/>
                <input  name="name" value={form.name} style={{backgroundColor:'lightgreen'}} onChange={onChangeInput}/>
                <br/>
                <input  name="surname" value={form.surname} style={{backgroundColor:'lightgray'}} onChange={onChangeInput}/>
                {form.name} -  {form.surname}
            </label>



        </div>
    );

}

export default Counter;