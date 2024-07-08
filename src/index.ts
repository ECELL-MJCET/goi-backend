import express from "express";
import router from "./router";
import cors from "cors";
import http from "http";

const app = express();
const port = 1212;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use("/", router);



const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
