const app = require('express');

const PORT = 9090;

app.listen(PORT, (error)=> {
    if(!error) {
        console.log(`Server is running on the port number : ${PORT}...!`)
    }
})
