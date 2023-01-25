import express from 'express'
import path from 'path'

const vanilaRouter = express.Router()

// toggle
vanilaRouter.get('/toggle', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'view', 'vanilajs', 'toggle', 'index.html'))
})

// loading
vanilaRouter.get('/loading', (req, res) => {
  res.sendFile(path.join(path.resolve(), 'view', 'vanilajs', 'loading', 'index.html'))
})

export default vanilaRouter
