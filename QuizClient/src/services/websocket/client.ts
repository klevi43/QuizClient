import { Client } from "@stomp/stompjs";
import type { WordDto } from "../../models/Word";
import { BROKER_URL } from "../../constants/constants";

class WebSocketService {
  private client: Client;

  constructor() {
    this.client = new Client({
      brokerURL: BROKER_URL, // go here to do 3 way handshake
      onConnect: () => {
        console.log("connected");
        this.client.subscribe("/quiz/get-quiz", (res) => {
          console.log("Server says: " + res.body);
        });
      },
      onStompError: (frame) => console.error(frame),
      onWebSocketError: (err) => console.error(err),
    });
  }

  connect() {
    this.client.activate();
  }

  subscribe(destination: string) {
    console.log("Connected?", this.client.connected);
  }

  publish(destination: string, quizId: number) {
    this.client.publish({
      destination: destination,
      body: JSON.stringify(quizId),
    });
  }
  disconnect() {
    this.client.deactivate();
  }
}

export const webSocketService = new WebSocketService();
