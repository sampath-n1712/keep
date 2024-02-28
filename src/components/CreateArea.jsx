import React, { useState } from "react";

function CreateArea(props) {

    const [note,setNote] = useState({
        title:"",
        content:""
    });

    function changeNote(event){
        const {name,value} = event.target;
        setNote(prevNote=>({
            ...prevNote,
            [name] : value ,
        }));
    }

    function addChange(event){
        props.addNote(note);
        event.preventDefault();
        setNote(prevNote=>({
            title:"",
            content:"",
        }))
    }

    return (
    <div>
        <form>
        <input name="title" placeholder="Title" value={note.title} onChange={changeNote}/>
        <textarea name="content" placeholder="Take a note..." rows="3" value={note.content} onChange={changeNote}/>
        <button onClick={addChange}>Add</button>
        </form>
    </div>
    );
}

export default CreateArea;
