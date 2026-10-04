# CollabTasky

## Project type

AI-powered full-stack project management SaaS.

## Overview

CollabTasky is a full-stack project management application designed to help teams organize projects, manage tasks, communicate in real time, and interact with an AI assistant.

The application combines traditional project management features with generative AI capabilities. Users can create and manage projects, organize tasks, communicate through real-time chat, and use an AI assistant within the application.

## Problem

Managing projects across multiple tools can make it difficult to keep track of tasks, communication, and project information.

CollabTasky brings project management, task management, real-time communication, and AI assistance into a single application. The goal is to provide a centralized workspace where users can manage project-related activities while also having access to an AI assistant.

## Technologies

- Next.js
- TypeScript
- Tailwind CSS
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- Generative AI

## Core features

- User authentication
- Project management
- Task management
- Real-time communication
- AI assistant
- Project-based workflows
- Full-stack application architecture

## Application architecture

The application follows a full-stack architecture:

```text
User
  ↓
Next.js Frontend
  ↓
API Requests
  ↓
Node.js / Express.js Backend
  ↓
MongoDB
```

Real-time communication is handled through Socket.IO. The AI assistant is integrated into the application to provide AI-powered interactions within the project management environment.

### Project management

CollabTasky allows users to work with projects and organize project-related tasks. The project management workflow can be represented as:

```text
User
  → Create Project
  → Manage Project
  → Create Tasks
  → Update Task Status
  → Track Project Progress
```

Projects provide the organizational structure for managing work.

### Task management

Tasks are associated with projects and provide a way to organize individual pieces of work. Users can manage tasks as part of the overall project workflow.

```text
Project
  ↓
Tasks
  ↓
Task Updates
  ↓
Project Progress
```

### Real-time communication

CollabTasky uses Socket.IO to provide real-time communication:

```text
User A
  ↓
Socket.IO
  ↓
Backend
  ↓
Socket.IO
  ↓
User B
```

This allows communication events to be delivered without requiring the application to repeatedly refresh the page.

### AI assistant

CollabTasky includes a Global AI Assistant designed to provide AI-powered interaction within the application. The assistant is integrated into the project management experience rather than being a completely separate application. It provides users with an additional AI-powered interface while working with their projects and tasks.

## Backend

The backend is built using Node.js and Express.js. It handles application APIs and communicates with MongoDB.

```text
Next.js Client
  ↓
Express.js API
  ↓
Application Logic
  ↓
Mongoose
  ↓
MongoDB
```

## Database

MongoDB is the primary database, and Mongoose is used to work with MongoDB from the Node.js backend. The database stores application data required for project management and other application workflows.

## Real-time architecture

Socket.IO is used for real-time communication:

```text
Client
  ↓
Socket.IO Connection
  ↓
Node.js / Express Backend
  ↓
Socket.IO Events
  ↓
Connected Clients
```

This architecture enables real-time application updates and communication.

## Frontend

The frontend is built with Next.js, TypeScript, and Tailwind CSS. Next.js provides the application framework, TypeScript provides type safety, and Tailwind CSS is used to style the application interface.

## My contribution

Sahbaz designed and developed CollabTasky as a full-stack project management SaaS application. His contributions included:

- Building the Next.js frontend.
- Developing the application using TypeScript.
- Building the Node.js and Express.js backend.
- Implementing project management workflows.
- Implementing task management functionality.
- Integrating MongoDB for application data.
- Using Mongoose for MongoDB data modeling and database interaction.
- Implementing real-time communication using Socket.IO.
- Integrating the Global AI Assistant.
- Connecting the frontend and backend to create the complete full-stack application.
- Working on the overall application architecture and user workflows.

## Engineering concepts demonstrated

CollabTasky demonstrates practical experience with:

- Full-stack application development
- SaaS architecture
- Next.js and TypeScript
- Node.js and Express.js
- MongoDB and Mongoose
- REST API development
- Real-time communication, WebSockets, and Socket.IO
- Project and task management systems
- Generative AI integration
- Frontend-backend integration
- Database design

## Key technical concepts

### Next.js

Used as the frontend application framework for building the user interface and application structure.

### TypeScript

Used to improve type safety and maintainability throughout the frontend application.

### Node.js

Used as the backend runtime environment.

### Express.js

Used to build backend APIs and application server functionality.

### MongoDB

Used as the primary database for storing application data.

### Mongoose

Used for MongoDB data modeling and database interaction.

### Socket.IO

Used to implement real-time communication between connected users.

### Tailwind CSS

Used to build and style the frontend interface.

## Project workflow

A simplified application workflow is:

```text
User
  ↓
Authentication
  ↓
Dashboard
  ↓
Create / Select Project
  ↓
Manage Tasks
  ↓
Communicate in Real Time
  ↓
Use AI Assistant
```

### Example user journey

1. The user opens CollabTasky.
2. The user authenticates.
3. The user accesses the project dashboard.
4. The user creates or selects a project.
5. The user creates and manages tasks.
6. Team members communicate using real-time functionality.
7. The user interacts with the AI Assistant.
8. The user continues managing the project.

## Why CollabTasky is interesting

CollabTasky combines several engineering concepts in one application. Instead of building only a CRUD-based project management application, the project combines:

```text
Project Management
        +
Task Management
        +
Real-Time Communication
        +
Generative AI
        =
AI-Powered Collaboration Platform
```

This makes CollabTasky a practical example of combining traditional full-stack engineering with modern AI functionality.

## Example questions

The portfolio chatbot should be able to answer questions such as:

- What is CollabTasky?
- What type of application is CollabTasky?
- What problem does CollabTasky solve?
- What technologies were used to build CollabTasky?
- Is CollabTasky a SaaS application?
- How does the CollabTasky architecture work?
- What frontend technology does CollabTasky use?
- What backend technologies does CollabTasky use?
- Which database does CollabTasky use?
- Why is MongoDB used in CollabTasky?
- What is Mongoose used for?
- How does real-time communication work?
- Why does CollabTasky use Socket.IO?
- Does CollabTasky have an AI assistant?
- What is the Global AI Assistant?
- How is AI integrated into CollabTasky?
- What did Sahbaz contribute to CollabTasky?
- What engineering concepts does CollabTasky demonstrate?
- How does the project management workflow work?
- How does the task management workflow work?
- What makes CollabTasky different from a basic CRUD application?

## Important context

CollabTasky is a personal project. The AI assistant must not claim that CollabTasky is a production SaaS product used by external customers unless that information is explicitly documented.

The AI assistant must not invent:

- Number of users
- Revenue
- Customers
- Performance metrics
- Scalability numbers
- Uptime
- Production traffic
- Team size
- AI accuracy
- Response latency
- Additional infrastructure
- Additional databases
- Additional APIs
- Undocumented AI models

The AI assistant must only describe technologies and features documented in this file.

- If asked about real-time communication, explain that Socket.IO is used.
- If asked about the database, explain that MongoDB is used with Mongoose.
- If asked about Sahbaz's contribution, only describe the responsibilities in the **My contribution** section.
- If asked about the architecture, explain the documented architecture rather than inventing additional services or infrastructure.

## Links

- **Live demo:** [collab-tasky.vercel.app](https://collab-tasky.vercel.app/)
- **GitHub:** [mdsahbazkhan/CollabTasky](https://github.com/mdsahbazkhan/CollabTasky)
