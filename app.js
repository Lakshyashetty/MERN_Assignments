const express = require("express");
const { ConnectDb } = require("./db");
const router = require("./router/userrouter");

const session = require('express-session');
const app = express();
ConnectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(session ( {
    secret:"test",
    resave: false,
    saveUninitialized : false
} ) )
app.use("/", router);
app.listen(4000, () => {
  console.log("running...");
});
