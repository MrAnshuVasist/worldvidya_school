const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors'); 
const ContactForm = require('./API/contactformApi')
const NewUser = require('./API/signupApi')
const UserLogin = require('./API/loginApi')
const Registration = require('./API/registrationFormApi')
const Reciept = require('./API/recieptApi')

const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://worldvidyaa:worldvidya1221@cluster0.larh2zh.mongodb.net/WorldVidya_School', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(ContactForm)
app.use(NewUser)
app.use(UserLogin)
app.use(Registration)
app.use(Reciept)


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  