// Package(s) needed for this application.
const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // Find all tags.
  // Be sure to include its associated Product data.
  // Methods are asynchronous and return promises.
  // Added catch to handle specific error.
  try {
    const tagData = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
          attributes: ["id", "product_name", "price", "stock"],
        },
      ],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // Find a single tag by its `id`.
  // Be sure to include its associated Product data.
  // Methods are asynchronous and return promises.
  // Added catch to handle specific error.
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
          attributes: ["id", "product_name", "price", "stock"],
        },
      ],
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

router.post("/", async (req, res) => {
  // Creates a new tag.
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // Updates a tag's name by its `id` value.
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

router.delete("/:id", async (req, res) => {
  // Delete on tag by its `id` value.
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
