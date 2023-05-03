import { useState } from "react";
import { Note } from "./components/Note";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [noteArr, setNoteArr] = useState([]);

  const [searchedNote, setSearchedNote] = useState([]);

  const [searchNote, setSearchNote] = useState("");
  const handleSearch = (event) => {
    setSearchNote(event.target.value);
    let searchText = event.target.value;
    //filter can also be used to search a certain thing inside an array
    let searchedNote = noteArr.filter((eachObject) => {
      return eachObject.title.startsWith(searchText); //if the title starts with what we are typing
    });
    setSearchedNote(searchedNote);
  };

  const changeTitle = (event) => {
    setTitle(event.target.value);
    console.log("title input is triggered");
  };
  const changeDesc = (event) => {
    setDesc(event.target.value);
    console.log("description input is triggered");
  };
  const addNotes = () => {
    let newNote = { title, desc };
    setNoteArr((prev) => {
      return [...prev, newNote];
    });
  };
  console.log(searchNote.length);
  // console.log(title); //this code will be triggered when the app.js mounts and when it gets rerendered.
  // app component will be rerendered when any of the useState changes.

  return (
    <div className="App">
      <div className="Notepad">
        <input type="text" placeholder="title" onChange={changeTitle} />
        <input type="text" placeholder="description" onChange={changeDesc} />
        <button className="enter" onClick={addNotes}>
          Enter
        </button>
      </div>
      <input type="text" placeholder="Search" onChange={handleSearch} />
      {searchNote.length === 0
        ? noteArr.map((data) => {
            return (
              <Note
                title={data.title}
                desc={data.desc}
                setterFunction={setNoteArr}
              />
            );
          })
        : searchedNote.map((data) => {
            return (
              <Note
                title={data.title}
                desc={data.desc}
                setterFunction={setNoteArr}
              />
            );
          })}
    </div>
  );
}

export default App;
