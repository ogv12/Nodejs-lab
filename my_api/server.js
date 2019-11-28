const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.json());

app.post("/my_api",(req,res) => 
	{
		let nombre=req.body.nombre;
		console.log("Se recibio: " + nombre);
		res.send(nombre);
	});

app.listen(3001,function(){
                console.log("Express started...");
        });

