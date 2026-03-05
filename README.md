# NordicGear AI Customer Support Assistant

An AI-powered customer support chatbot that simulates a real-world e-commerce support system for an outdoor equipment store.

The assistant helps users with questions about products, shipping, returns, payments, and store policies using a structured knowledge base and controlled prompt instructions.

## Screenshot

Example interaction with the NordicGear Support Assistant.

<p align="center">
  <img src="client/public/screenshots/supportassistant.png" width="700"/>
</p>

## Project Overview

The NordicGear Support Assistant acts as a virtual customer support agent for a fictional outdoor gear retailer.

Users can ask questions such as:

• How can I track my order?  
• Can I return a product if it doesn’t fit?  
• Does NordicGear ship internationally?  
• What gear do I need for camping?

The assistant uses a **knowledge base file (`NordicGear.md`) combined with system prompt rules** to provide structured responses while preventing hallucinated information.

## Key Features

• AI-powered customer support assistant  
• Knowledge-based responses using `NordicGear.md`  
• Prompt-controlled AI behavior to prevent hallucinations  
• Conversation context tracking using OpenAI response IDs  
• Input validation using Zod  
• Modular backend architecture (controllers, services, repositories)  
• Real-time chat interface with typing indicator  
• Markdown rendering for AI responses

## What This Project Demonstrates

This project demonstrates several backend and AI engineering concepts:

- AI-powered conversational interfaces
- Prompt engineering and AI behavior control
- Knowledge grounding using a Markdown knowledge base
- Backend API design with Express
- Input validation using Zod
- Conversation state management
- Modular backend architecture
- Modern frontend UI using React and Tailwind

---

## Architecture

The application follows a modular client-server architecture.

Client (React + Vite)

- Chat interface
- Message rendering
- User input handling

Server (Express API)

- Chat controller
- Chat service
- Conversation repository
- Prompt system

AI Layer

- System prompt rules
- NordicGear knowledge base
- OpenAI API response generation

---

## Tech Stack

### Backend

- Node.js
- Express
- Bun runtime
- OpenAI API
- Zod

### Frontend

- React
- Vite
- TailwindCSS
- shadcn/ui
- React Markdown

### Tooling

- Prettier
- Husky
- Axios

---
