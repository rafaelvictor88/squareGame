const app = require('express')();
const cors = require('cors');
const http = require('http').createServer(app);
const bodyParser = require('body-parser');

const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

http.listen(port, () => console.log(`Example app listening on port ${port}!`));