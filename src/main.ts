import { numberOne } from "@/counter";

import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.send(`change me to see updates, express~! ${numberOne}`);
});

app.get("/aaa", (_req, res) => {
  res.send(`caaaaa ${numberOne}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}/`);
});

export const viteNode = app;
