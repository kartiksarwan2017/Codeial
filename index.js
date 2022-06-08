const express = require('express');
const app = express();
const port = 8000;


// use express router 
// app.use('/', require('./routes/index'));
app.use('/', require('./routes'));



// Set up the view engine
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
app.set('views', './views');

app.listen(port, function(err){

    if(err){
    
     //   console.log('Error in Running the server: ', err);
     console.log(`Error in running the server: ${err}`);
    
    }

    //    console.log('Server is Running on port: ', port);
    console.log(`Server is running on port: ${port}`);

    
});