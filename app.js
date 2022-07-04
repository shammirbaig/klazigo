const a=12;
if(a<10){
    console.log("a is less than 10")
}
else{
    console.log("a is greater than 10")



}
require('./add.js');
console.log(__dirname);
const os=require('os');
const user=os.userInfo()
console.log(user);
const currOs={
    type:os.type(),
    totalmem:os.totalmem()
}
console.log(currOs);
const {readFileSync,writeFileSync}=require('fs');
const first=readFileSync('./first.txt','utf8')
const second=readFileSync('./second.txt','utf8')
// console.log(first,second);
writeFileSync(
    './result-sync.txt',`here is the result: ${first},${second} `,{flag:'a'}
)
const { Console } = require('console');
const {readFile,writeFile}=require('fs');
readFile('./first.txt','utf8',(err,res)=>{
    if(err){
        console.log("error")
    }
    console.log(res)
})
const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.write("hi this is home page") 
    }
    if(req.url=='/about'){
        res.write("hi this is about page") 
    }
    if(req.url=='*'){
        res.write("error") 
    }
    res.end()
}
)
server.listen(5000)
const load=require('lodash')
const items=[1,[2,[3,[4]]]]
const newitems=load.flattenDeep(items)
console.log(newitems);
const {readFile}=require('fs');
const getText=(path)=>{
    return new Promise((reject,resolve)=>{
readFile(path,'utf8',(err,data)=>{
    if(err){
        reject(err)
    }
    else{
        console.log(data)
    }
})

    }
    )
}
const start=async ()=>{
    try{
    
    const first=await getText('./first.txt')
    console.log(first)
    }
    catch(error){
        console.log(error)
    }
   
}
start()
const EventEmitter=require('events')
const currentEmitter=new EventEmitter()
currentEmitter.on('response',()=>{
    console.log(`data received`)
})
currentEmitter.emit('response')
const {createReadStream}=require('fs')
const stream=createReadStream('./result-sync.txt')
stream.on('data',(result)=>{
    console.log(result)
})
const http=require('http')
const server=http.createServer((req,res)=>{
    const url=req.url
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>homepage</h1>')
    res.end()
})
server.listen(5000)
const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.status(200).send('homepage')
})
app.get('/about',(req,res)=>{
    res.status(200).send('aboutpage')
})
app.all('*',(req,res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})
app.listen(5000)