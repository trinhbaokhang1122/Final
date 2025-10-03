import mongoose from "mongoose"

const TeachersSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
    isAcTive: { type: Boolean, required: true, default: true },
    isDeleted: { type: Boolean, required: true, default: false },
    code: { type: String, required: true, unique: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    teacherPositions: { type: mongoose.Types.ObjectId, ref: 'teachers-position', required: true },
    degrees: {
        type: { type: String, required: true },
        school: { type: String, required: true },
        major: { type: String, required: true },
        year: { type: Number, required: true },
        isGraduated: { type: Boolean, required: true }
    },
})

const TeachersModel = mongoose.model('teachers', TeachersSchema)
export default TeachersModel