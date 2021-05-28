const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded());
app.use(express.static(__dirname));

app.get("/pizza", (req, res) => {
   res.sendFile(path.resolve("./pizzerie.html"));
});

app.get("/order", (req, res) => {
   res.sendFile(path.resolve("./pizzerie-order.html"));
});

app.post("/result", (req, res) => {
   res.writeHead(200, {
	   'Content-Type': 'text/plain'
   });

   res.write("You registered order as " + req.body.name + " with email " + req.body.email);
   res.end();
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})
