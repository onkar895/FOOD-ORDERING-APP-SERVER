# Food Delivery Proxy Server

This Node.js application sets up a proxy server using Express that fetches data from a third-party (Swiggy) API and exposes it to a client (Food ordering app).

1. List all restaurants for the given location (lat & lng)

-   `lat (required)` : latitude of the location to search for restaurants

-   `lng (required)` : longitude of the location to search for restaurants

-   Exapmple request :
    `https://food-ordering-app-server.vercel.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`

-   Explanation : This API fetches the restaurant data for the given location from Swiggy API and exposes it to the clients. The response format of this API is same as Swiggy API enpoint.

-   Usage : In react app , you can hit this API like mentioned below

-   Example :

```js
const response = await fetch(
    "https://food-ordering-app-server.vercel.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);
const data = await response.json();
```

2. List all menu items for the given restaurant Id (restaurantId)

-   `restaurantId` (required): ID of the restaurant's menu.

-   Example Request :
    `https://food-ordering-app-server.vercel.app/api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId={restaurantId}`

-   Explanation : This API fetches the restaurant data in json format for the given location from Swiggy API and exposes it to the clients. The response format of this API is same as Swiggy API enpoint.

-   Usage : In react app , you can hit this API like mentioned below

```js
fetch(`https://food-ordering-app-server.vercel.app/api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId={restaurantId}`);
```

Example :

```js
const response = await fetch(
    "https://food-ordering-app-server.vercel.app/api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId={restaurantId}"
);
const data = await response.json();
```

## Features

-   **Proxy Middleware**: Routes requests to `/api/proxy/swiggy/dapi` to the Swiggy API, enabling seamless integration with Swiggy's services.
-   **CORS Configuration**: Implements CORS headers to allow cross-origin requests, enabling communication with the server from any origin.
-   **Home Page**: Displays a welcoming message for food lovers on the home page.

## Setup

1. Clone the repository:

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

This server is now be running on `localhost:3000`.

### Deploy your own server

Note : Push your code into your Github Repostory

1. Create an account in "https://render.com/ or https://vercel.com/" using Github.
2. Click on `New + ` and select `web services` on **render** and `Add new` and then `Project` on **vercel**
3. Connect to the repository ( node server) which you want to deploy.
4. Now, your server will be deployed in few minutes and a url to access your server will be provided.
