var express = require('express');
var router = express.Router();
const ObjectID = require('mongodb').ObjectID;

router.get('/contacts', (req, res, next) => {
  req.collection.find({})
    .toArray()
    .then(results => res.json(results))
    .catch(error => res.send(error));
});

router.post('/contacts', (req, res, next) => {
  const { fullname,date,mobileno,email,msg } = req.body;
  if (!fullname || !date || !mobileno || !email || !msg) {
    return res.status(400).json({
      message: 'All field are required',
    });
  }

  const payload = { fullname,date,mobileno,email,msg };
  req.collection.insertOne(payload)
    .then(result => res.json(result.ops[0]))
    .catch(error => res.send(error));
});

router.delete('/contacts/:id', (req, res, next) => {
  const { id } = req.params;
  const _id = ObjectID(id);
  req.collection.deleteOne({ _id })
    .then(result => res.json(result))
    .catch(error => res.send(error));
});

module.exports = router;
