const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const authenticateToken = require('../middlewares/authenticateToken');

router.post('/create', studentController.create);
router.post('/login', studentController.login);
router.get('/getAllStudent', studentController.getAll);
router.post('/logout', studentController.logout);
router.post('/getPermit', authenticateToken, studentController.getPermit); 
router.get('/permits', studentController.getAllPermits);
router.put('/update', studentController.update); 
router.delete('/delete', studentController.delete);



module.exports = router;
