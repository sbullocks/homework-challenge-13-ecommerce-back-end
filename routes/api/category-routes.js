const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // Find all categories.
  // Be sure to include its associated Products.
  // Methods are asynchronous and return promises.
  // Added catch to handle specific error.
  try {
    const catetoryInfo = await Category.findAll();
    res.status(200).json(catetoryInfo);
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
    const catetoryInfo = await Category.findByPk(req.params.id, {
      include: [
        { model: Product, attributes: ["product_name", "price", "stock"] },
      ],
    });
    if (!catetoryInfo) {
      res
        .status(404)
        .json({ message: "No category was found with the specified id." });
      return;
    }
    res.status(200).json(catetoryInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // Creates a new category.
});

router.put("/:id", (req, res) => {
  // Updates a category by its `id` value.
});

router.delete("/:id", (req, res) => {
  // Deletes a category by its `id` value.
});

module.exports = router;
