import React, {ChangeEvent, FC, useState} from 'react';

interface NewNoteInputProps {
    addNote(note: string): void;
}

export const NewNoteInput: FC<NewNoteInputProps> = ({ addNote }) => {
    const [note, setNote] = useState('')

    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value)
    }

    const handleClick = () => {
        addNote(note)
        setNote('')
    }

    return (
        <div>
            <input onChange={updateNote} value={note} type='text' name='note' placeholder='Note'/>
            <button onClick={handleClick}> Add Note</button>
        </div>
    )
};