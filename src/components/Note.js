import React from "react";
import "./Note.css";
export const Note = ({ title, desc, setterFunction }) => {
  const handleDelete = () => {
    console.log("i am deleting", title);
    setterFunction((prev) => {
      //filter means removing the object from noteArr
      return prev.filter((noteObj) => {
        return noteObj.title !== title;
      });
    });
  };
  return (
    <div className="Note">
      <p>{title}</p>
      <p>{desc}</p>
      <button onClick={handleDelete}>X</button>
    </div>
  );
};
