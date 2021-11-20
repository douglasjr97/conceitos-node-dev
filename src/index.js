
const { request, response } = require('express');
const express = require('express');
const app = express();
app.use(express.json());

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
    const params = request.params;
    console.log(params)
    return response.json([
        'vmonster.com',
        'vercel.com',
    ])
});

app.delete('/sites/:id', (request, response) => {
        const params = request.params
        console.log(params)
    return response.json([
        'vmonster.com'
    ])
})


app.listen(3333, () => {
    console.log('Backend Start! 🚀')
   
})