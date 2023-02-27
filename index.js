const express = require("express");
const app = express();
const DB = require("./database").connectDB; // we are refering to it

// Connect to our DB
DB();

// we are informing our API to accept only json request
app.use(express.json());

