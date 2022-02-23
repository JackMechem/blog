var express = require('express');
var router = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
var cors = require('cors');

router.use(cors());

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


const db = mysql.createConnection({
    host: "blog.cxxtsstsga87.us-west-1.rds.amazonaws.com",
    port: "3315",
    user: "admin",
    password: "Jackkcaj1",
    database: "blog",
});

db.connect(function(error) {
    if(!!error){
        console.log('Error: Database');
    } else {
        console.log('Connected...')
    }
})

/* GET articles listing. */
router.get('/', function (req, res, next) {
    res.json({
        title: 'articles'
    });
});

router.get('/all', function (req, res, next) {
    db.query("SELECT * FROM Articles", function(error, rows, fields){
        if(error) {
            res.json(error);
        } else {
            res.json(rows);
        }
    })
});

router.post('/find', function (req, res) {
    var id = req.body.id;
    db.query(`SELECT * FROM Articles WHERE id = ${id}`, (error, rows, fields) => {
        if(error) {
            res.json(error);
        } else {
            res.json(rows);
        }
    })
});

module.exports = router;
