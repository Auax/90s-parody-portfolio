const dotenv = require("dotenv");

const routes = require("./app/routes");
const {app} = require("./app/app");

// Load ENV
dotenv.config();

/* ROUTES */

// GET
app.get("/api/get/playing", routes.getLiveSong);

/* RUN APP */
const PORT = process.env.PORT || 8000

// Start server
app.listen(PORT, () => {
    console.log("Started backend server!");
});