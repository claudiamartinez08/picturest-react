import "./BoardCards.css";
import {useState} from 'react';
import BoardImages from "../BoardImages/boardImages";



const BoardCard = ({board}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        
        <div className="boardCard"
        onMouseLeave={() => setIsHovered(false)}
        onMouseEnter={() => setIsHovered(true)} >

            <p className="pinName">{board.name}</p> 
            <p className="pinLike">{board.likes}</p>
            <div>               
               {isHovered && <svg className="pen" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19.5" cy="19.5" r="19.5" fill="white"/>
                <path d="M12.1181 23.1285L23.7158 11.5307C23.7347 11.5251 23.7553 11.5192 23.7774 11.5132C23.9363 11.4701 24.1656 11.4253 24.4346 11.4216C24.9528 11.4145 25.6403 11.5555 26.3156 12.2308C26.9909 12.9061 27.132 13.5936 27.1248 14.1118C27.1211 14.3809 27.0763 14.6101 27.0332 14.7691C27.0273 14.7912 27.0214 14.8117 27.0157 14.8306L15.4179 26.4284L11.6681 26.8783L12.1181 23.1285Z" stroke="#14142B" stroke-width="2" stroke-linecap="round"/>
                <path d="M20.8892 12.943L25.3788 17.4326" stroke="#14142B" stroke-width="2"/>
                </svg>}
            </div>
            {/* <BoardImages/> */}
            
        </div>
    )
}

export default BoardCard;