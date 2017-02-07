var express = require('express');
var app = express()


//if you hit index.js then sercer webiste.

//    	
// app.get('/', (req,res) => {
// 	res.sendFile(__dirname + '/static/index.html')
// })
//serve css img and javascript
app.use('/', express.static('static'))



//listen on port
app.listen(3000, ()=> {
	console.log('Ready, set Go!')
})
