const dotenv = require("dotenv");
dotenv.config();
module.exports = {
    api_key: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
};
