var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://cbrophy:scoutiste_2@ds057204.mongolab.com:57204/scoutiste_2';
var item = require('../../models/Item.js');

/* GET /items listing. */
router.get('/', function(req, res, next) {
  item.find(function (err, items) {
    if (err) return next(err);
    res.json(items);
  });
});

/* POST /items */
router.post('/', function(req, res, next) {
  item.create(req.body, function (err, item) {
    if (err) return next(err);
    res.json(items);
  });
});

/* GET /items/id */
router.get('/:id', function(req, res, next) {
  item.findById(req.params.id, function (err, item) {
    if (err) return next(err);
    res.json(item);
  });
});

/* PUT /items/:id */
router.put('/:id', function(req, res, next) {
  item.findByIdAndUpdate(req.params.id, req.body, function (err, item) {
    if (err) return next(err);
    res.json(item);
  });
});

/* DELETE /items/:id */
router.delete('/:id', function(req, res, next) {
  item.findByIdAndRemove(req.params.id, req.body, function (err, item) {
    if (err) return next(err);
    res.json(item);
  });
});

module.exports = router;
    

