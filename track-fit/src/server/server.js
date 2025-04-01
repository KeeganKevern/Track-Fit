import express from "express";
const app = express();
const port = 3000;

const exerciseBaseUrl = "https://exercisedb-api.vercel.app/api/v1/muscles/";

//Search for exercises by muscle
app.get("/api/exercisedb/muscle", async (req, res) => {
  let searchTerm = req.query.query;

  try {
    const response = await fetch(
      `${exerciseBaseUrl}${searchTerm}/exercises?limit=100`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from source" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
