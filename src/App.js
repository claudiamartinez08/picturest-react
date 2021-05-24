import BoardList from "./BoardList/BoardList";
import Header from "./Header/Header";
import UserCard from "./UserCard/userCard";
import "./App.css";
import PinList from "./PinList/pinList";
import {useState, useEffect} from "react";
import NewPin from "./NewPin/NewPin";


function App() {
  const url= "http://localhost:5000/users/1";

  const [users, setUsers] = useState();
  
  useEffect(() => {
      fetch (url)
          .then((response) => {
              if (response.ok) {
                  return response.json();
              } else {
                  throw Error(response.statusText)
              };
          })
          .then((data) => {
              setUsers(data);
          })
  }, []) 

  

  return (
    <div>
      <Header user={users} />
      <UserCard user={users} />
      <BoardList/>
      
      <PinList/>
      
    </div>
  );
}

export default App;
