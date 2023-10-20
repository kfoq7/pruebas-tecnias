import express from 'express'

export const app = express()
app.use(express.json())

const items = [{ id: 1, content: 'Item 1' }]

app.get('/items', (_req, res) => {
  res.json(items)
})

app.get('/items/:id', (req, res) => {
  const { id } = req.params
  const item = items.find(item => item.id === parseInt(id))
  res.json(item)
})

app.post('/items', (req, res) => {
  const { content } = req.body
  const newId = items.length + 1
  const newItem = { id: newId, content }
  items.push(newItem)
  res.json(newItem)
})

app.put('/items/:id', (req, res) => {
  const { id } = req.params
  const { content } = req.body
  const item = items.find(item => item === id)
  item.content = content
  res.json(item)
})

app.delete('/items/:id', (req, res) => {
  const { id } = req.params
  const itemIndex = items.findIndex(item => item === parseInt(id))
  items.splice(itemIndex, 1)
  res.status(200).json(items)
})

export const server = app.listen(3000)
