const express=require('express')
const router=require('./router')
const app=express()

app.use('/',router)


const server=app.listen(5000,function () {
	console.log('服务器已启动')
})
