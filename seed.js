require('dotenv').config();
require('./config/database');
const BASE_URL = 'https://developer.nps.gov/api/v1/parks';
const Park = require('./models/park')
const api = process.env.API_KEY;

// seed 50 parks at a time (add them to my database)
// automatically add new parks to the db
async function getParks() {
  try {
    const parks = await fetch(`${BASE_URL}?&start=450&api_key=${api}`)
    .then(res => res.json())
    .then(data => data.data)
    for (park of parks) {
      const exists = await Park.exists({id: park.id});
      if (!exists) {
        await Park.create({
          id: park.id,
          url: park.url,
          name: park.fullName,
          parkCode: park.parkCode,
          description: park.description,
          latitude: park.latitude,
          longitude: park.longitude,
          directionsUrl: park.directionsUrl,
          images: park.images 
        })
      }
    }
  } catch (error) {
   console.log(error); 
  }
  
}
getParks();