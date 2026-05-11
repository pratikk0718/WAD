# Assignment Management System

## Description
A full-stack application built with Node.js, Express, MongoDB, and Angular to manage user assignments. This project includes user authentication (Registration, Login, Profile) and a complete CRUD (Create, Read, Update, Delete) system for Assignments.

## Features
- **User Authentication**: Secure registration and login using JWT and Bcrypt.
- **Assignment CRUD Manager**: 
  - **Create**: Add new assignments with titles, descriptions, and due dates.
  - **Read**: View a dynamic list of assignments with status badges.
  - **Update**: Edit existing assignments and mark them as Completed.
  - **Delete**: Remove assignments with confirmation prompts.
- **Shared Auth Middleware**: Centralized token verification for secure API access.
- **Responsive UI**: Built with Angular for a smooth, single-page experience.

## Tech Stack
- **Frontend**: Angular 17+ (Standalone Components)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Security**: JWT (JSON Web Tokens), BcryptJS

## Folder Structure
```
project-root/
|-- new-backend/         (Backend Server)
|   |-- models/         (User and Assignment Schemas)
|   |-- routes/         (Auth and Assignment API Endpoints)
|   |-- middleware/     (JWT Auth Protection)
|   |-- server.js       (Express Entry Point)
|   |-- test_api.js     (Automated API Test Script)
|-- new-frontend/        (Angular Client)
|   |-- src/app/
|       |-- login/      (Login UI & Logic)
|       |-- register/   (User Registration UI)
|       |-- profile/    (User Profile UI)
|       |-- assignment/ (CRUD Operations UI)
|       |-- auth.ts     (Auth API Service)
|       |-- assignment.ts (Assignment API Service)
|-- .gitignore
|-- README.md
|-- requirements.txt
```

## Setup Instructions
1. **Backend**:
   - Navigate to `new-backend/`
   - Run `npm install`
   - Ensure MongoDB is running locally at `mongodb://127.0.0.1:27017/fresh_database` (or update `.env`)
   - Run `node server.js`
2. **Frontend**:
   - Navigate to `new-frontend/`
   - Run `npm install`
   - Run `npm start` (Access at `http://localhost:4200`)

## API Endpoints
### Auth
- `POST /api/users/register`: Register new user.
- `POST /api/users/login`: Login and get JWT.
- `GET /api/users/profile`: Get profile (Requires Token).

### Assignments
- `GET /api/assignments`: Get all user assignments.
- `POST /api/assignments`: Create new assignment.
- `PUT /api/assignments/:id`: Update assignment.
- `DELETE /api/assignments/:id`: Delete assignment.

## Future Scope
- Role-based access (Student vs Teacher).
- File attachments for assignments.
- Real-time notifications using WebSockets.
