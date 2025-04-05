const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', weatherRoutes);

app.get('/', (req, res) => {
    res.send('Weather App Server is running!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});