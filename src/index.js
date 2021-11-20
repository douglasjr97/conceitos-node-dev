const { request, json } = require('express');
const express = require('express');

const app = express();
app.use(express.json());

app.get('/projects', (request, response) => {
    const {title, owner} = request.query;
    console.log(title)
    console.log(owner)

    return response.json([
        'project 1',
        'project 2',
    ]);
});

app.post('/projects', (request, response) => {
    const body = request.body;
    console.log(body)
return response.json([
    'Project 1',
    'Project 2',
    'Project 3',
]);
});

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    console.log(id)
    return response.json([
        'project 4',
        'Project 2',
        'Project 3',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
            'project 2',
            'project 3',
    ])
})

app.listen(3333, () => {
    console.log('🚀 Back-end start!')
});