import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes,setNotes] = useState([])
    
    function addNotes(note){
        if(note.title.length!==0 || note.content.length!==0){
            setNotes(prevNotesData=>([
                ...prevNotesData,
                note,
            ]));
        }
    }

    function deleteNote(id){
        const newNotes = notes.filter((note,index)=>{
            return index!==id;
        })
        setNotes(newNotes);
    }

    return (
    <div>
        <Header />
        <CreateArea addNote={addNotes} />
        {notes.map((note, index)=>(
             <Note id={index} key={index} title={note.title} content={note.content} delete={deleteNote} />
             ))}
        <Footer />
    </div>
    );
}

export default App;
