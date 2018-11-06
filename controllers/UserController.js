let User = require('../models/User')

let UserController = {    
    find(req, res){
        User.findById({
            _id: req.params.id
        })
        .then(doc =>{
            re.json(doc)
        }).catch(err =>{
            res.json(err)
        })
    },
    store(req, res) {
        User.create({
            name: req.body.name,
            mail: req.body.mail,
            password: req.body.password
        }).then(doc => {
            res.json(doc)
        }).catch(err => {
            res.json(err)
        }) 
    }
} 

module.exports = UserController;