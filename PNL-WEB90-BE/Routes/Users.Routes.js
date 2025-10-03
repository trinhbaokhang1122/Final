import UserController from "../Controllers/Users.Controller.js"
import { Router } from 'express'
import { validateRegisterUser } from "../Middlewares/Auth.Middleware.js"

const UsersRouter = Router()

UsersRouter.post('/create', validateRegisterUser, UserController.createUser)
UsersRouter.get('/', UserController.getUsers)

export default UsersRouter