import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PORT = process.env.PORT || 5000
const DATA_FILE_PATH = process.env.DATA_FILE_PATH || './data/projects.json'
const app = express()

app.use(cors({ origin: process.env.ALLOWED_ORIGIN || 'http://localhost:5173' }))
app.use(express.json())

function loadProjects() {
  const raw = readFileSync(join(__dirname, DATA_FILE_PATH))
  const projects = JSON.parse(raw)
  return projects
}

//health check
app.get('/', (_req, res) => {
  res.json({ status: 'ok' })
})

app.get('/api/projects', (_req, res) => {
  try {
    const projects = loadProjects()
    res.json(projects)
  } catch (err) {
    console.error('Failed to load projects:', err)
    res.status(500).json({ error: 'Failed to load projects' })
  }
})

app.get('/api/projects/:id', (req, res) => {
  try {
    const projects = loadProjects()
    const project = projects.find((p) => p.id === req.params.id)
    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }
    res.json(project)
  } catch (err) {
    console.error('Failed to find project:', err)
    res.status(500).json({ error: 'Failed to load project' })
  }
})

const submissions = []

app.post('/api/contact', (req, res) => {
  const body = req.body || {}
  const name = body.name
  const email = body.email
  const message = body.message

  if (!name || !name.trim()) {
    return res.status(400).json({ error: 'Name is required.' })
  }
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email is required.' })
  }
  if (!message || message.trim().length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters.' })
  }

  const now = new Date().toISOString()
  submissions.push({ name, email, message, createdAt: now })
  res.status(201).json({ message: 'Submission received successfully.', submission: submissions[submissions.length - 1] })
})

app.get('/api/contact', (_req, res) => {
  res.json(submissions)
})

//catch-all router
app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

//g-err handler
app.use((err, _req, res, _next) => {
  console.log(err.stack)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
