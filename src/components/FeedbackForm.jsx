import React, { useState } from "react";
import Card from "./shared/card";

const FeedbackForm = () => {
  const [text, settext] = useState("");
  const handleTextChange = (e) => {
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
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
