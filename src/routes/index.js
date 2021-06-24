const{Router} = require('express');
const router = new Router();

//routes
router.get('/test',(req,res) =>{
    const data = {
        "name":"Susel",
        "website": "sretanausac.com"
    };
    res.json(data);
});

module.exports = router;