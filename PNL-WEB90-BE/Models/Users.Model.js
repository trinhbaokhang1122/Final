import mongoose from 'mongoose'

const UsersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    identity: { type: String, required: true },
    DOB: { type: Date, required: true },
    isDeleted: { type: Boolean, required: true, default: false },
    role: { type: String, enum: ['STUDENT', 'TEACHER', 'ADMIN'], default: 'STUDENT', required: true }
})

const UsersModel = mongoose.model('users', UsersSchema)
export default UsersModel
