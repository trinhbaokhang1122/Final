import TeachersPositionModel from "../Models/Teachers-Position.Model.js"

const TeachersPositionController = {
    getTeachersPosition: async (req, res) => {
        try {
            const teachersPositionList = await TeachersPositionModel.find()
            return res.status(200).json(teachersPositionList)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
    createTeacerPosition: async (req, res) => {
        const { name, code, des } = req.body
        if (!name || !code || !des) return res.status(400).json({ message: 'Missing information' })

        const newTeacherPosition = new TeachersPositionModel({ name, code, des })
        try {
            const createTeacerPosition = await newTeacherPosition.save()
            return res.status(201).json({ message: 'Create teacher position successfully', data: createTeacerPosition })
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }
}

export default TeachersPositionController