const verifyToken = (req, res,next)=>{
    console.log('Aceso al Middleware');
    const authorization_header = req.headers['authorization'];

    if (authorization_header != undefined) {
        const token = authorization_header.split(" ")[1];
        req.token = token;
        next();
    } else {
        console.log('No ingreso Token')
    }

}

exports.verifyToken = verifyToken