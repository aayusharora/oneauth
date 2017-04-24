/**
 * Created by championswimmer on 13/03/17.
 */
const cel = require('connect-ensure-login');

const router = require('express').Router();

router.get('/login', function(req, res, next) {
    res.render('login', {title: "Login | OneAuth", loggedIn : "hidden"})
});
router.get('/signup', function(req, res, next) {
    res.render('signup', {title: "Signup | OneAuth", loggedIn : "hidden"})
});
router.get('/client/add',
    cel.ensureLoggedIn('/login'),
    function(req, res, next) {
        res.render('client/add', {title: "Add New Client | OneAuth", loggedIn : "visible"})
    }
);



module.exports = router;