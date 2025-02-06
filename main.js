import express from "express";
const app = express();

const PORT = 8000;

app.get('/', (req, res) => {
    return res.json({
        message: "Hey , I am nodeJs in container"
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`server started on PORT : ${PORT}`);
});
