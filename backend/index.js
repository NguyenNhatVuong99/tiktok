const express = require('express');
const indexRouter = require('./routes/index');

const app = express();

app.use(express.json());

// Mount the user routes
app.use('/', indexRouter);

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
