import UsersModel from "../Models/Users.Model.js"

const UserController = {
    getUsers: async (req, res) => {
        try {
            const usersList = await UsersModel.find()
            return res.status(200).json(usersList)
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    },
    createUser: async (req, res) => {
        const { name, email, phoneNumber, address, identity, DOB } = req.body
        if (!name || !email || !phoneNumber || !address || !identity || !DOB) return res.status(400).json({ meesage: 'Missing information' })

        const dobDate = new Date(DOB)
        if (isNaN(dobDate.getTime())) return res.status(400).json({ message: 'Invalid DOB format. Use YYYY-MM-DD' })

        const newUser = new UsersModel({ email, address, DOB: dobDate, name, identity, phoneNumber })
        try {
            const createUser = await newUser.save()
            return res.status(201).json({ message: 'Create user successfully', user: createUser })
        } catch (error) {
            
        }
    }
}

export default UserController