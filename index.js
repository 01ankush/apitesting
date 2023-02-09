const express = require("express");
const users = require('./MOCK_DATA.json');
const app = express();
const PORT = 8000;

// app.use(express.json());

app.get('/api/products',(req,res)=>{
    return res.json(users);
})
app.listen(PORT,() =>console.log(`Server Started at PORT:${PORT}`));
