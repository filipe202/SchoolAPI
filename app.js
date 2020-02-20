const express = require('express');

const app = express();
const PORT = 8080;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://dynamicforms.sgctst.msdev.pt"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/api/info', (req, res) => {
    res.status(200).send({
        name: 'Faculdade de Ciências',
        studentsNumber: 100,
        fees: 1500
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
