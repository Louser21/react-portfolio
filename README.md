# React Portfolio — Assignment 3: Backend Integration

## Overview

This is a React Portfolio website with a Node.js/Express backend. The backend serves project data and handles contact form submissions via REST APIs.

## Setup & Run

### Requirements
- Node.js 16+ and npm

### Backend
```bash
cd server
npm install
npm run dev   # or npm start
```

### Frontend
```bash
npm install
npm run dev
```

## API Endpoints

### B1 — Health Check
```
GET /
```
Response: `{ "status": "ok" }`

### B2 — List Projects
```
GET /api/projects
```
Response: JSON array of project objects. Each object has: `id`, `title`, `description`, `techStack`, `image`, `link`, `summary`, `role`, `index`, `sections`, `highlights`.

Sample response:
```json
[{"id":"doodle-dash","title":"Doodle Dash","techStack":["JavaScript","Canvas","Responsive UI"],"image":"/images/doodle-dash.png","link":"/projects/doodle-dash",...}]
```

### B3 — Single Project
```
GET /api/projects/:id
```
Valid id returns the project object. Non-existent id returns `404: { "error": "Project not found" }`.

### B4 — Submit Contact Form
```
POST /api/contact
Content-Type: application/json
Body: { "name": "...", "email": "...", "message": "..." }
```
Valid submission returns `201: { "message": "Submission received successfully.", submission }`. Missing fields or invalid email returns `400` with field-specific error.

### B5 — List Submissions
```
GET /api/contact
```
Returns all stored contact submissions. **No authentication required — clearly noted as an open endpoint.**

### B6 — Error Handling
- Undefined routes return `404: { "error": "Route not found" }`
- Server errors are caught and return JSON with appropriate status code

### B7 — CORS & Environment
- CORS enabled via `.env` `ALLOWED_ORIGIN`
- All configuration loaded from `.env` via `dotenv`
- `.env.example` lists all required variables

## Storage
- Project data: `server/data/projects.json`
- Contact submissions: in-memory array (resets on server restart)

## Postman / curl Commands

See `curl-commands.md` for all endpoint test commands.
