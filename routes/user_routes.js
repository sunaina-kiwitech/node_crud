var express = require('express');
var router = express.Router();
var userController = require('../controller/user_controller');

router.get("/users", userController.getUsers);
router.get("/user/:id", userController.getUser);
router.post("/user", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;