
import express from "express";
import {v4 as uuidv4 } from 'uuid'

uuidv4()

const router = express.Router()

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25,
        id: 1
    },
    {
        firstName: "Sally",
        lastName: "Martinez",
        age: 30,
        id: 2
    }
]

router.get('/', (req, res) => {
    console.log(users);
    res.send(users)
})

router.post('/', (req, res) => {

    const user = req.body
    

    const userwithId = {...user, id: users.length - 1}


    users.push(userwithId)
    res.send(`User added to the database : ${userwithId.firstName}`)
})


router.get('/:id', (req, res) => {
    const userWithId = users.find(({id}) => id === parseInt(req.params.id))
    if(!userWithId) res.status(404).send('There is no user for this path')
    res.send(userWithId)
})

export default router