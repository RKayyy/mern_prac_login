const mongoose = require('mongoose');
const cors = require("cors")

//-------------------------------------
const EmployeeModel = require('./models/Employee')
const EmployeeDataModel = require('./models/EmployeeData')


const express = require('express');
const app = express();


app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

require('dotenv').config();
const dbConnectionString = process.env.MONGODB_URI

//mongoose.connection.dropDatabase();

mongoose.connect(dbConnectionString, {
  dbName: 'Staff',
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Successfully connected to MongoDB database');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});



//routes: =-------------------------------------------

app.get('/', (req, res) => {
  res.send('Welcome to the Employee API');
});

app.post("/login", (req, res) => {
  const {email, password} = req.body;
  EmployeeModel.findOne({email: email}).then(user => {
    if(user){
      if(user.password == password){
        res.json({status: "success", user: user});
      }else{
        res.json("incorrect password")
      }
    }else{
      res.json("no record")
    }
  })
})

app.all('/register', (req, res) => {
  if (req.method === 'GET') {
    // Render a registration form or message for GET requests
    res.send('Registration form');
  } else if (req.method === 'POST') {
    // Process the registration form submission for POST requests
    EmployeeModel.create(req.body)
      .then(employee => {
        res.send('Employee registered successfully');
      })
      .catch(err => {
        res.status(500).send('Failed to register employee');
      });
  }
});

app.post('/details', async (req, res) => {
  try {
    const employeedata = await EmployeeDataModel.create(req.body);
    res.send('Employee details registered successfully');
  } catch (err) {
    res.status(500).send('Failed to register details of employee');
  }
});


app.get('/favicon.ico', (req, res) => {
  res.status(204);
});





//------------------------------------------