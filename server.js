const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let results = {
  Azure: 0,
  AWS: 0,
  GCP: 0
};

app.post("/api/vote", (req, res) => {
  const choice = req.body.cloud;
  if(results[choice] !== undefined){
    results[choice]++;
  }
  res.json({message:"Vote saved", results});
});

app.get("/api/results", (req, res) => {
  res.json(results);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});