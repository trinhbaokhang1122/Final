import UsersModel from "../Models/Users.Model.js"
import TeachersModel from "../Models/Teachers.Model.js"
import TeachersPositionModel from "../Models/Teachers-Position.Model.js"

export const validateRegisterUser = async (req, res, next) => {
    try {
        const { name, email, phoneNumber, address, identity, DOB } = req.body
        if (!name || !email || !phoneNumber || !address || !identity || !DOB) return res.status(400).json({ meesage: 'Missing information' })
    
        const findEmail = await UsersModel.findOne({ email })
        if (findEmail) return res.status(400).json({ message: 'Email has been used' })
        
        const emailRegex = /^\S+@\S+\.\S+$/
        if (!emailRegex.test(email)) return res.status(400).json({ message: 'Invalid email type' })
        
        next()
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const validateRegisterTeacher = async (req, res, next) => {
    try {
        const { userId, teacherPositions, type, school, major, year, isGraduated } = req.body
        if (!userId || !teacherPositions || !type || !school || !major || !year || isGraduated === undefined) return res.status(400).json({ message: 'Missing information' })
        
        const findUser = await UsersModel.findById(userId)
        if (!findUser) return res.status(404).json({ message: 'User not found' })
        
        const findTeacherPosition = await TeachersPositionModel.findById(teacherPositions)
        if (!findTeacherPosition) return res.status(404).json({ message: 'Teacher position not found' })
        
        next()
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const validateRegisterTeacherPosition = async (req, res, next) => {
    try {
        const { name, code, des } = req.body
        if (!name || !code || !des) return res.status(400).json({ message: 'Missing information' })

        const findById = await TeachersPositionModel.findOne({ code })
        if (findById) return res.status(400).json({ message: 'Teacher position code has been used' })

        next()
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}