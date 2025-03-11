const e = require("express");
const http = require("http");
const PORT = 9090;

const user = [
  { id: 1, name: "Vijay", role: "Java FS" },
  { id: 2, name: "Anju", role: "Python Fs" },
  { id: 3, name: "Ram", role: "Java DB" },
  { id: 4, name: "Venkat", role: "Angular" },
  { id: 5, name: "Monika", role: "React" },
  { id: 6, name: "Siva", role: "Java FS" },
];
// create a server
const server = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/user") {
    response.writeHead(200, { "Content-Type": "application/json" });
    const userData = {
      totalSize: user.length,
      data: user,
    };
    response.write(JSON.stringify(userData));
    response.end();
  }

  if (request.method === "POST" && request.url === "/add-user") {
    let rawData = "";
    request.on("data", (chunk) => {
      rawData += chunk.toString();
      console.log("payload", rawData);
    });
    request.on("end", () => {
      try {
        user.push(JSON.parse(rawData));
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(
          JSON.stringify({
            totalSize: user.length,
            message: "Record successfull updated...",
            data: user,
          })
        );
        response.end();
      } catch (e) {
        console.error(e.message);
        response.end();
      }
    });
    request.on("error", (e) => {
      console.error(`Got error: ${e.message}`);
      response.end();
    });
  }
});

server.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running on the port number: ${PORT}...`);
  }
});
