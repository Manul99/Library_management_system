const express = require('express');
const cors = require('cors');
const connectDB = require('./backend/config/db');
const userRoutes = require('./backend/routes/userRoutes')
const roomreRoutes = require('./backend/routes/roomreRoutes')
const booksRoutes = require('./backend/routes/booksRoutes')
const staffRoutes = require('./backend/routes/staffRoutes')
const feedbackRoutes = require('./backend/routes/feedbackRoutes')
const bodyParser = require('body-parser');
const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

//app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api/users',cors(),userRoutes);
app.use('/api/roomreserve',cors(),roomreRoutes);
app.use('/api/books',cors(),booksRoutes);
app.use('/api/staff',cors(),staffRoutes);
app.use('/api/feedback',cors(),feedbackRoutes);


const port = 3001;
app.listen(port, () => console.log(`Server is running on ${port}...`))
