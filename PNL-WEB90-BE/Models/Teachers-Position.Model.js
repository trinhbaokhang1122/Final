import mongoose from "mongoose"

const TeachersPositionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    des: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
    isDeleted: { type: Boolean, required: true, default: false }
})

const TeachersPositionModel = mongoose.model('teachers-positions', TeachersPositionSchema)
export default TeachersPositionModel