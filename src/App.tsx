import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./Components/FullInput";
import {Input} from "./Components/Input";
import {Button} from "./Components/Button";


function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    let [title, setTitle] = useState('')
    const addMessage = (title: string) => {
        const newMessage = {message: title}
        const addNewMessage = [newMessage, ...message]
        setMessage(addNewMessage)

    }
    const callBack = () => {addMessage(title)
        setTitle('')

    }
    return (
        <div className="App">
            {/*   <FullInput addMessage = {addMessage}/>*/}
            <Input title = {title}
                   setTitle ={setTitle}/>
            <Button name={'+'}
                    callBack={callBack}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );


}

export default App;
