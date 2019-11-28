const express = require("express");
const app = express();

const bodyParser=require("body-parser");
const request=require("request");

app.use(bodyParser.json());

app.get("/greetings",(req,res) => {
		let nombre1 = req.query.nombre;
		console.log("Se recibio: " + nombre1);
		request.post("http://my_api:3001",{json:{nombre:nombre1}},function(err,r,body)
			{
				res.send("Hello: "+body);

			});
	});

/*setTimeout(function()
	{
		//invocar api despues de 10s
		request.post("http://localhost:3000/greetings",{json:{nombre:"Omar"}},function(req,res,body)
			{
				console.log(body);
			})

	},10000)*/

app.listen(3000,function(){
		console.log("Express started...");
	});


