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
      },
      onStompError: (frame) => console.error(frame),
      onWebSocketError: (err) => console.error(err),
    });
  }

  connect() {
    this.client.activate();
  }

  subscribe(destination: string) {
    this.client.subscribe(destination, (res) => {
      console.log("Server says: " + res.body);
    });
  }

  publish(destination: string, word: WordDto) {
    this.client.publish({
      destination: destination,
      body: JSON.stringify(word),
    });
  }
  disconnect() {
    this.client.deactivate();
  }
}

export const webSocketService = new WebSocketService();
