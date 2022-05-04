const express= require('express');
const path =require('path');
const fs = require('fs');
const  {sendEmail}= require('../config/config.email');

const router = express.Router();

router.get('/',(req,res)=>{

	 res.render('index.html');
	

	});


router.post('/',(req,res)=>{

const {nombre,apellido,edad,email,mensaje,fecha,foto} = req.body;
console.log(nombre);
sendEmail("brayan.burg@hotmail.com",'saludo',"si envia");
	 res.render('index.html');

	});

module.exports = router;