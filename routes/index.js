var express = require('express');
var router = express.Router();

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date(),
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date(),
    },
];

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { messages: messages });
});

router.get('/new', function (req, res, next) {
    res.render('form');
});

router.post('/new', function (req, res, next) {
    const msgUser = req.body.user;
    const msgText = req.body.text;

    messages.unshift({ text: msgText, user: msgUser, added: new Date() });
    res.redirect('/');
});

module.exports = router;
