import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from './actions';
import { NewNoteInput } from './NewNoteInput';
import { NoteState } from './noteReducer';

function App() {
          //interface being used v      v the specific state bing accessed
  const notes = useSelector<NoteState, NoteState['notes']>(state => state.notes) //this accesses state in our store
  const dispatch = useDispatch()

  const onAddNote = (note: string) => {
    dispatch(addNote(note))
  }

  return (
    <>
      <NewNoteInput addNote={onAddNote}/>
      <hr/>
      <ul>
        {notes.map( note => {
          return <li key={note}>{note}</li>
        })}
      </ul>
    </>
  );
}

export default App;
