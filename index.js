const swaggerService = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const express = require('express');
const cors = require('cors'); 

const app = express();
const calculatorRoute = require('./routes/myAppRoutes');

app.use(cors()); 
app.use('/calculator', calculatorRoute);

app.use('/apidocs', swaggerService.serve, swaggerService.setup(swaggerDoc));


// Handler for the root URL '/'
app.get('/', (req, res) => {
    res.send('Hello from the root URL!');
  });  

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
