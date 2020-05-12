import Express from 'express'
import bodyParser from 'body-parser'

import {
    verifyToken,
    protectRoute
} from './middlewares/auth'
import { generateToken, generateToken1 } from './services/auth'

const app = Express()
const port = 3000

app.set('json spaces', 2);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(verifyToken)

app.get('/', (req, res) => res.send('Olá mundo pelo Express!'))

app.post('/login', (req, res) => {
    const { username, password } = req.body

    if (username === 'admin' && password === '123456' ) {
        const payload = {
            sub: 1,
            name: 'Nome Usuário',
            roles: ['admin']
        }
        const token = generateToken(payload)    
        res.send({
            token        
        }) 
    }else if (username === 'usuario' && password === '123' ) {
        const payload1 = {
        sub: 2,
        name: 'Alex',
        roles: ['megaAdmin']
    }
    const token1 = generateToken1(payload1)

    res.send({
        token1
    })
}else return res.status(400).send({ error: 'Usuário ou senha inválidos!' })
})

app.get('/protected', protectRoute, (req, res) => res.send(req.decoded))


app.listen(port, () => console.log('Api rodando na porta 3000'))