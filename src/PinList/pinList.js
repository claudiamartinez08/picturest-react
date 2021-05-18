import PinCard from "../PinCard/pinCard"
import "./pinList.css"
import { useState, useEffect } from "react";


const PinList = ({cards}) => {

const url= "http://localhost:5000/pins";
const [pins, setPins] = useState(null);

    useEffect(() => {

        fetch (url) 
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
        <div className="pinContainer">
           {pins && pins.slice(0,10).map((card) => (
                 <PinCard card={{name: card.name, urlImage: card.urlImage, source: card.source}}/>
            ))}
        </div>
    )
}

//pins&&pins= si hay algo dentro de pins, entonces haz el map!

export default PinList;