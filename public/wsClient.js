var HOST=location.origin.replace(/^http/,'ws');
var ws=new WebSocket(HOST);
var elem=document.createElement('div');

ws.onmessage=function(event){
	elem.innerHTML=event.data;
};