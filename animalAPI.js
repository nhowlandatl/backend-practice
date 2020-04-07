const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(express.static('public'));

app.get('/random', function(req, res) {
    fs.readdir('./public', (err, cat) => {
        const randomCat = cat[Math.floor(Math.random() * cat.length)];
        var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl + '/' + randomCat;
        res.json({  
            status: "OK", 
            message: fullUrl
        });
    });
});

app.listen(port, () => console.log(`app listening at http://localhost:${port}`));

