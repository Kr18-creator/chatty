# Chatty Project

## Project Summary

Chatty is a React-based chat application that allows users to chat with consultationBot in real time. The application is built using Vite for fast development and includes styled components for styling. The project structure is modular, with separate components for different functionalities such as chat and loader.

### 1. Setup Development Environment

- **Install Dependencies**: Run `yarn` to install all necessary dependencies.
- **Start Development Server**: Use `yarn dev` to start the Vite development server.

#### Features

- **1**: Implemented the logic to send a user's message and update the chat interface accordingly. Ensuring the user's message is displayed in the chat before the bot's response is generated.
  
- **2**: When an error occurs during the bot's response generation, displaying an appropriate error message to the user.

- **3**: Displayed a loading indicator while the bot is generating its response to the user's message.

- **4**:Implemented a "Retry" button that allows the user to resend the last message when an error occurs.

- **5**: Added a timestamp to each message displayed in the chat next to each message, indicating when it was sent or received.

- **6**: Implemented chat history persistence to save the messages even when the page is refreshed or reopened.



### 2. Project Structure

The project is organized as follows:

```plaintext
src/
│
├── components/
│   ├── Chat/
│   │   ├── Chat.tsx           // Chat component
│   │   ├── Chat.hooks.ts      // Custom hooks for chat state management
│   │   ├── Chat.styled.ts     // Styled components for chat UI
│   │   ├── Chat.types.ts      // TypeScript types for chat
│   │   ├── Chat.services.ts   // Service functions for chat operations
│   │   └── Chat.utilities.ts  // Utility functions for chat
│   ├── Loader/
│   │   └── Loader.tsx         // Loader component
│   └── ...
│
└── App.tsx                    // Main application component
└── index.tsx                  // Application entry point
```
