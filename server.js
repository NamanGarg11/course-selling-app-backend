const http = require('http');
const app = require("./app");
const { env } = require('process');
const { configDotenv } = require('dotenv');
configDotenv();
const server = http.createServer(app);
const port = env.process.PORT || 3000;
server.listen(port,()=>{
    console.log(`working on currently ${port}`)
})