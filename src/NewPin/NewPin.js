import {useState} from "react";
import './NewPin.css'


const NewPin = ({setPins}) => {
const url= "http://localhost:5000/pins";



const [body, setBody] = useState ({
    name: "",
    description: "",
    subject: "",
})

 
 const createPin = (event) => {
    event.preventDefault(); //No hagas el comportamiento por defecto

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then ((response) => response.json())
    .then ((json) => setPins(json))
    .catch((err) => console.log(err));
};

    return (
        <div>
            <div>
            <form  className="formContainer">
                <label>Name: </label>
                    <input onChange={(event) => setBody({...body, name: event.target.value })}></input>
                <label>Description: </label>
                    <input onChange={(event) => setBody({...body, description: event.target.value})}></input>
                <label>Choose subject: </label>
                    <select onChange={(event) => setBody ({...body, subject: event.target.value})}name="subject">
                        <option value="Books">Books</option>
                        <option value="Art">Art</option>
                        <option value="Quotes">Quotes</option>
                        <option value="Deco">Deco</option>
                        <option value="Other">Other</option>
                    </select>
                <button className="createPinButton" onClick={(event) => createPin(event)}>Create Pin</button>
            </form>
            </div>

        </div>
    )
}

export default NewPin