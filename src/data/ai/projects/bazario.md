# Bazario

## Project type

Full-stack e-commerce platform with an admin dashboard.

## Overview

Bazario is a full-stack e-commerce platform designed to provide an online shopping experience for customers while giving administrators a dedicated dashboard to manage the platform.

The system consists of two main applications:

1. **Bazario** — the customer-facing e-commerce application.
2. **Bazario Admin** — the administrative dashboard for managing the e-commerce platform.

The two applications work together as part of the same e-commerce system.

## Problem

Traditional e-commerce applications require both a customer-facing shopping experience and an administrative system for managing products, orders, customers, and other platform operations.

Bazario provides the customer shopping interface, while Bazario Admin provides the administrative interface needed to manage the platform.

## Applications

### Bazario

Bazario is the customer-facing e-commerce application. Customers can use it to browse products, view product information, and interact with the shopping experience.

### Bazario Admin

Bazario Admin is the administrative dashboard for managing the Bazario e-commerce platform. It provides administrators with a centralized interface for managing e-commerce operations.

## Core features

### Bazario

- Product browsing
- Product details
- Customer shopping experience
- E-commerce user interface
- Product discovery
- Customer-facing workflows

### Bazario Admin

- Administrative dashboard
- Product management
- E-commerce management workflows
- Centralized administration
- Platform management

## System architecture

The overall system can be represented as:

```text
                    Bazario E-Commerce System
                              |
              +---------------+---------------+
              |                               |
              ↓                               ↓
      Bazario Customer                 Bazario Admin
       Application                       Dashboard
              |                               |
              +---------------+---------------+
                              |
                              ↓
                       Backend / APIs
                              |
                              ↓
                           Database
```

The customer-facing application and admin dashboard serve different purposes while being part of the same e-commerce ecosystem.

### Customer application

Bazario provides the customer-facing shopping experience. The typical customer workflow is:

```text
Customer
  ↓
Browse Products
  ↓
View Product Details
  ↓
Interact With Shopping Experience
  ↓
E-Commerce Workflow
```

The customer application focuses on usability, product discovery, and the overall shopping experience.

### Admin dashboard

Bazario Admin provides administrators with tools to manage the e-commerce platform. The administrative workflow can be represented as:

```text
Administrator
  ↓
Admin Dashboard
  ↓
Manage Products
  ↓
Manage E-Commerce Data
  ↓
Monitor / Manage Platform
```

The admin dashboard provides a centralized interface for administrative operations.

### Relationship between Bazario and Bazario Admin

Bazario and Bazario Admin are two parts of the same e-commerce system. Bazario is designed for customers, while Bazario Admin is designed for administrators.

```text
Customer
  ↓
Bazario
  ↓
E-Commerce Platform
  ↑
Bazario Admin
  ↑
Administrator
```

This separation allows the customer experience and administrative experience to be developed and managed independently.

## Engineering concepts demonstrated

Bazario demonstrates practical experience with:

- Full-stack development
- E-commerce application development
- Customer-facing application development
- Admin dashboard development
- Frontend development
- Backend integration
- API-based architecture
- Database-driven applications
- Authentication and authorization concepts
- CRUD operations
- Product management
- Administrative workflows
- User interface development
- Application architecture

## Bazario customer experience

The customer-facing application is focused on providing a clean and accessible shopping experience. Typical customer interactions include:

- Discovering products
- Viewing product information
- Navigating the store
- Interacting with e-commerce functionality
- Using the customer-facing interface

## Bazario Admin experience

The admin application focuses on operational management. Administrators can use the dashboard to manage the e-commerce platform and its underlying data.

The admin interface is separated from the customer-facing application to provide an environment specifically designed for administrative workflows.

## My contribution

Sahbaz designed and developed Bazario and Bazario Admin as part of a full-stack e-commerce system. His contributions included:

- Developing the Bazario customer-facing application.
- Developing the Bazario Admin dashboard.
- Implementing customer-facing e-commerce workflows.
- Implementing administrative workflows.
- Building and integrating frontend interfaces.
- Connecting application interfaces with backend functionality.
- Implementing product-related management functionality.
- Working on the overall e-commerce application architecture.
- Working on the integration between the customer application and administrative system.
- Developing reusable application components and interfaces.

## Technical architecture

The system separates the customer application from the administrative application:

```text
Customer Application
        ↓
      APIs
        ↓
     Backend
        ↓
    Database
        ↑
     Backend
        ↑
      APIs
        ↑
 Admin Dashboard
```

The customer application consumes the platform functionality required for the shopping experience, while the admin dashboard provides interfaces for managing the platform.

## Project workflow

A simplified overall workflow is:

```text
Administrator
      ↓
Bazario Admin
      ↓
Manage Products / Platform Data
      ↓
Backend
      ↓
Database
      ↑
Backend
      ↑
Bazario
      ↑
Customer
```

## Why Bazario is interesting

Bazario demonstrates experience beyond building a simple frontend application. The project involves two separate interfaces serving different types of users:

```text
Customer Experience
        +
Administrative Experience
        +
Backend Integration
        +
Database Management
        =
Full-Stack E-Commerce Platform
```

This demonstrates practical understanding of how customer-facing applications and internal administrative systems can work together.

## Example questions

The portfolio chatbot should be able to answer questions such as:

- What is Bazario?
- What type of project is Bazario?
- Is Bazario an e-commerce application?
- What is Bazario Admin?
- What is the difference between Bazario and Bazario Admin?
- Who uses Bazario?
- Who uses Bazario Admin?
- What does Bazario provide?
- What does Bazario Admin provide?
- How do Bazario and Bazario Admin work together?
- What is the architecture of Bazario?
- What is the customer workflow?
- What is the admin workflow?
- What technologies were used to build Bazario?
- What technologies were used to build Bazario Admin?
- What did Sahbaz contribute to Bazario?
- What did Sahbaz contribute to Bazario Admin?
- What engineering concepts does Bazario demonstrate?
- Is Bazario a full-stack project?
- Why are Bazario and Bazario Admin separate applications?

## Important context

Bazario is a personal project developed to demonstrate full-stack and e-commerce development skills. Bazario Admin is the administrative application associated with the Bazario e-commerce platform.

The AI assistant must distinguish between the two applications:

- **Bazario:** customer-facing e-commerce application.
- **Bazario Admin:** administrative dashboard.

The AI assistant must not claim that Bazario is a production e-commerce platform used by external customers unless that information is explicitly documented.

The AI assistant must not invent:

- Number of users or customers
- Revenue, orders, or sales
- Performance metrics
- Production traffic or uptime
- Scalability numbers
- Payment providers
- Shipping providers
- Additional databases or APIs
- Undocumented technologies or features

If asked about Bazario, explain the customer-facing application. If asked about Bazario Admin, explain the administrative dashboard. If asked about their relationship, explain that they are separate applications forming part of the same e-commerce system.

If asked about Sahbaz's contribution, only describe the responsibilities documented in the **My contribution** section.

## Links

- **Bazario live demo:** [bazario-frontend-one.vercel.app](https://bazario-frontend-one.vercel.app/)
- **Bazario GitHub:** [mdsahbazkhan/ecommerce-web](https://github.com/mdsahbazkhan/ecommerce-web)
- **Bazario Admin:** [bazario-admin-seven.vercel.app](https://bazario-admin-seven.vercel.app/)
