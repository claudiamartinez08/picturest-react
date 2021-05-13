import Puerta from "../assets/imagen2.png";
import Azul from "../assets/imagen4.png";
import Food from "../assets/imagen5.png";
import Familia from "../assets/imagen1.png";

const BoardImages = () => {
const imagenes =[Puerta, Azul, Food, Familia]; 
    return (
        <div>
            {imagenes.slice([0-2])}
        </div>

)
};

export default BoardImages;