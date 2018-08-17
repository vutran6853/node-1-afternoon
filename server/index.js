const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const mc = require('./controllers/messages_controller');

// const messagesBaseUrl = '/api/messages';

const app = express();

app.use(bodyParser.json());
// app.use(express.static('../public/build/index.html'))
app.use(express.static( __dirname + '/../public/build' ) );
app.post('/api/messages', mc.create);
app.get('/api/messages', mc.read);
app.put(`${'/api/messages'}/:id`, mc.update);
app.delete(`${'/api/messages'}/:id`, mc.delete)



app.listen(port, ()=> {
    console.log(`Server started on port: ${ port }`);
});
