const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("✅ EasyMart CI/CD pipeline deployed successfully!\n");
});

server.listen(3000, () => {
  console.log("🚀 EasyMart app running on port 3000");
});
