import express from 'express'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

const app = express()

dotenv.config()
const port = process.env.PORT;
const key = process.env.SECRET_KEY as string
app.use(express.json())

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

const users = [
    {
        id: 1,
        name: 'Shelby',
        gmail: 'user1@gmail.com'
    },
    {
        id: 2,
        name: 'John',
        gmail: 'user2@gmail.com'
    }
]

app.post('/login', (req, res) => {
    const data = req.body
    console.log(data)
    const accessToken = jwt.sign(data, key, { expiresIn: '30s' })
    console.log({ accessToken })
    res.status(200).json({ accessToken })
})

const authenToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const header = Headers['authorization']
    // Beaer [token]
    const token = header.split(' ')[1]
    if (!token) res.sendStatus(401)

    jwt.verify(token, key, (error: jwt.VerifyErrors) => {
        error ? res.sendStatus(403) : next()
    })
}

app.get('/users', authenToken, (req, res) => {
    res.json({ data: users })
})


