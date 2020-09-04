const express = require('express');
const port = 1007;
const APP = express();

APP.use(express.json())

let store = [];

APP.get('/store/full-content', (req, res) => {
    res.send(store);
});

APP.get('/store/:id', (req, res) => {
    res.send(store[parseInt(req.params.id)]);
});


APP.post('/store', (req, res) => {
    console.log(`Recieved elemnet: ${JSON.stringify(req.body)}`);
    store.push(req.body);
    res.send("Done");
});

APP.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})