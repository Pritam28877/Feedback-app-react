import React, { useState } from "react";
import Card from "./shared/card";
import Button from "./shared/Buton";

const FeedbackForm = () => {
  const [text, settext] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    e.preventDefault();
    if (text === "") {
      setBtnDisable(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length < 10) {
      setBtnDisable(true);
      setMessage("Less then 10 charcture");
    } else {
      setBtnDisable(false);
      setMessage(null);
    }
    settext(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us ?</h2>
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            placeholder="The Feedback you want ro give us "
            value={text}
          />
          <Button type="submit" version="secondary" isDisabled={btnDisable}>
            Send
          </Button>
        </div>
        {message}
      </form>
    </Card>
  );
};

export default FeedbackForm;
