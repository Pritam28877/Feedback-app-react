import Card from "./shared/card";

const FeedbackItem = ({ items }) => {
  return (
    <>
      <Card>
        <div className="num-display">{items.rating}</div>
        <div className="text-display">{items.text}</div>
      </Card>
    </>
  );
};

export default FeedbackItem;
