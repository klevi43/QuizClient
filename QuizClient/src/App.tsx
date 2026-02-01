import { useState } from "react";
import { Client } from "@stomp/stompjs";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const client = new Client({
    brokerURL: "ws://localhost:8080/ws",
    onConnect: () => {
      console.log("connected");
      // client.subscribe("/user/queue/answer-result", (msg) => {
      //   console.log("Result:", msg.body);
      // });
    },
    onStompError: (frame) => console.error(frame),
    onWebSocketError: (err) => console.error(err),
  });

  return (
    <>
      <div>
        <button onClick={() => client.activate()}>test</button>
      </div>
    </>
  );
}

export default App;
