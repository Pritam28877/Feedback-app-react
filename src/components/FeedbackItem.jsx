import { useState } from "react";

const FeedbackItem = ({items}) => {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("This is a exaple of items");

  return (
    <div className="card">
      <div className="num-display">{items.rating}</div>
      <div className="text-display">{items.text}</div>
    </div>
  );
};

export default FeedbackItem;
