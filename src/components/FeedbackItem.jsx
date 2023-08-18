import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/card";

const FeedbackItem = ({ items, deleteFeedback }) => {

  return (
    <>
      <Card reverse={true}>
        <div className="num-display">{items.rating}</div>
        <button onClick={() => deleteFeedback(items.id)} className="close">
          <FaTimes color="purple" />
        </button>
        <button onClick={() => editFeedback(items)} className="edit">
          <FaEdit color="purple" />
        </button>
        <div className="text-display">{items.text}</div>
      </Card>
    </>
  );
};

export default FeedbackItem;
