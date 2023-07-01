const express = require("express");
const cors = require("cors");

const app = express();

var corOptions = {
    origin: "https://localhost:8081",
};

/**
 * Middleware
 */
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

/**
 * Routers
 */
const userRoute = require("./router/userRoute");
const listRoute = require("./router/listRoute");
const userListRoute = require("./router/userListRoute");
const authRoute = require("./router/authRoute");

app.use("/api/user", userRoute);
app.use("/api/list", listRoute);
app.use("/api/userlist", userListRoute);
app.use("/api/auth", authRoute);

// Test Hello
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Hello World, API",
    });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
