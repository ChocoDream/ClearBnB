const express = require('express'),
      app     = express();

app.get('/api/clearbnb', (req, res)=>{
  res.json({
    welcome: 'Welcome to ClearBnB'
  })
})


app.listen(3001, ()=> {
  console.log('Node Server is running...')
})