const mysql = require('mysql');
const express = require("express")
const app = express();

const conn =mysql.createConnection({
    host:"localhost",
    user: "root",
    database:"my_application"})

    

app.get("/user/:id", (req,res)=>{
    const id=req.params.id
    try{
        conn.query("SELECT * FROM users WHERE users.ID="+id, (err,result)=>{
            res.send(result)
        })
        
    }
    catch(e){
        throw e;
    }
})

app.get("/users/id", (req, res)=>{
    try{
        conn.query("SELECT ID FROM users", (err,result)=>{
            res.send(result)
        })
    }
    catch(e){
        throw e;
    }

})

app.get("/users", (req, res)=>{
    try{
        conn.query("SELECT * FROM users", (err,result)=>{
            res.send(result)
        })
    }
    catch(e){
        throw e;
    }

})





app.listen(3000, () => {
    conn.connect((err) => {
        err ? console.error(err) : console.log("Db connected")
    })
})
