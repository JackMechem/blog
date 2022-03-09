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

router.get('/', function (req, res, next) {
  res.json({
    message: "Hello. This is for admin. If you're not admin then then fuck off, go do something more usefull with your life."
  })
});

router.post('/create', function (req, res) {
  var ct = req.body.create_time;
  var ut = req.body.update_time;
  var crdT = req.body.card_title;
  var crdIL = req.body.card_image_link;
  var crdD = req.body.card_desc;
  var artBM = req.body.article_body_markdown;
  db.query(`INSERT INTO Articles (create_time, update_time, card_title, card_image_link, card_desc, article_body_markdown) VALUES (?,?,?,?,?,?)`, [ct, ut, crdT, crdIL, crdD, artBM], (error, rows, fields) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ message: "success!!" });
    }
  })
});

module.exports = router;
