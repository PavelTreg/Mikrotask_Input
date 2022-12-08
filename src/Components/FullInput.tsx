import React, {ChangeEvent, useState} from 'react';

type AllType = {
    addMessage: (title: string) => void
}

export const FullInput = (props:AllType) => {
    let [title, setTitle] = useState('')

    const inputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {setTitle(event.currentTarget.value)}
    const onClickHandler = () => {props.addMessage(title)
        setTitle('')
    }
    return(
        <div>
            <input value={title} onChange={inputOnChangeHandler}/>
            <button onClick={onClickHandler}>+
            </button>
        </div>
    );

};




