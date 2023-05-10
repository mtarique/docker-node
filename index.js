const express = require('express'); 

const app = express(); 
const port = 3000; 

app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

app.use('/', (req, res) => {
    res.json({message: `API is running successfully on ${port}...`})
}); 

app.listen(port, () => {
    console.log(`Application is running on port ${port}`); 
});
