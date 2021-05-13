import PinCard from "../PinCard/pinCard"
import "./pinList.css"


const PinList = ({cards}) => {
    return (
        <div className="pinContainer">
            {cards.map((card) => (
                 <PinCard card={{name: card.name, img: card.img, url: card.url}}/>
            ))}
        </div>
    )
}

export default PinList;