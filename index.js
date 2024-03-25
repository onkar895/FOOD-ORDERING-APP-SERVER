var $hXvsm$express = require("express");
var $hXvsm$cors = require("cors");
var $hXvsm$crossfetch = require("cross-fetch");




const $2685e5b20c9f29f6$var$app = $hXvsm$express();
const $2685e5b20c9f29f6$var$port = 3000;
$2685e5b20c9f29f6$var$app.use($hXvsm$cors());
$2685e5b20c9f29f6$var$app.listen($2685e5b20c9f29f6$var$port, ()=>{
    console.log(`Server is listening on port ${$2685e5b20c9f29f6$var$port}`);
});
$2685e5b20c9f29f6$var$app.get("/api/restaurants", async (req, res)=>{
    try {
        const { lat: lat, lng: lng } = req.query;
        const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`;
        const response = await $hXvsm$crossfetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
});
$2685e5b20c9f29f6$var$app.get("/api/menu", async (req, res)=>{
    try {
        const { lat: lat, lng: lng, restaurantId: restaurantId } = req.query;
        const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&submitAction=ENTER&restaurantId=${restaurantId}`;
        const response = await $hXvsm$crossfetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
});


//# sourceMappingURL=index.js.map
