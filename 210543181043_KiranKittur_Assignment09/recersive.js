const prompt = require('prompt')//Import
const m = require("./noderecersive.js")
prompt.start()//Prompt Start
console.log("Enter the number")
prompt.get(['n1'],(err,res)=>{
    if(err)
        throw err
    console.log("Factorial of number is = "+m.Fac(Number(res.n1)))
})//Read Prompt data,Promt argument consist of varible and call back function