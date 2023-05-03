import React from "react";
import "./Note.css";
export const Note = ({ title, desc, setterFunction ,setIsUpdateMode ,setTitle,setDesc ,id ,setUpdatingId}) => {


  const handleDelete = () => {
    setterFunction((prev) => {
      //filter means removing the object from noteArr
      return prev.filter((noteObj) => {
        return noteObj.id !== id;
      });
    });
  };

  
  const editBtnhandler =()=>{
       //  set the update mode to true ;
       setIsUpdateMode(true) 

    setTitle(title)
    setDesc(desc)
    setUpdatingId(id)

      //  i will change the title state to the text of the title of note and then automatically the value of the title input will be the title of the note   
  }
  return (
    <div className="Note">
      <p>{title}</p>
      <p>{desc}</p>
      <button onClick={handleDelete}>X</button>
      <button onClick={ editBtnhandler   }>EDIT  </button>
    </div>
  );
};
