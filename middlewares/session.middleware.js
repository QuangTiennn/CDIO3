var Session = require('../models/session.model');
//auto create session
module.exports = async function(req, res, next) {
    if (!req.signedCookies.sessionId) {
        var session = await Session.create({});
        res.cookie("sessionId", session._id, {
            signed : true
        });
    }
    next();
}