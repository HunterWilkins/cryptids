import {useEffect, useState} from "react";

function Main(props) {
    return(
        <main>
        {
            props.children
        }
        </main>
    )
};

export default Main;
