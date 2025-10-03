import TeachersModel from "../Models/Teachers.Model.js"

const TeachersController = {
    getTeachers: async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1
            const limit = parseInt(req.query.limit) || 10
            const skip = (page - 1) * limit

            const teachersList = await TeachersModel.find()
                .skip(skip)
                .limit(limit)

            const total = await TeachersModel.countDocuments()
            return res.status(200).json({ data: teachersList, pagination: { total, page, limit, totalPages: Math.ceil(total / limit) } })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
    createTeachers: async (req, res) => {
        const { userId, teacherPositions, type, school, major, year, isGraduated } = req.body
        if (!userId || !teacherPositions || !type || !school || !major || !year || isGraduated === undefined) return res.status(400).json({ message: 'Missing information' })
        
        const startDate = new Date()
        const endDate = new Date(startDate.getFullYear() + 1, startDate.getMonth(), startDate.getDate())
        const code = `TCH-${Date.now()}`

        const newTeacher = new TeachersModel({ userId, teacherPositions, code, startDate, endDate, degrees: { type, school, major, year, isGraduated } })
        try {
            const createTeacher = await newTeacher.save()
            return res.status(201).json({ message: 'Create teacher successfully', teacher: createTeacher })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }
}

export default TeachersController