import { useState } from "react";
import "./App.css";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import { FeedbackData } from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if (window.confirm("are u sure u want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header text="Feedback From" bgColor="rgba(0,0,0,0.6)" textColor="#fff" />
      <FeedbackForm />
      <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
    </>
  );
}

export default App;
