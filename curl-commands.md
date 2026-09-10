# Curl Commands for All Backend Endpoints (B1–B7)

## B1 — Health Check
```bash
curl -s http://localhost:5000/
```
Expected: `{"status":"ok"}`

## B2 — List Projects
```bash
curl -s http://localhost:5000/api/projects
```
Expected: `200` with JSON array of 4+ project objects.

## B3 — Single Project (valid)
```bash
curl -s http://localhost:5000/api/projects/doodle-dash
```
Expected: `200` with matching project object.

## B3 — Single Project (not found)
```bash
curl -s -w "\n%{http_code}" http://localhost:5000/api/projects/nonexistent
```
Expected: `404` with `{"error":"Project not found"}`

## B4 — Contact Submit (valid)
```bash
curl -s -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","message":"Hello, this is a test message."}'
```
Expected: `201` with confirmation payload.

## B4 — Contact Submit (missing name)
```bash
curl -s -w "\n%{http_code}" -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","message":"Hello"}'
```
Expected: `400` with `{"error":"Name is required."}`

## B4 — Contact Submit (invalid email)
```bash
curl -s -w "\n%{http_code}" -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"invalid-email","message":"Hello, this is a test message."}'
```
Expected: `400` with `{"error":"A valid email is required."}`

## B5 — List Submissions
```bash
curl -s http://localhost:5000/api/contact
```
Expected: `200` with JSON array of all submissions.

## B6 — Catch-all 404
```bash
curl -s -w "\n%{http_code}" http://localhost:5000/api/doesnotexist
```
Expected: `404` with `{"error":"Route not found"}`

## B6 — Server Error (malformed)
```bash
curl -s -w "\n%{http_code}" -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d 'not valid json'
```
Expected: `500` with `{"error":"Internal server error"}`

## B7 — CORS Check
```bash
curl -s -I -H "Origin: http://localhost:5173" -X OPTIONS http://localhost:5000/api/projects
```
Expected: `200` or `204` with `Access-Control-Allow-Origin` header.
