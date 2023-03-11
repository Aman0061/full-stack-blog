import {Router} from 'express'
import {register, login, getMe} from '../controllers/auth.js'
const router = new Router()

//Registr
//http://localhost:3003/api/auth/register
router.post('/register', register)

//Login
//http://localhost:3003/api/auth/login
router.post('/register', login)




// Get Me
// http://localhost:3003/api/auth/me
router.get('/me')

export default router