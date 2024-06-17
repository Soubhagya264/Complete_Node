const express = require("express")
const path = require("path");
const cookiePaser = require("cookie-parser");
const connectDB = require("./config/dbconfig")
const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");
const Blog = require("./models/blog");
const {
    checkForAuthenticationCookie,
} = require("./Middlewares/authentication");
require('dotenv').config();
const logger = require('./Middlewares/logger')
const app = express()
const PORT = process.env.PORT || 3000;
connectDB();
app.use(express.json())
app.use(logger)
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({ extended: false }));
app.use(cookiePaser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));

app.get("/", async (req, res) => {
    const allBlogs = await Blog.find({});
    res.render("home", {
        user: req.user,
        blogs: allBlogs,
    });
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`
    )
})
