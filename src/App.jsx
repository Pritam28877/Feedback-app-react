import { useState } from "react";
import "./App.css";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import { FeedbackData } from "./data/FeedbackData";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <FeedbackList feedback={feedback} />
    </>
  );
}

export default App;
