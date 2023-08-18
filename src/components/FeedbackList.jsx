import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback }) => {
  console.log(feedback);
  if (!feedback || feedback.length === 0) {
    return (
      <>
        <p>No feedBack yet</p>
      </>
    );
  }
  return (<div className="feedback-list">
    {feedback.map((items , index )=>(
        <FeedbackItem key={items.id} items={items}/>
    ))}
  </div>);
  
};
export default FeedbackList;
