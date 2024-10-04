import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: purple;
  color: white;
  padding: 1rem;
`;

export const MessagesWrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 48rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
export const ErrorMessagesWrapper = styled.div`
  width: 100%;
  max-width: 48rem;
  padding: 1em;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 0.5em;
  color: red;
  text-align: center;
`;
export const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 48rem;
  gap: 1em;
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  border-radius: 8px;
  border: none;
  outline: none;
  ::placeholder {
    color: #6c757d;
  }
  :disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

export const UserMessage = styled.div`
  background-color: blue;
  color: white;
  border-radius: 8px;
  padding: 0.6em 1.2em;
  align-self: flex-end;
  margin-bottom: 0.5em;
  max-width: 75%;

    span {
    margin-left: 5px;
    font-size: 0.8em;
    color: #888;
  }
`;


export const BotMessage = styled.div`
  background-color: green;
  color: white;
  border-radius: 8px;
  padding: 0.6em 1.2em;
  align-self: flex-start;
  margin-bottom: 0.5em;
  max-width: 80%;

  span {
    margin-left: 5px;
    font-size: 0.8em;
    color: #888;
  }
`;

export const Button = styled.button`
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  border-radius: 8px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  &: disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

export const Header = styled.h1`
  font-size: 1rem;
  self-align: flex-start;
  width: 100%;
  max-width: 48rem;
  margin-block: 1rem;
`;
