import express from 'express'
import userController from '../controllers/userController'
import { create } from 'ts-node'
const router = express.Router()

router.get('/users', userController.getAllUser)
router.get('/user/:userId', userController.getUsers)
router.post('/user' , userController.createUser)
router.put('/user/:userId' , userController.updateUser)
router.delete('/user/:userId',userController.deleteUsers)


export default router