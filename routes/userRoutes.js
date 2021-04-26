const router = require ('express').Router();

const authController = require ('../controllers/authController')
const userController = require('../controllers/userController');

// s'inscrire
router.post("/register", authController.signUp);
// se connecter
router.post('/login', authController.signIn)
// se deconnecter
router.get('/logout', authController.logout)


// user dispaly: 'block'
router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;