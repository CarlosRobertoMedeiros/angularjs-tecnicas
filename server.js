const express =require('express')
const app = express();

app.use(express.static(__dirname + '/app/index.html'));

/*
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
*/

app.get('/*',function(req , resp){
  resp.sendFile(__dirname + '/app/index.html');
});

app.listen(4200);