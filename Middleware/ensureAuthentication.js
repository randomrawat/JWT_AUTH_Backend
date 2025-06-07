require('dotenv').config();
const jwt = require("jsonwebtoken")

const ensureAuthenticated = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!authHeader) {
        return res.status(403).json({ message: "unauthorized, JWT token is required" });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: "unauthorized, JWT token wrong or expired" });
    }
 }

module.exports = { ensureAuthenticated }
