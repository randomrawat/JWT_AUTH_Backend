const express = require("express")
const {ensureAuthenticated} = require("../Middleware/ensureAuthentication")
const router = express.Router()

router.get('/', ensureAuthenticated,  (req, res)=>{
    console.log("---- logged in user detail ----", req.user)
    res.status(200).json([
        {
            name: "mobile",
            price: 10000
        },
        {
            name: "tv",
            price: 20000
        }
    ])
})

module.exports = router