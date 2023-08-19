import React, { useState } from "react";
import Card from "./shared/card";
import Button from "./shared/Buton";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ handleAdd }) => {
  const [text, settext] = useState("");
  const [rating, setRating] = useState(10);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text: text,
        rating: rating,
      };
      handleAdd(newFeedback);
    }
  };
  return (
    <Card>
      <RatingSelect select={(rating) => setRating(rating)} />
      <form onSubmit={handleSubmit}>
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
