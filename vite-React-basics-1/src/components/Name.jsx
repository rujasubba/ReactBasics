import React from "react";

function Name(props) {
    console.log(props);
    return <div>{props.name}</div>
}

export function Address() {
    return(
        <div>
            <ul>
                <li>Country- Nepal</li>
                <li>State- Provience1</li>
                <li>Hometown- Jhapa</li>
            </ul>
        </div>
    )
}

export default Name;