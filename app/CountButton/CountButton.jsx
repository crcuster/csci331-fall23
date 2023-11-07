import { useState, useEffect } from "react"
import "./CountButton.css"

export default function CountButton(props){
    let [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1 * props.mult)
    }

    function rolloverCount(){
        if (count > 10){
            setCount(0)
        }
    }

    const buttonStyle = {
        backgroundColor: "pink",
        color: "white",
        borderRadius: "10px",
        padding: props.size+"rem",

    }

    useEffect(rolloverCount, [count])

    return( 
        <div>
            <button style={buttonStyle} onClick={handleClick}>{props.name}</button>
            <div>{count}</div>
        </div>
    )
   
}
