const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"cdac"
})

app.post('/signup',(req,res)=>{
    const sql = "INSERT INTO signup (`name`, `email`, `password`) VALUES (?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    
    console.log(values);
    
    db.query(sql, values, (err, data) => {
         if (err) {
            return res.json("Error");
        } 
        return res.json(data);
    });
})

app.post('/login',(req,res)=>{
    const sql = "SELECT * FROM login WHERE `eamil` = ? AND `password` = ?";
    
    db.query(sql, [req.body.name,req.body.email,req.body.password], (err,data)=>{
         if(err){
            return res.json("Error");
        } 
       if(data.length > 0)
       {
        return res.json("Success");
       }
       else {
        return res.json("Fail");
       }

    })
})

app.post('/creat', (req, res) => {
    //const sqll = "SELECT * FROM event WHERE `Event_name` = ? AND `details` = ?";
    
    const sql = "INSERT INTO event (`Event_name`, `details`) VALUES (?)";
    const values =[
        req.body.Event_name,
        req.body.details
    ]
    console.log(values);
    db.query(sql, [values], (err, data) => {
      //  if(err) return res.json("Error");
        return res.json(data);
    })
})

app.listen(8081, ()=>{
    console.log("listening");
})