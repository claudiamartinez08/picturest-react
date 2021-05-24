import PinCard from "../PinCard/pinCard"
import "./pinList.css"
import { useState, useEffect } from "react";
import NewPin from "../NewPin/NewPin";
import "../NewPin/NewPin.css";


const PinList = ({cards}) => {

const url= "http://localhost:5000/pins";
const [pins, setPins] = useState([]);
const [isClicked, setIsClicked] = useState(false);
const onClick = () => setIsClicked(!isClicked);
console.log(pins.reverse());
    useEffect(() => {

        fetch(url) 
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }else {
                    throw Error(response.statusText);
                }
            })
            .then ((data) => {
                setPins(data);
            }
    
            )} , []);


    return (
        <div>
            <p className="title">Pins</p>
            <img onClick={onClick} className="addPin" src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yNTYgNTEyYy0xNDEuMTY0MDYyIDAtMjU2LTExNC44MzU5MzgtMjU2LTI1NnMxMTQuODM1OTM4LTI1NiAyNTYtMjU2IDI1NiAxMTQuODM1OTM4IDI1NiAyNTYtMTE0LjgzNTkzOCAyNTYtMjU2IDI1NnptMC00ODBjLTEyMy41MTk1MzEgMC0yMjQgMTAwLjQ4MDQ2OS0yMjQgMjI0czEwMC40ODA0NjkgMjI0IDIyNCAyMjQgMjI0LTEwMC40ODA0NjkgMjI0LTIyNC0xMDAuNDgwNDY5LTIyNC0yMjQtMjI0em0wIDAiLz48cGF0aCBkPSJtMzY4IDI3MmgtMjI0Yy04LjgzMjAzMSAwLTE2LTcuMTY3OTY5LTE2LTE2czcuMTY3OTY5LTE2IDE2LTE2aDIyNGM4LjgzMjAzMSAwIDE2IDcuMTY3OTY5IDE2IDE2cy03LjE2Nzk2OSAxNi0xNiAxNnptMCAwIi8+PHBhdGggZD0ibTI1NiAzODRjLTguODMyMDMxIDAtMTYtNy4xNjc5NjktMTYtMTZ2LTIyNGMwLTguODMyMDMxIDcuMTY3OTY5LTE2IDE2LTE2czE2IDcuMTY3OTY5IDE2IDE2djIyNGMwIDguODMyMDMxLTcuMTY3OTY5IDE2LTE2IDE2em0wIDAiLz48L3N2Zz4=" />
            {isClicked && <NewPin setPins={setPins}/>}
          <br></br>
            <div className="pinContainer">
                {pins && pins.slice(-10).map((card) => (
                <PinCard card={card}/>
                ))}
            </div>
            
            
        </div>
    )
}

//pins&&pins= si hay algo dentro de pins, entonces haz el map!

export default PinList;