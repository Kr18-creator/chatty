import {
  ChatContainer,
  Header,
  MessagesWrapper,
  UserMessage,
  BotMessage,
  Button,
  ErrorMessagesWrapper,
  Form,
  StyledInput,
} from "./Chat.styled";

import * as hooks from "./Chat.hooks";
import Loader from "../Loader";

function Chat() {
  const {
    messages,
    tempMessage,
    handleInputChange,
    handleSubmit,
    error,
    sendMessage,
    loading
  } = hooks.useChat();

  const handleRetry = () => {
    sendMessage(tempMessage);
  };

  return (
    <ChatContainer>
      <Header>K Rashmi consultations</Header>
      <MessagesWrapper>
        {messages.map((message, index) => (
          <>
            {message.role === "user" ? (
              <UserMessage key={index}>{message.message}<span>{new Date(message.timestamp).toLocaleTimeString()}</span></UserMessage>
            ) : (
              <BotMessage key={index}>{message.message}<span>{new Date(message.timestamp).toLocaleTimeString()}</span></BotMessage>
            )}
          </>
        ))}
        {loading && <Loader/>}
        {error && (
          <ErrorMessagesWrapper>
            {error}
            <button onClick={handleRetry}>Retry</button>
          </ErrorMessagesWrapper>
        )}
        <Form onSubmit={handleSubmit}>
          <StyledInput
            value={tempMessage}
            onChange={handleInputChange}
            disabled={!!error}
          />
          <Button disabled={!!error}>Send</Button>
        </Form>
      </MessagesWrapper>
    </ChatContainer>
  );
}

export default Chat;
