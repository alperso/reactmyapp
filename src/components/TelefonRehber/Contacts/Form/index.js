import React, {useState,useEffect} from 'react';

const initialFormValues={fullname:"",phone_number:""};
function Form({addStateContact,contacts}) {
    // console.log(addStateContact +"SS");
    const [form,setForm]=useState(initialFormValues);

    const func_onChangeInput=(event)=>{
        //her veri girildiğinde state güncelenecek
        //fullname ve phonenumber
        setForm({...form,[event.target.name]:event.target.value});
    }
    const func_onSubmit=(e)=>{
        e.preventDefault();
        //boş mu diye kontrol ediyorum
        if (form.fullname=== ''|| form.phone_number===''){
            return false;
        }

        addStateContact([...contacts,form]);//önceki contactside ekliyorumki öncekiler silinmesin

        //console.log(form);
        //Form eklendikten sonra inputları boşaltma
        // 1.Yöntem
        // setForm({fullname: "",phone_number: ""});
        // 2.Yöntem
        // setForm(initialFormValues);

    }
    useEffect(()=>{
        //contacts state bittiğinde burası çalışsın
        //form inputları boşaltsın
        setForm(initialFormValues);
    },[contacts]);//contacts state işlemi bitrdiginde

    return (

            <form onSubmit={func_onSubmit}>


            <div className="inputStyle">
                <input
                    name="fullname"
                    placeholder="Adınızı Giriniz"
                    onChange={func_onChangeInput}
                    value={form.fullname}
                />
            </div>
            <div className="inputStyle">
                <input
                    name="phone_number"
                    placeholder="Telefon Numaranız"
                    onChange={func_onChangeInput}
                    value={form.phone_number}
                />
            </div>
            <div  className="addBtn">
                <button onClick={func_onChangeInput}>Ekle</button>
            </div>
            </form>



    );

}

export default Form;