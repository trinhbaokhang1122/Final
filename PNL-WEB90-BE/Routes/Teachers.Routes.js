import TeachersController from "../Controllers/Teachers.Controller.js"
import { validateRegisterTeacher } from "../Middlewares/Auth.Middleware.js"
import { Router } from "express"

const TeachersRouter = Router()

TeachersRouter.get('/', TeachersController.getTeachers)
TeachersRouter.post('/create', validateRegisterTeacher, TeachersController.createTeachers)

export default TeachersRouter