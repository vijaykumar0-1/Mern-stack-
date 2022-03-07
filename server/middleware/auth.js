
const auth = (req, res, next) => {
    console.log(req.headers);
    var authHeader = req.headers.authorization;
    if (!authHeader) {
        res.status(401).json('you are not authenticated!!!')
        res.setHeader('WWW-Authenticate', 'Basic');
        next();
        return;
    }

    var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];
    if (user == 'admin' && pass == 'password') {
        next(); // authorized
    } else {
        res.status(401).json('you are not authenticated!!!')
        res.setHeader('WWW-Authenticate', 'Basic');
        next();
    }
}

module.exports = auth;