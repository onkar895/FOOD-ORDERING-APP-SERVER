# Instafood Web Server

A simple node.js web server that fetches data from a third-party (Swiggy) API and exposes it to a client (Food ordering app).

### API Endpoints

1. List all restaurants for the given location (lat & lng)

-   API Endpoint: `/api/restaurants`

-   HTTP Method: `GET`

-   Query Parameters:

    `lat (required)` : latitude of the location to search for restaurants

    `lng (required)` : longitude of the location to search for restaurants

-   Response Format: `JSON`

-   URL: `https://instafood.onrender.com/api/restaurants?lat=:latquery&lng=:lngquery`

-   Example Request:

    `https://instafood.onrender.com/api/restaurants?lat=18.5204303&lng=73.8567437`

-   Explanation : This API fetches the restaurant data for the given location from Swiggy API and exposes it to the clients. The response format of this API is same as Swiggy API enpoint.

-   Usage : In react app , you can hit this API like mentioned below

```js
fetch(`https://instafood.onrender.com/api/restaurants?lat=${lat}&lng=${lng}`);
```

Example :

```js
const response = await fetch("https://instafood.onrender.com/api/restaurants?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING");

const data = await response.json();
```

2. List all menu items for the given restaurant Id (menuId)

-   API Endpoint: `/api/menu`

-   HTTP Method: `GET`

-   Query Parameters:

    `lat` (required) : latitude of the location to search for restaurants.

    `lng`(required) : longitude of the location to search for restaurants.

    `resId` (required): ID of the restaurant's menu.

-   Response Format: `JSON`

-   URL: `https://instafood.onrender.com/api/restaurants?lat=:latquery&lng=:lngquery&menuId=:menuId`

-   Example Request:

    `https://instafood.onrender.com/api/menu?lat=18.5204303&lng=73.8567437&menuId=34563`

-   Explanation : This API fetches the restaurant data in json format for the given location from Swiggy API and exposes it to the clients. The response format of this API is same as Swiggy API enpoint.

-   Usage : In react app , you can hit this API like mentioned below

```js
fetch(`https://instafood.onrender.com/api/restaurants?lat=${latitude}&lng=${longitude}&menuId=${menuId}`);
```

Example :

```js
const response = await fetch("https://instafood.onrender.com/api/menu?lat=18.5204303&lng=73.8567437&menuId=34563");

const data = await response.json();
```

### Clone Repository

You need to write the following commands on the terminal screen (in vscode) so that you can run this project locally.

```bash
  git clone "https://github.com/onkar895/FOOD-ORDERING-APP-SERVER.git"
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

This server should now be running on `localhost`.

### Deploy your own server

Note : Push your code into your Github Repostory

1. Create an account in "https://render.com/" using Github
2. Click on `New + ` and select `web services`
3. Connect to the repository ( node server) which you want to deploy
4. Now, your server will be deployed in few minutes and a url to access your server will be provided.
