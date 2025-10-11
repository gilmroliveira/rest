const express = require('express');
const { get } = require('http');
const app express();
// configuraçao para lidar com JSON
app.use(express.json());
app.get('/autor',(req,res)=>{
    if (req.get('accept')=== 'application/json'){
        res.json({autor:"Jose Gilmar Oliveira de Sa"});
    }else{
        res.send('<h1>Jose Gilmar Oleira de Sa</h1>');
    }
});
// inicia o servidor
app.listen(3000()=>{
    console.log('servidor rodando na porta 3000')
});