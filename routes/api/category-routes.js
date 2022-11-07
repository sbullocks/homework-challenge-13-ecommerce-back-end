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
  // Methods are asynchronous and return promises.
  // Added catch to handle specific error.
  try {
    const categoryData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // Updates a category by its `id` value.
  // Methods are asynchronous and return promises.
  // Added catch to handle specific error.
  try {
    const tagData = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    if (!tagData) {
      res
        .status(404)
        .json({ message: "No category was found with the specified id." });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete method route.
router.delete("/:id", async (req, res) => {
  // Deletes a category by its `id` value.
  // Methods are asynchronous and return promises.
  // Added catch to handle specific error.
  try {
    const tagData = await Tag.destroy({
      where: { id: req.params.id },
    });
    if (!tagData) {
      res.status(404).json({ message: "No category with this id!" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Exports the module.
module.exports = router;
