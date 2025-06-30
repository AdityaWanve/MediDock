require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const patientRoutes = require('./routes/patientRoutes');

const app = express();


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to Database");
})
.catch((e) => {
    console.log("Error connecting to database:", e);
})


app.use(cors({ origin: 'http://localhost:5173', credentials: true }));


app.use(express.json());

app.use('/api/patient', patientRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});