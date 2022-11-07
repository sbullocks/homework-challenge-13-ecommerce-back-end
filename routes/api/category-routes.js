// Package(s) needed for this application.
const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // Find all categories.
  // Be sure to include its associated Products.
  // Methods are asynchronous and return promises.
  // Added catch to handle specific error.
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // Find one category by its `id` value.
  // Be sure to include its associated Products.
  // Methods are asynchronous and return promises.
  // Added catch to handle specific error.

  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        { model: Product, attributes: ["product_name", "price", "stock"] },
      ],
    });
    if (!categoryData) {
      res
        .status(404)
        .json({ message: "No category was found with the specified id." });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // Creates a new category.
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", (req, res) => {
  // Updates a category by its `id` value.
});

// Delete method route.
router.delete("/:id", (req, res) => {
  // Deletes a category by its `id` value.
});

// Exports the module.
module.exports = router;
