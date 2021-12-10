const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

app.use(cors());
app.use(express.json());

///ROUTES

app.post("/customer", async(req, res) =>{
    try {
        const {surname}  = req.body;
        const newCustomer = await pool.query('INSERT INTO customer(surname) VALUES($1) RETURNING * ', [surname]);
     } catch (error) {
        console.log(error.message);
    }
});

app.get("/customer", async(req,res) =>{
    try {
        const allCustomer = await pool.query("SELECT * FROM customer");
        res.json(allCustomer.rows);
    } catch (error) {
        console.error(error.message);
    }
});


app.listen(5000, () =>{
    console.log("Server has started on port 5000");
});
