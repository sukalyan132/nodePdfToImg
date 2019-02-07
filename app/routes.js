var express         =   require("express");
var fs              =   require('fs');
const dir 			= 	'./tmp';
var async 			=   require('async');

/*****************************************************************/

module.exports = function (app) {
	app.post('/api/allFiles',function(req,res){
        fs.readdir(dir, (err, files) => {
		  var fileData=files;
		  fileData.push('01.jpg');
		  res.status(200).json({"data":fileData});
		});  
    })
}