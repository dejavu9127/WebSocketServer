/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express=require('express');
var app=express();
var path=__dirname+'/public';
var http=require('http');
var server=http.Server(app);
var port=process.env.PORT || 5000;


app.use('/',express.static(path));

server.listen(port,function(){
   console.log("["+(new Date())+"]"+'\n >>>Listening on port '+port); 
});

var WebSocketServer=require('ws').Server;
var wss=new WebSocketServer({server:server});

wss.on('connection',function(connection){
    console.log("New Incoming Connection");
    connection.on('message',function(message){
        connection.send(message);
    });
    connection.on('close',function(){
        console.log("Connection closed");
    });
});