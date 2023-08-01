import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// import notes from "../notes";

function App() {
    const [notes, setNote] = useState([])

    function addNote (note) {
        setNote((prevValue) => {
            return [...prevValue, note]
        })
        
    }

    function deleteNote (id) {
        const newNote = notes.filter((note, i) => {
            return i !== id
        })
        setNote(newNote)
    }

  return (
    <div>
      <Header />
      <CreateArea
      onAdd={addNote}
       />
      {
        notes.map((note, index) => <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote} />
        )
        }
      <Footer />
    </div>
  );
}

export default App;