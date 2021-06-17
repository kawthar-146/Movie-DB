const express = require('express');//bringing in the express framework and storing it in a constant.

const app = express();//initializing the express framework and saving it into another constant.

const PORT = process.env.PORT || 3000 // We are saving the port of our server into a constant


app.listen(PORT, function () {
    console.log("Server is running on "+ PORT +" port");
  });

app.get('/', function (req, res) {
    res.send('<h1>ok</h1>');
  }); 

  app.get('/test',(req,res) => {
    const response = {
           status:200, message:"ok"}
       res.send(response);
 });

var x = new Date();
app.get('/time',(req,res) => {
    const response = {
      status:200, message: x.getHours() + ":" + x.getSeconds()}
      res.send(response);
       }); 

app.get('/hello/:id', (req, res) => {
     const response = { 
        status:200, message:'Hello,'+ " "+ req.params.id}
        res.send(response);
        });


app.get('/search',(req,res) => {
      const search = req.query.s;

            if (typeof search != 'undefined') {

                const response = {
                   status:200, message:"ok", data: search};

                   res.send(response);
                }
            else {
                const response = {
                    status:500, error:true, message: "you have to provide a search"};


                    res.status(500);
                    res.send(response);
                }
            });
