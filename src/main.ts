import { numberOne } from "@/counter";

import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.send(`change me to see updates, express~! ${numberOne}`);
});

app.get("/aaa", (_req, res) => {
  res.send(`caaaaa ${numberOne}`);
});

if (import.meta.env.PROD) {
  const PORT = import.meta.env.PORT;
  app.listen(PORT);
  console.log(`listening on http://localhost:${PORT}/`);
}

export const viteNode = app;
