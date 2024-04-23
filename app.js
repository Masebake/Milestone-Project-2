const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // send HTML file on GET request
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/style.css'); // send HTML file on GET request
});

app.post('/submit-form', (req, res) => {
    const name = req.body.name; // access form data
    const email = req.body.email;
    const message = req.body.message;

    console.log({name, email, message})

    res.send(`
    <h1>Form submitted:</h1>
    <p>First & Last Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
    `);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
