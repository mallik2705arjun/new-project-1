const http =require('http');

const server = http.createServer((req, res) =>{
    if (req.url ==="/") {
         res.setHeader("Content-Type", "text/html");
        res.write("<h1> i am mllikarjun 05</h1>");
        res.end();
    }

       if (req.url ==="/source-code") {
        res.write("abcdefghijklmnopqrstuvwxyz");
        res.end();
    }

    
       if (req.url ==="/contact") {
        res.setHeader("Content-Type", "text/plain");
        res.write("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        res.end();

    }

    
});


const PORT =3000;
server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});