import React, { useState, useEffect } from "react";
import "../Styles/SearchSection.css";

let speech;
if (window.webkitSpeechRecognition) {
  // eslint-disable-next-line
  const SpeechRecognition = webkitSpeechRecognition;
  speech = new SpeechRecognition();
  speech.continuous = true;
} else {
  speech = null;
}

function SearchBar() {
  const [isListening, setIsListening] = useState(false);
  const [Text, setText] = useState("");
  const [FinalInput, setFinalInput] = useState("");
  const [micSearch, setMicSearch] = useState(false);

  //Start listining
  const listen = () => {
    setIsListening(true);
    speech.start();
    setText("");
    recordText();
  };

  //start recording
  const recordText = () => {
    speech.onresult = (event) => {
      setText(event.results[event.results.length - 1][0].transcript);
    };
  };

  //Stop listening once text is recorded
  useEffect(() => {
    if (Text !== "") {
      speech.stop();
      setIsListening(false);
      setFinalInput(Text);
      setMicSearch(true);
    }
  }, [Text]);

  useEffect(() => {
    if (micSearch) {
      redirectToURL();
      setMicSearch(false);
    }
  }, [micSearch]);

  //URL to be redirected to
  const redirectToURL = () => {
    let url = "https://www.alfassa.org/web/search?q=";
    if (FinalInput !== "") {
      window.location.href = url + FinalInput;
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ width: "100%" }}
    >
      <form className="d-flex flex-row justify-content-center align-items-center inputForm">
        <input
          type="text"
          value={FinalInput}
          className="searchInput "
          id="searchInput"
          autoComplete="off"
          placeholder={isListening ? "Start Talking..." : "Type a keyword..."}
          onChange={(e) => setFinalInput(e.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              redirectToURL();
            }
          }}
        />
        <i
          className="material-icons images"
          style={{ color: isListening ? "#1E90FF" : "#000" }}
          onClick={() => listen()}
        >
          mic_none
        </i>
        <i className="material-icons images" onClick={() => redirectToURL()}>
          search
        </i>
      </form>
    </div>
  );
}

export default SearchBar;
