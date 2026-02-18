import { useEffect, useRef, useState } from "react";

import "./App.css";
import QuizQuestion from "./pages/QuizQuestion";
import { BrowserRouter, Route, Routes } from "react-router";
import Start from "./pages/Start";
import { answerSocketService } from "./services/websocket/client";
function App() {
  const [count, setCount] = useState(0);
  // Why are we using this here?
  // The primary reason is that it ensures that we
  // maintain a reference to the same socket instance.
  // If we don't do this, a new socket instance will be
  // created each time the page rerenders.
  //const stompClient = useRef<Client | null>(null);
  answerSocketService.connect();
  //console.log(quizDto);
  console.log("rendering");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/quiz" element={<QuizQuestion />} />
        </Routes>
      </BrowserRouter>
      {/* <div>
        <button>Get Quiz</button>
        <button className="text-blue-500">Connect</button>
        <button onClick={() => webSocketService.publish("/app/send-quiz", 1)}>
          Get message
        </button>
      </div> */}
    </>
  );
}

export default App;
