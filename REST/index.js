const express = require('express')
const users = require("./MOCK_DATA.json")
const app = express()
const port = 3000
//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    console.log("Request received")
    next();
})

app.get("/users", (req, res) => {
    res.setHeader(
        "Content-Type",
        "application/json"
    )
    const html = `
    <ul>
    ${users.slice(Math.floor(Math.random() * 10), 100).map(user => `<div style="display: grid;
            grid-row-gap: 20px;
            grid-column-gap: 20px;
            border-radius:2px solid gray;
            box-shadow:0 0 10px rgba(0,0,0,0.1);
            margin: 5px;
            padding: 30px;
            background-color:lightpink; 
            "}><li>
        <h2>${user.first_name} ${user.last_name}</h2>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.street_address}</p>
        </li></div>`).join("")}
    </ul>
    `
    return res.send(html)
})
app.get("api/users", (req, res) => {
    return res.json(users);
})

//Dynamic Path Parameter
app.get("/users/:id", (req, res) => {
    const id = req.params.id
    const user = users.find(user => user.id === parseInt(id))
    if (user) {
        const userHtml = `
        <div style="display: grid;
            grid-row-gap: 20px;
            grid-column-gap: 20px;
            border-radius:2px solid gray;
            box-shadow:0 0 10px rgba(0,0,0,0.1);
            margin: 5px;
            padding: 30px;
            background-color:lightpink; 
            "}>
        <h2>${user.first_name} ${user.last_name}</h2>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.street_address}</p>
        </div>`
        return res.send(userHtml)
    }
    else {
        return res.status(404).json({ message: "User not found" })
    }
})

// Post request
app.post("/api/users-create", (req, res) => {
    const { first_name, last_name, email, street_address } = req.body
    const user = {
        id: users.length + 1,
        first_name,
        last_name,
        email,
        street_address
    }
    users.push(user)
    return res.json({ status: "user created successfully" })
}
)
// update user
app.put("/api/users/:id", (req, res) => {
    const id = req.params.id
    const user = users.find(user => user.id === parseInt(id))
    if (user) {
        const { first_name, last_name, email, street_address } = req.body
        first_name && first_name !== "" ? user.first_name = first_name : user.first_name = user.first_name
        last_name && last_name !== "" ? user.last_name = last_name : user.last_name = user.last_name
        email && email !== "" ? user.email = email : user.email = user.email
        street_address && street_address !== "" ? user.street_address = street_address : user.street_address = user.street_address
        return res.json({ status: "user updated successfully" })
    }
    else {
        return res.status(404).json({ message: "User not found" })
    }
})
// Delete Route
app.delete("/api/users/:id", (req, res) => {
    const id = req.params.id
    const userIndex = users.findIndex(user => user.id === parseInt(id))
    // remove from Users 
    if (userIndex !== -1) {
        users.splice(userIndex, 1)
        return res.json({ status: "user deleted successfully" })
    }
    else {
        return res.status(404).json({ message: "User not found" })
    }
})
app.listen(port, () => console.log(` app listening on port ${port}!`))