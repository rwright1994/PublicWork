let middleware = {}

middleware.authenticate = (req,res,next) => {
    if(!req.user){
        req.session.username = req.body.username;
    }
    
    next();
}

middleware.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that.");
    res.redirect("/login");
}

module.exports = middleware;    