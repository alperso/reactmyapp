// import React from 'react';
import React,{memo} from 'react';
function Header(props) {
    const {number,data}= props;
    console.log("Header Render Oldu");
    return (

        <div>
            Header - {number}
            <br/>
            <code>{JSON.stringify(data)}</code>
        </div>
    );
}

export default memo(Header);