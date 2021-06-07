var express = require('express');
var router = express.Router();
const DataController = require("../controllers/form")
const { validator } = require("../middleware/validate")
const {
  formValidation
} = require("../validators")

const {createData,getData} = DataController;


router.post('/', validator(formValidation), createData);

router.get('/', getData);



/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
