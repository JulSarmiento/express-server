const express = require('express');
const { render } = require('express/lib/response');
const router = express.Router();

router.get('/tableTitle', (req, res) => {
  res.render('tableTitle')
});

router.get('/noTable', (req, res) => {
  res.render('noTable');
});



module.exports = router;