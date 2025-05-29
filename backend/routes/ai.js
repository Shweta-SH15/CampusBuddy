const express = require("express");
const axios = require("axios");
const router = express.Router();

const AI_BASE = "http://localhost:8000"; // Flask AI service

router.post("/summarize", async (req, res) => {
  const result = await axios.post(`${AI_BASE}/summarize`, req.body);
  res.json(result.data);
});

router.post("/sentiment", async (req, res) => {
  const result = await axios.post(`${AI_BASE}/sentiment`, req.body);
  res.json(result.data);
});

router.post("/recommend", async (req, res) => {
  const result = await axios.post(`${AI_BASE}/recommend`, req.body);
  res.json(result.data);
});

module.exports = router;
