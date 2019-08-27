const express = require("express")
const {json} = require("body-parser")
const app = express()

app.use(json())

app.get("/cong/:a/:b" , (req,res) => {
    const {a , b} = req.params
    if(isNaN(a) || isNaN(b)){
        res.send({success : false , message : "Khong phai là số"})
        return res.end()
    }
    const ketqua = +a + +b
    res.send({success : true , tong : ketqua})

})
app.post("/chia" , (req,res) => {
    const {a , b} = req.body
    if(isNaN(a) || isNaN(b)){
        res.send({success : false , message : "Khong phai là số"})
        return res.end()
    }
    const ketqua = +a / +b
    res.send({success : true , chia : ketqua})

})
app.listen("3000" , () => console.log("Server started"))