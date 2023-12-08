const {Router} = require('express');
const {db}=require('../firebase');
const plantController=require('../controllers/plantController');
const userController=require('../controllers/userController');
const authController=require('../controllers/authController');

const router = Router();

router.get('/plants',plantController.getPlants);
router.post('/new-plant',plantController.createNewPlant);
router.put('/update-plant/:id',plantController.updatePlant);
router.delete('/delete-plant/:id',plantController.deletePlant);
router.get('/plant/:id',plantController.getPlant);

router.get('/users',userController.getUsers);
router.post('/new-user',userController.createNewUser);
router.put('/update-user/:id',userController.updateUser);
router.delete('/delete-user/:id',userController.deleteUser);

router.post('/login',authController.login);
router.post('/logout',authController.logout);


module.exports=router;