import { Client } from "@stomp/stompjs";
import type { WordDto } from "../../models/Word";
import { BROKER_URL } from "../../constants/constants";
import type { AnswerDto } from "../../models/answerDto";

class AnswerSocketService {
  private client: Client;

  constructor() {
    this.client = new Client({
      brokerURL: BROKER_URL, // go here to do 3 way handshake
      onConnect: () => {
        console.log("connected");
        this.client.subscribe("/queue/answer-result/user123", (res) => {
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

  submitAnswer(destination: string, answer: AnswerDto) {
    console.log("clicked aub ans");
    this.client.publish({
      destination: destination,
      body: JSON.stringify(answer),
    });
  }
  disconnect() {
    this.client.deactivate();
  }
}

export const answerSocketService = new AnswerSocketService();
