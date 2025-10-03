import TeachersPositionController from "../Controllers/Teachers-Position.Controller.js"
import { validateRegisterTeacherPosition } from "../Middlewares/Auth.Middleware.js"
import { Router } from 'express'

const TeachersPositionRouter = Router()

TeachersPositionRouter.get('/', TeachersPositionController.getTeachersPosition)
TeachersPositionRouter.post('/create', validateRegisterTeacherPosition, TeachersPositionController.createTeacerPosition)

export default TeachersPositionRouter