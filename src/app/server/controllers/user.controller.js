const mongoose = require('mongoose');

const travelDB = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var user = new travelDB();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.mobile = req.body.mobile;
    user.email = req.body.email;
    user.msg = req.body.msg;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}
