
const cors = require('cors');
const express = require('express');
const app = express();


app.use(express.json());
app.use(cors());

const { uuid } = require('uuidv4') 


const projects = [];

app.get('/sites', (request, response) => {

    const query = request.query;
    console.log(query)

    return response.json(projects)
})

//Method Post simple
app.post('/sites', (request,response) => {
    const body = request.body
    const {title, owner} = request.body
    console.log(body)

    return response.json([
        'facebook.com',
        'nerak.com',
        {title},
        {owner}
    ])
});

//Method Post with adiction
app.post('/sites/add', (request, response) => {
const {title, owner} = request.body;
const project = {id: uuid(),title, owner}
    projects.push(project)
    return response.json(projects)
})

app.put('/sites/:id', (request, response) => {
    // const params = request.params;
    // console.log(params)
    const { id } = request.params;
    const {title, owner} = request.body;

    const projectsIndex = projects.findIndex(project => project.id === id);

    if(projectsIndex < 0){
        return response.status(400).json({ error: 'Project not found'})
    }

    const project = {
        id,
        title,
        owner,
    };

    projects[projectsIndex] = project;

    return response.json(project)
});

app.delete('/sites/:id', (request, response) => {
        const {id} = request.params
        console.log(id)

        const projectsIndex = projects.projectsIndex(project => project.id === id)

        if(projectsIndex < 0){
            return response.status(400).json({error: 'Project not found.'})
        }

        projects.splice(projectsIndex, 1)
    return response.status(204).send()
})


app.listen(3333, () => {
    console.log('Backend Start! 🚀')
   
})