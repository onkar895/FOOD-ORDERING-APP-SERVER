const express = require('express');
const cors = require('cors');
const fetch = require('cross-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.get('/', (req, res) =>{
  res.json({"test":"Hello Food lovers, Welcome to the Food Delivery App !!! "});
})

app.get('/api/restaurants', async (req, res) => {
  try {
    const { lat, lng } = req.query;
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

app.get('/api/menu', async (req, res) => {
  try {
    const { lat, lng, restaurantId } = req.query;
    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&submitAction=ENTER&restaurantId=${restaurantId}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});
