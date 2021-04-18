var express = require('express');
var app = express();

app.get('/hello', function(req, res){
	res.send("Hello World!");
});

app.get('/maxDiff', function(req, res){
	//[-10,-5,1,2,3,6,19,21,20,-1,-2,-5]
	var arr = JSON.parse(req.query.array);
    arr.sort((a,b)=>a-b);
    let maxDiff = 0;
    
    for(let i=0;i<arr.length;i++){
        
        let presntDiff = arr[i+1]-arr[i];
        if(maxDiff<presntDiff){
            maxDiff=presntDiff;
        }
    } 

	res.send(maxDiff.toString());
});


app.listen(3000);