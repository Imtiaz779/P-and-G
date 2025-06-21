import { Card } from "../model/CardModel.js";

export const createCard = async (req, res) => {
  try {
    const { title, description, imageUrl } = req.body;
    const newCard = new Card({ title, description, imageUrl });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    console.error("Error creating card:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    console.error("Error fetching cards:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const updateCard = async (req, res) => {
  try {
    const { id } = req.params;
        const { title, description, imageUrl } = req.body;
    if (!id) {
      return res.status(400).json({ message: "Card ID is required" });
    }
    const updateFields = {};
    if (req.body.title) {
      updateFields.title = req.body.title;
    }
    if (req.body.description) {
      updateFields.description = req.body.description;
    }
    if (req.body.imageUrl) {
      updateFields.imageUrl = req.body.imageUrl;
    }
    
    const updatedCard = await Card.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    res.status(200).json(updatedCard);
  } catch (error) {
    console.error("Error updating card:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const deleteCard = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Deleting card with ID:", id);
    const deletedCard = await Card.findByIdAndDelete(id);
    if (!deletedCard) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.status(200).json({ message: "Card deleted successfully" });
  } catch (error) {
    console.error("Error deleting card:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getCardById = async (req, res) => {
  try {
    const { id } = req.params;
    const card = await Card.findById(id);
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.status(200).json(card);
  } catch (error) {
    console.error("Error fetching card by ID:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
