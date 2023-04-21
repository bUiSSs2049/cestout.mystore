var express = require('express');


app.get('/', (req, res) => {
    res.send('TEST')
})

    
app.listen(process.env.PORT || 4000);
