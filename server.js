const http = require('http');

const PORT = 3000;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello from Bulba</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    .container {
      text-align: center;
      padding: 2rem;
    }
    h1 { font-size: 3rem; margin-bottom: 0.5rem; }
    p { font-size: 1.2rem; opacity: 0.9; }
    .emoji { font-size: 4rem; }
  </style>
</head>
<body>
  <div class="container">
    <div class="emoji">🌱</div>
    <h1>Hello, World!</h1>
    <p>Your Node.js server is running.</p>
  </div>
</body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🌱 Server running at http://0.0.0.0:${PORT}`);
});
