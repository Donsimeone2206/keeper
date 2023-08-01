import React, {useState} from "react";

function CreateArea(props) {
    const [note, setNoteInput] = useState({
        title: "",
        content: ""
      }
    )
    function handleChange (e) {
        const {name, value} = e.target
        setNoteInput((prevValue) => {
            return {
                ...prevValue,
                [name]: value}
        })
    }
    function submitNote (e) {
        props.onAdd(note)
        e.preventDefault()
        setNoteInput({
            title: "",
            content: ""
          })
    }
    
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;