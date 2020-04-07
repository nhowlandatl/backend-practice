const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(express.static('public'));

app.get('/random', function(req, res) {
    fs.readdir('./public', (err, cat) => {
        const randomCat = cat[Math.floor(Math.random() * cat.length)];
        res.json({  
            status: "OK", 
            message: randomCat
        });
    });
});

app.listen(port, () => console.log(`app listening at http://localhost:${port}`));

