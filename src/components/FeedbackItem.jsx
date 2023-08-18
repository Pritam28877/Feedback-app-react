import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/card";

const FeedbackItem = ({ items }) => {
  return (
    <>
      <Card reverse={true}>
        <div className="num-display">{items.rating}</div>
        <button className="close">
          <FaTimes color="purple" />
        </button>
        <button className="edit">
          <FaEdit color="purple" />
        </button>
        <div className="text-display">{items.text}</div>
      </Card>
    </>
  );
};

export default FeedbackItem;
