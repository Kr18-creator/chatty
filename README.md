# Chatty Project

## Project Summary

Chatty is a React-based chat application that allows users to chat with consultationBot in real-time. The application is built using Vite for fast development and includes styled-components for styling. The project structure is modular, with separate components for different functionalities such as chat and loader.

### 1. Setup Development Environment

- **Install Dependencies**: Run `yarn` to install all necessary dependencies.
- **Start Development Server**: Use `yarn dev` to start the Vite development server.


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
