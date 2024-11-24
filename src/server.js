const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./authRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
