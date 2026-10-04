# Velquix

## Project Type

Hybrid Generative AI / RAG Application

## Overview

Velquix is a full-stack Generative AI application that supports both normal AI conversations and PDF-grounded conversations.

Users can chat normally with the AI without uploading a document. When a user uploads a PDF, Velquix processes the document and allows the user to ask questions about the uploaded PDF using a Retrieval-Augmented Generation (RAG) pipeline.

After a PDF is uploaded, the chat is focused on the uploaded document and uses retrieved PDF context to generate responses.

## Problem

Users may want to use an AI assistant for both general conversations and questions about their own documents.

Velquix combines both use cases into one application.

Without a PDF, users can have normal AI conversations.

After uploading a PDF, users can interact with the document through a RAG-powered conversation instead of manually searching through the document.

## Technologies

- React
- FastAPI
- Python
- LangChain
- Groq
- Llama 3.3
- ChromaDB
- HuggingFace Embeddings

## Chat Modes

### Normal AI Chat

When no PDF is uploaded, Velquix works as a normal AI chatbot.

```text
User
→ Chat Request
→ LLM
→ AI Response
```

The normal chat mode does not depend on an uploaded PDF.

### PDF-Grounded Chat

After a PDF is uploaded, Velquix processes the document and uses relevant information from the uploaded PDF to answer questions.

```text
PDF Upload
→ Document Processing
→ Text Extraction
→ Text Chunking
→ Embeddings
→ ChromaDB
→ User Question
→ Semantic Retrieval
→ Relevant PDF Context
→ Groq Llama 3.3
→ Generated Answer
```

## Architecture

The main PDF retrieval data flow is:

```text
User
→ PDF Upload
→ FastAPI
→ Document Processing
→ Text Extraction
→ Text Chunking
→ HuggingFace Embeddings
→ ChromaDB
→ Semantic Retrieval
→ Relevant Context
→ Groq Llama 3.3
→ Generated Answer
```

## RAG Pipeline

### 1. Document Upload

The user uploads a PDF document through the application.

### 2. Document Processing

The PDF content is extracted and prepared for processing.

### 3. Chunking

The extracted text is divided into smaller chunks so that relevant sections can be retrieved efficiently.

### 4. Embeddings

Document chunks are converted into vector embeddings using HuggingFace Embeddings.

### 5. Vector Storage

The embeddings are stored in ChromaDB.

### 6. Retrieval

When the user asks a question about the uploaded PDF, the application performs semantic similarity search against the stored document embeddings.

### 7. Context Construction

Relevant document chunks are retrieved and provided as context to the language model.

### 8. Generation

Groq Llama 3.3 generates an answer using the retrieved document context.

## Key Features

- Normal AI chat
- PDF document upload
- PDF-grounded conversations
- Document processing
- Text chunking
- Semantic vector search
- RAG-based question answering
- Context-aware responses
- AI-powered document interaction

## Backend

The backend is built with FastAPI and handles application requests, document processing, retrieval, and AI-related operations.

## AI Components

### LangChain

Used to build and orchestrate the document retrieval and LLM workflow.

### ChromaDB

Used as the vector database for storing and retrieving document embeddings.

### HuggingFace Embeddings

Used to convert document chunks into vector representations for semantic search.

### Groq Llama 3.3

Used as the language model to generate responses using retrieved document context.

## Frontend

The frontend is built with React and provides the AI chat interface and PDF upload experience.

The frontend allows users to:

- Start normal AI conversations.
- Upload PDF documents.
- Ask questions about uploaded documents.
- View AI-generated responses.

## My Contribution

Sahbaz designed and developed Velquix as a full-stack Generative AI application.

His contributions included:

- Built the React frontend and AI chat interface.
- Developed the FastAPI backend and API workflows.
- Implemented normal AI chat functionality.
- Implemented the PDF upload workflow.
- Implemented the document-processing workflow.
- Implemented the RAG pipeline for PDF-grounded conversations.
- Integrated LangChain for the AI and retrieval workflow.
- Integrated HuggingFace Embeddings for document vectorization.
- Integrated ChromaDB for vector storage and semantic retrieval.
- Integrated Groq Llama 3.3 for AI response generation.
- Connected the frontend and backend to create the complete AI chat experience.
- Designed the application flow for normal AI chat and PDF-grounded chat.

## Engineering Concepts Demonstrated

Velquix demonstrates practical experience with:

- Generative AI application development
- Retrieval-Augmented Generation
- Vector databases
- Semantic search
- Embeddings
- Document processing
- LLM integration
- AI application architecture
- API development
- FastAPI
- React
- Backend development
- Context-aware generation

## Project Highlights

Velquix demonstrates how a traditional chatbot can be enhanced with Generative AI and RAG.

The application provides a normal AI chat experience while also allowing users to upload a PDF and interact with its contents through semantic retrieval and context-aware LLM generation.

The hybrid architecture allows the same application to support both general-purpose AI conversations and document-grounded conversations.

## Example User Journey

```text
1. User opens Velquix
        ↓
2. User starts a normal AI conversation
        ↓
3. User uploads a PDF
        ↓
4. Velquix processes the document
        ↓
5. Document text is extracted
        ↓
6. Text is divided into chunks
        ↓
7. Embeddings are generated
        ↓
8. Embeddings are stored in ChromaDB
        ↓
9. User asks a question about the PDF
        ↓
10. Relevant document chunks are retrieved
        ↓
11. Retrieved context is provided to the LLM
        ↓
12. Groq Llama 3.3 generates the response
        ↓
13. User receives a document-grounded answer
```

## Example Questions

The portfolio chatbot should be able to answer questions such as:

- What is Velquix?
- What problem does Velquix solve?
- Is Velquix a PDF chatbot?
- Can users chat normally with Velquix?
- What happens after uploading a PDF?
- How does the RAG pipeline work?
- Which vector database does Velquix use?
- Which LLM does Velquix use?
- What is ChromaDB used for?
- What is LangChain used for?
- What are HuggingFace Embeddings used for?
- How does Velquix retrieve relevant PDF content?
- How does Velquix generate answers from PDFs?
- What technologies were used to build Velquix?
- What did Sahbaz contribute to Velquix?
- What is the architecture of Velquix?

## Project Type

Personal project.

## Important Context

Velquix is a personal project developed to demonstrate practical skills in full-stack development and Generative AI.

The AI assistant must distinguish between the two chat modes:

- Without a PDF: normal AI conversation.
- After a PDF is uploaded: PDF-grounded conversation using the documented RAG pipeline.

The AI assistant must not claim that normal AI conversations are generated from the uploaded PDF.

The AI assistant must not claim that the model has direct access to the entire PDF. The documented workflow retrieves relevant document chunks and provides them as context.

The AI assistant must not claim that Velquix is a production system used by external customers unless that information is explicitly documented.

The AI assistant must not invent metrics such as:

- Number of users
- Accuracy
- Latency
- Revenue
- Production usage
- Document size limits
- Number of documents processed

The AI assistant must not invent additional technologies, infrastructure, databases, APIs, or architectural components that are not documented in this file.

If asked about the architecture, explain the documented RAG pipeline rather than inventing implementation details.

If asked about Sahbaz's contribution, only describe the responsibilities documented in the "My Contribution" section.

## Links


GitHub: (https://github.com/mdsahbazkhan/AI_ChatBot)