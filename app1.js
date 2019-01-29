var ibmdb = require('ibm_db');
var fs =require('fs');
var express = require('express');


var router = express.Router();
console.log("Test program  access DB2 sample database");

/*Connect to the database server
param 1 : The DSN string which has the details of the database name to connect to ,user id ,password,hostname ,portnumber
param 2 : The callback function to execute when the connection attempt to the specified database is completed
*/

//ibmdb.open("DRIVER={DB2};DATABASE=BLUDB;UID=tqp83758;PWD=nqfhb@l5tjslgjm8;HOSTNAME=dashdb-txn-sbox-yp-lon02-01.services.eu-gb.bluemix.net;port=50000",(err,conn)=>
//{	[‎11/‎22/‎2018 4:31 PM]  Nidhi Panwar: // 


//var ibmdb = require('ibm_db');
//var express = require('express');


//var router = express.Router();
//console.log("Test program  access DB2 sample database");

/*Connect to the database server
param 1 : The DSN string which has the details of the database name to connect to ,user id ,password,hostname ,portnumber
param 2 : The callback function to execute when the connection attempt to the specified database is completed
*/

ibmdb.open("DRIVER={DB2};DATABASE=BLUDB;UID=ndk89838;PWD=0bmg47crj@1vgc5s;HOSTNAME=dashdb-txn-sbox-yp-lon02-01.services.eu-gb.bluemix.net;port=50000",(err,conn)=>
{	

		
		if(err){
			console.log("error is : ",err.message);
		}else{
			
			//Showing all the records
			var show = ()=>{
				conn.query("select * from myTable  ",(err,myTables,moreResultSets)=>{
				// conn.query("select * from employee fetch first 5 rows only ",(err,employees,moreResultSets)=>{
				console.log("c1\t\tc2");
				console.log("--------\t\t------");
				

				/*Loop through the employees list returned from the select query and print the First name and last name of the employee*/

				for(var i = 0; i<myTables.length;i++){
					console.log(myTables[i].c1,"\t\t",myTables[i].c2);
				}
				console.log("--------------------------");
				/*
					Close the connection to the database 
					param 1 : The callback function to execute on completion of close function
				*/

				
				conn.close(()=>{
					console.log("Connection Closed");
				});
			});

			} 
			conn.query("create table mytable (c1 int, c2 varchar(20))");
 			conn.query("insert into myTable values(('1','wasan')",(err,myTables,moreResultSets)=>{
				 	setTimeout(()=>{
						console.log("Inside Insert Function");
				 		show();
				 	},1000);
				 });
				
				 	conn.query("UPDATE EMPLOYEE SET FIRSTNAME = 'xyz'WHERE LASTNAME='Burgessess' ",(err,employees,moreResultSets)=>{
				  	setTimeout(()=>{
				  		console.log("Inside UPDATE Function");
				  		show();
				  	},3000);
				  });

			
				
				  conn.query("DELETE FROM EMPLOYEE WHERE LASTNAME='Wasan'",(err,employees,moreResultSets)=>{

				  	show();
				  //});
				
				 // conn.query("DELETE FROM EMPLOYEEE",(err,employees,moreResultSets)=>{
				 // 	show();
				 // })


		}


}); module.exports = router; 
 
	