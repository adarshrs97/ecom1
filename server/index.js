const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./routes/products');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);

const mongoURI = 'mongodb+srv://arswebserv:U6sguGmDXhpWowzd@bake.euligiv.mongodb.net/?retryWrites=true&w=majority&appName=bake';

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('MongoDB connected');
  }).catch(err => {
    console.error('MongoDB connection error:', err);
  });

// mongoose.connect('mongodb://localhost:27017/ecommerce', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
