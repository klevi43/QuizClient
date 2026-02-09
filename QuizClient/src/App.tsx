import { useEffect, useRef, useState } from "react";

import "./App.css";
import ChoiceBox from "./components/ChoiceBox";
import type { WordDto } from "./models/Word";
import { webSocketService } from "./services/websocket/client";
import { quizService } from "./services/rest/quizService";
import QuestionBox from "./components/QuestionBox";
function App() {
  const [count, setCount] = useState(0);
  // Why are we using this here?
  // The primary reason is that it ensures that we
  // maintain a reference to the same socket instance.
  // If we don't do this, a new socket instance will be
  // created each time the page rerenders.
  const stompClient = useRef<Client | null>(null);

  const testWord: WordDto = {
    id: 1,
    content: "compassionate",
  };

  return (
    <>
      <div>
        <div className="flex justify-center mt-[2rem]">
          <QuestionBox content="(n.) an animal with four legs and meows" />
        </div>
        <ChoiceBox word={testWord} />
        <button onClick={() => quizService.getQuizById()}>Get Quiz</button>
        <button className="text-blue-500">Connect</button>
        <button onClick={() => webSocketService.publish("/app/send-quiz", 1)}>
          Get message
        </button>
      </div>
    </>
  );
}

export default App;
