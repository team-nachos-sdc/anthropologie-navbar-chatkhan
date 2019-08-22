const express = require('express');
const app = express();
const port = 3000;

const morgan = require('morgan');
const path = require('path'); 
const bodyParser = require('body-parser');
const router = require('./router.js')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router)


app.listen(port, () => console.log(`listening on port ${port}!`))