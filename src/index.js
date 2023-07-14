require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const conn = require("express-myconnection");
const app = express();
const route = require("./routers/index");
const port = process.env.PORT || 5001;
const dbConfig = {
    host: "localhost",
    port: "3307",
    user: "root",
    password: "",
    database: "users"
};

app.use(conn(mysql, dbConfig, "single"));
app.use(express.json());
app.use("/", route);



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});