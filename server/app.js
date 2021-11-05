import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("welcome to testing api");
});

const port = 7000;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});

export default app;
