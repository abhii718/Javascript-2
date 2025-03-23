import express from "express"
const app = express();


// Middleware to log request details
const requestLogger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
};

// Middleware to add a custom header
const addCustomHeader = (req, res, next) => {
    res.setHeader("X-Powered-By", "Node.js");
    next();
};

app.use(requestLogger);
app.use(addCustomHeader);

app.get("/", (req, res) => {
    res.send("Check the response headers!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});