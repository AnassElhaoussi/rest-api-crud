
import express from "express";
import {v4 as uuidv4 } from 'uuid'

uuidv4()

const router = express.Router()

let users = [
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
    

    const userwithId = {...user, id: uuidv4()}


    users.push(userwithId)
    res.send(`User added to the database : ${userwithId.firstName}`)
})


router.get('/:id', (req, res) => {
    const userWithId = users.find(({id}) => id === req.params.id)

    if(!userWithId) res.status(404).send('There is no user for this path')
    res.send(userWithId)
})

router.delete('/:id', (req, res) => {
    users = users.filter(user => user.id !== req.params.id)

    res.send(`User with id of ${req.params.id} is deleted !`)
})

router.patch('/:id', (req, res) => {


    const user = users.find(user => user.id === req.params.id)

    if(req.body.firstName) user.firstName = req.body.firstName

    if(req.body.lastName) user.lastName = req.body.lastName

    if(req.body.age) user.age = req.body.age

    res.send(`User with id ${req.params.id} has been updated`)
})

export default router