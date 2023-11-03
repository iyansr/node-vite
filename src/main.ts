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
  app.listen(3000);
  console.log("listening on http://localhost:3000/");
}

export const viteNode = app;
