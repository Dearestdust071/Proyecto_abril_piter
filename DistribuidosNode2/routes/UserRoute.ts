import { Router } from "express";
import { UserController } from "../app/controllers/UserController";

const router = Router();

router.get('/getUsers', (req, res) => {
    console.log("[Route] /getUsers");
    UserController.viewUsers(req, res);
});
router.post('/createUser', (req, res) => {
    console.log("[Route] /createUser");
    UserController.createUser(req, res);
});
router.get('/getUser/:id', (req, res) => {
    console.log("[Route] /getUser/:id");
    UserController.getUser(req, res);
});
router.put('/updateUser/:id', (req, res) =>{
    UserController.updateUser(req, res);
});
router.delete('/deleteUser/:id', (req, res) =>{
    UserController.deleteUser(req, res);
});
router.post('/signUp', (req, res) =>{
    UserController.signUp(req, res);
});
router.post('/login', (req, res) =>{
    UserController.login(req, res);
});
export default router;
