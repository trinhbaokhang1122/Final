import UsersRouter from "./Users.Routes.js"
import TeachersRouter from "./Teachers.Routes.js"
import TeachersPositionRouter from "./Teachers-Position.Routes.js"
import { Router } from "express"

const rootRouter = Router()

rootRouter.use('/users', UsersRouter)
rootRouter.use('/teachers', TeachersRouter)
rootRouter.use('/teachers-position', TeachersPositionRouter)

export default rootRouter