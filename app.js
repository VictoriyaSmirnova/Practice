let express = require('express');
let app = express();
app.use(express.static('public'));

let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let db  = require('diskdb');
db.connect('./public/db/data', ['articles']);
db.connect('./public/db/data', ['tags']);

app.listen(3010, function () {
    console.log('Example app listening on port 3010!');
});

app.get('/articles', function (req, res) {
    res.send(JSON.stringify(db.articles.find()));

});

app.get('/articles/:id', function (req, res) {
    res.send(JSON.stringify(db.articles.find({id: req.params.id})));
});

app.post('/articles', function (req, res) {
    db.articles.save(req.body);
    res.json(req.body);
});

app.put('/articles/:id', function (req, res) {
    db.articles.remove({id: req.params.id});
    db.articles.save(req.body);
    res.json(req.body);
});

app.delete('/articles/:id', function (req, res) {
    db.articles.remove({id: req.params.id});
    res.json({removeId: id});
});

app.get('/tags', function (req, res) {
    res.send(JSON.stringify(db.tags.find()));
});

app.post('/tags', function (req, res) {
    db.tags.save(req.body);
    res.json(req.body);
});
