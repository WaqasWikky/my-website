const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
});

app.get("/api/server", (req, res) => {
    res.json({
        hostname: require("os").hostname(),
        platform: require("os").platform(),
        architecture: require("os").arch(),
        nodeVersion: process.version,
        uptime: process.uptime()
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Website running on port ${PORT}`);
});
