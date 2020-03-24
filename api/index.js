const express = require('express'),
      app     = express(),
      sqlite  = require('sqlite3'),
      path    = require('path'),
      util    = require('util');

app.use(express.json());

//Connect SQLite database
const dbPath = path.resolve(__dirname, '../backend/database/clearbnb.db')
const db = new sqlite.Database(dbPath)
db.all = util.promisify(db.all)

//Welcome message for test
app.get('/api/clearbnb', (req, res)=>{
  res.json({
    welcome: 'Welcome to ClearBnB'
  })
})

//Access residence data from ClearBnB DB
app.get('/api/clearbnb/residences', async (req, res) => {
  let residences = await db.all(`SELECT * FROM residences`)
  res.json({
    residences: residences
  })
})

//Access specific residence from ClearBnB DB
app.get('/api/clearbnb/residences/:id', async (req, res) => {
  let residence = await db.all('SELECT * FROM residences WHERE id = $id', {
    $id: req.params.id
  })
  res.json({
    residence: residence
  })
})


app.listen(4000, ()=> {
  console.log('Node Server is running...')
})