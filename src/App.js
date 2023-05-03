import { useState } from "react";
import { Note } from "./components/Note";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [noteArr, setNoteArr] = useState([]);
  const [searchedNote, setSearchedNote] = useState([]);
  const [searchNote, setSearchNote] = useState("");
  const [isUpdateMode,setIsUpdateMode] = useState(false);
  const [updatingId,setUpdatingId] = useState(null);



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
  };
  const changeDesc = (event) => {
    setDesc(event.target.value);
  };
  const addNotes = () => {

    if(isUpdateMode){
      // if the  update mode is true i will update 
           handleUpdate();
    }else{
      let id =  Date.now().toString() // milliseconds since 1970 AD UPTO NOW IN A NUMBER DATATY PE 
      let newNote = { title, desc ,id  };
      setNoteArr((prev) => {
        return [...prev, newNote];
      });
      setDesc("");
      setTitle("")
    }
  };


  const handleUpdate=()=>{


    let noteArrWithSomeChange = noteArr.map((noteObj)=>{
        if(noteObj.id===updatingId){

            return {
              ...noteObj,
              title:title,
              desc:desc,
                
            }

        }else{
          return noteObj
        }
    })
    setNoteArr(noteArrWithSomeChange)
    setIsUpdateMode(false)
    setDesc("")
    setTitle("")

// 
  }


      // console.log(title); //this code will be triggered when the app.js mounts and when it gets rerendered.
  // app component will be rerendered when any of the useState changes.
  return (
    <div className="App">
      <div className="Notepad">
        <input value={title} type="text" placeholder="title" onChange={changeTitle} />
        <input value={desc} type="text" placeholder="description" onChange={changeDesc} />






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
                id={data.id}
                setDesc={setDesc}
                setTitle={setTitle}
                setterFunction={setNoteArr}
                setUpdatingId={setUpdatingId}
                setIsUpdateMode={setIsUpdateMode}
              />
            );
          })
        : searchedNote.map((data) => {
            return (
              <Note
                title={data.title}
                desc={data.desc}
                data={data.id}
                setDesc={setDesc}
                setTitle={setTitle}
                setUpdatingId={setUpdatingId}
                setterFunction={setNoteArr}
                setIsUpdateMode={setIsUpdateMode}
              />
            );
          })}
    </div>
  );
}

export default App;
