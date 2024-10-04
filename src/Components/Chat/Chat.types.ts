export type BotMessage = {
  role: "bot";
  message: string;
  timestamp: string
};

export type UserMessage = {
  role: "user";
  message: string;
  timestamp: string;
};

export type Message = BotMessage | UserMessage;

export type Messages = Array<Message>;
