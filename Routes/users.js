
import express from "express";
import { getUsers, getUser, createUser, deleteUser, updateUser } from "../controllers/users";


const router = express.Router()


router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)




export default router