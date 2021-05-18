import BoardList from "./BoardList/BoardList";
import Header from "./Header/Header";
import UserCard from "./UserCard/userCard";
import "./App.css";
import PinList from "./PinList/pinList";
import Familia from "./assets/imagen1.png";
import Puerta from "./assets/imagen2.png";
import Drone from "./assets/imagen3.png";
import Azul from "./assets/imagen4.png";
import Food from "./assets/imagen5.png";

function App() {
  

  const handOfBoards = [
    {name: "All pins", likes: "512 Pins"},
    {name: "Board 2", likes: "23 Pins"},
    {name: "Board of plants", likes: "12 Pins",},
    {name: "Board of food from middle...", likes: "51 Pins"},
    {name: "Amazing Board", likes: "0 Pins"},
    {name: "Quick Saves", likes: "1 Pin"}
  ];


  return (
    <div>
      <Header />
      <UserCard />
       <p className="title">Boards</p>
      <BoardList boards={handOfBoards}/>
      <p className="title">Pins</p>
      <PinList/>
      
    </div>
  );
}

export default App;
