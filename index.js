const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/', (req, res) => {
  const { output, fileName } = req.body;

  if (!output) {
    return res.status(400).send('Missing output');
  }

  const docContent = `
    <html>
      <head><title>${fileName || "Doc"}</title></head>
      <body>${output}</body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.send(docContent);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(\`Server running on http://localhost:\${port}\`);
});
