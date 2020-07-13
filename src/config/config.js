const dotenv = require("dotenv");
dotenv.config();
module.exports = {
    port: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
};
