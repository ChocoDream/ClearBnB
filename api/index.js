const express = require('express'),
      app     = express(),
      sqlite  = require('sqlite3'),
      path    = require('path'),
      util    = require('util');

app.use(express.json());

//Connect SQLite database
const dbPath = path.resolve(__dirname, '../database/clearbnb.db')
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
  let residences = await db.all(`SELECT * FROM residencesInfo`)
  res.json({
    residences: residences
  })
})

//Access specific residence from ClearBnB DB
app.get('/api/clearbnb/residences/:id', async (req, res) => {
  let residence = await db.all('SELECT * FROM residencesInfo WHERE id = $id', {
    $id: req.params.id
  })
  res.json({
    residence: residence
  })
})

//Access all residence by city from ClearBnB DB
app.get('/api/clearbnb/residencesByCity/:city', async (req, res) => {
  let residencesByCity = await db.all("SELECT a.id, a.rooms, a.maxGuests, b.* FROM residences a, addresses b WHERE a.addressId = b.id and b.city like $city order by b.streetName, a.rooms desc ", {
    $city: req.params.city
  })
  res.json({
    residencesByCity: residencesByCity
  })
})

//Access all residence order by city from ClearBnB DB
app.get('/api/clearbnb/residencesOrderByRegion/', async (req, res) => {
  let residencesOrderByRegion = await db.all("SELECT a.id residenceId, b.* FROM residences a, addresses b WHERE a.addressId = b.id order by b.region, b.city ", {
  })
  res.json({
    residencesOrderByRegion: residencesOrderByRegion
  })
})

app.listen(4000, ()=> {
  console.log('Node Server is running...')
})