const User = require("../Models/User")

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.createUser = async (req, res) => {
    try {
        // validating request body
        if (!req.body.name || !req.body.email || !req.body.jobTitle || !req.body.address) {
            return res.status(400).json({ message: "Please fill all the fields" })
        }
        const user = new User(req.body)
        await user.save()
        res.json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}




