
import express from "express"
import bodyParser from 'body-parser'
import usersRoutes from './Routes/users.js'

const app = express()
const PORT = 5000


app.use(express.json())
app.use('/users', usersRoutes)


app.get('/', (req, res) => {
    res.send('Hello there')
})

app.listen(PORT, () => console.log(`Server running perfectly on http://localhost:${PORT}`))