import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!","success");
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!","success");
  };

  const handleclearclick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Textbox is clear.","success");
  };

  const handlespeakclick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speak your text which is present in your textbox!","success");
  };

  const handleFirstLetterUppercase = () => {
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    const upper = text.split(" ").map(capitalize).join(" ");
    setText(upper);
    props.showAlert("First letter of each word is uppercase!","success");
  };

  const handleExtraSpaces = () => {
    let words = text.split(" ");
    let joinedWords = "";
    // console.log(words);
    words.forEach((elem) => {
      if (elem[0] !== undefined) {
        joinedWords += elem + " ";
        console.log(joinedWords);
      }
      setText(joinedWords);
    });
  };

  const handlleOnChange = (event) => {
    // console.log("on changee")
    setText(event.target.value); //by this only we change in Text.
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handlleOnChange}
            style={{backgroundColor: props.mode==='dark' ? 'black':'white',color: props.mode==='dark' ? 'white':'black'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>
          Convert to upper case
        </button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleDownClick}>
          Convert to lower case
        </button>
        <button
          className="btn btn-primary mx-2 my-3"
          onClick={handleclearclick}
        >
          Clear text
        </button>
        <button
          className="btn btn-primary mx-2 my-3"
          onClick={handlespeakclick}
        >
          Speak Your text
        </button>
        <button
          className="btn btn-primary mx-2 my-3"
          onClick={handleExtraSpaces}
        >
          Remove Extra Space
        </button>
        <button
          className="btn btn-primary mx-2 my-3"
          onClick={handleFirstLetterUppercase}
        >
          First lettercapitalize
        </button>
      </div>
      <div style={{color: props.mode==='dark' ? 'white':'black'}}>
        <h1>Your Text Summary:</h1>
        <p>
          {text.split(" ").length} <b>words</b> and {text.length}{" "}
          <b>characters</b>
        </p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text:"Enter text to preview here"}</p>
      </div>
    </>
  );
}
