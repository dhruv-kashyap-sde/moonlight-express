const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const categoryRoutes = require('./Routes/categoryRoutes');
// const productRoutes = require('./Routes/productRoutes');
const adminRoutes = require('./routes/admin.route');
// const inquiryRoutes = require('./Routes/inquiryRoutes');
const cors = require('cors');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
// const bcrypt = require('bcryptjs');
// const Admin = require('./models/admin');

const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded images

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// app.use('/api', categoryRoutes);
// app.use('/api', productRoutes);
app.use('/api', adminRoutes);
// app.use('/api', inquiryRoutes);

app.get('/', (req, res) => {
  res.send('server working')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
