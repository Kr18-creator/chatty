import { useState, useEffect } from "react";

import * as types from "./Chat.types";
import * as utilities from "./Chat.utilities";
import { getChatResponse } from "./Chat.services";

export function useChat() {
  const [messages, setMessages] = useState<types.Messages>(() => {
    const savedMessages = localStorage.getItem("chatMessages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  console.log("🚀 ~ useChat ~ messages:", messages);

  const [tempMessage, setTempmessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const[loading, setLoading] =useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempmessage(e.target.value);
  };
  const updateResponse = async (newMessage: types.Message) => {
    setMessages((prevMessage) => [...prevMessage, newMessage]);
  };

  const sendMessage = async (recievedMessageTemp: string) => {
    try {
      const timestamp = new Date().toISOString();
      const userMessage = utilities.getUserMessage(
        recievedMessageTemp,
        timestamp
      );
      updateResponse(userMessage);
      setLoading(true)
      const botMessage = await getChatResponse(recievedMessageTemp);
      updateResponse(botMessage);
      setLoading(false)
      setError(null);
    } catch (err) {
      setError("Failed to get response from the bot.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(tempMessage);
    setTempmessage("");
  };

  return {
    messages,
    tempMessage,
    handleInputChange,
    handleSubmit,
    error,
    sendMessage,
    loading
  };
}
