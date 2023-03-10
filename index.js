const express = require('express');
const app = express()
const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.status(200).json({Message: 'Hello world'})
})



app.listen(PORT, error => {
    if(error)
        console.log(error)
    else(
        console.log(`App running in port ${PORT}`)
    )    

})