import express from "express";

import {
  getCards,
  createCard,
  updateCard,
  deleteCard,
} from "../controller/cardController.js";

const router = express.Router();

router.get("/", getCards);
router.post("/create", createCard);
router.put("/update/:id", updateCard);
router.delete("/delete/:id", deleteCard);

export default router;
