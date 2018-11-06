let express = require('express');
let PlaceController = require('../controllers/PlaceController');
let UserController = require('../controllers/UserController')

let router = express.Router();

router.get('/places', PlaceController.show);
router.post('/places', PlaceController.store);
router.put('/places/:id', PlaceController.update);  
router.get('/places/:id', PlaceController.find);
router.delete('/places/:id', PlaceController.destroy);


router.post('/users', UserController.store);
router.get('/users/:id', UserController.find);
module.exports = router;