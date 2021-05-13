import BoardCard from "../BoardCards/BoardCards";
import "./BoardList.css";

const BoardList = ({boards}) => {
    return (
        <div className="boardContainer">
            {boards.map((board) => (
                <BoardCard board={{name: board.name, likes: board.likes}}/>
            ))}
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