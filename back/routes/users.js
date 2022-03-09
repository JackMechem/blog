var express = require('express');
var router = express.Router();
const mysql = require("mysql");
const bodyParser = require("body-parser");
var cors = require('cors');

router.use(cors());

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
