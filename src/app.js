import express from 'express'
import mongoose from 'mongoose'
import sessionRouter from './routes/sessions.route.js'
import { faker } from '@faker-js/faker'

const app = express()
const PORT = 8080
const connection = mongoose.connect('mongodb://localhost:27017')

app.use(express.json())
app.use('/api/session', sessionRouter)
app.use('/api/test/user', (req, res) => {
    const user = {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    res.send(user)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))