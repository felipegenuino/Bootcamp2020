const {uuid} = require('uuidv4');

const express = require('express');
const app = express();

app.use(express.json())

const projects = [];

app.get('/projects', (req, res) => { 
  return res.json(projects)
})

app.post('/projects', (req, res) => {
  const {title, owner} = req.body; 
  const project = { id: uuid(), title, owner}

  projects.push(project) 
  return res.json(project)
})

app.put('/projects/:id', (req, res) => {
  return res.json([
     'Project 1',
    'Project 2',
    'Project 3',
  ])
})
app.delete('/projects/:id', (req, res) => {
  return res.json([
     'Project 1',
    'Project 2',
    'Project 3',
  ])
})

app.listen(3333, () =>{
    console.log('👍 rodando na porta 3333')
});
