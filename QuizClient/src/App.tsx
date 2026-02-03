import { useEffect, useRef, useState } from "react";
import { Client } from "@stomp/stompjs";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // Why are we using this here?
  // The primary reason is that it ensures that we
  // maintain a reference to the same socket instance.
  // If we don't do this, a new socket instance will be
  // created each time the page rerenders.
  const stompClient = useRef<Client | null>(null);

  const client = new Client({
    brokerURL: "ws://localhost:8080/ws-connect",
    onConnect: () => {
      console.log("connected");
      client.subscribe("/quiz/answer", (res) => {
        console.log("Server says: " + res.body);
      });
    },
    onStompError: (frame) => console.error(frame),
    onWebSocketError: (err) => console.error(err),
  });

  const sendEvent = () => {
    client.publish({
      destination: "/app/receive-answer",
    });
    console.log("clicked");
  };
  return (
    <>
      <div>
        <button onClick={() => client.activate()}>Connect</button>
        <button onClick={sendEvent}>Get message</button>
      </div>
    </>
  );
}

export default App;
