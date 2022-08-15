// import React from 'react';
import React,{memo} from 'react';
function Header(props) {
    const {number,data,setGonder}= props;
    console.log("Header Render Oldu");
    return (

        <div>
            Header - {number}
            <br/>
            <code>{JSON.stringify(data)}</code>
            <button onClick={setGonder}>Headerda Artırıyor Ama Render Edilyıor</button>
        </div>
    );
}

export default memo(Header);