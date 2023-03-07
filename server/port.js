const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all origins
app.use(cors());

// Your other middleware and route handlers...

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
