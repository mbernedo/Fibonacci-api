const express = require("express");
const app = express();
const service = require("./../service/index.js")

app.set("port", (process.env.PORT || 4000));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(app.get("port"), function () {
    console.log("Listo puerto 4000");
});

app.get("/", async (req, res) => {
    var index = req.query.index;
    if (isNaN(index)) {
        res.send({ msg: "Index tiene que ser un número" })
        return
    }
    const fibonacciIndex = await service.fibonacciPosition(index)
    res.send({ value: fibonacciIndex })
})