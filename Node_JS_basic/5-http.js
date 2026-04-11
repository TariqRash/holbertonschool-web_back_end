const http=require('http');
const count=require('./3-read_file_async');
const app=http.createServer((req,res)=>{
if(req.url==='/'){res.end('Hello Holberton School!');}
else if(req.url==='/students'){
res.write('This is the list of our students\n');
count(process.argv[2]).then(()=>res.end()).catch(e=>res.end(e.message));
}else{res.end('Hello Holberton School!');}});
app.listen(1245);
module.exports=app;
