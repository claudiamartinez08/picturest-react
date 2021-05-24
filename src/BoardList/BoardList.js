import BoardCard from "../BoardCards/BoardCards";
import "./BoardList.css";
import { useState, useEffect} from "react";

const BoardList = ({allBoards}) => {
const url= "http://localhost:5000/boards";
const [boards, setBoards] = useState(null);

    useEffect(() => {

        fetch(url) 
            .then((response) => {
                if(response.ok) {
                    return response.json();
                }else
                    throw Error(response.statusText);
            })

            .then((data) => {
                setBoards(data) 
            }
    
        )} , []);

    return (
        <div>
            <p className="title">Boards</p>
        <br></br>
        <div  className="boardContainer">
            {boards && boards.slice(-6).map((board) => (
                <BoardCard board={{title: board.title, likes: board.likes}}/>
            ))}
        </div>
            
        </div>

       /*  <div className="boardList">
            <BoardCard letter="All pins" likes="512 Pins"/>
            <BoardCard letter="Board 2" likes="23 Pins"/>
            <BoardCard letter="Board of plants" likes="12 Pins"/>
            <BoardCard letter="Board of food from middle..." likes="51 Pins"/>
            <BoardCard letter="Amazing Board" likes="0 Pins"/>
            <BoardCard letter="Quick Saves" likes="1 Pin"/>
        </div> */
    )

}


export default BoardList;