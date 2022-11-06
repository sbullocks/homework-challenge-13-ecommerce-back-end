// Package(s) needed for this application.
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // Find all tags.
  // Be sure to include its associated Product data.
  // Methods are asynchronous and return promises.
  // Added catch to handle specific error.
  
});

router.get('/:id', (req, res) => {
  // Find a single tag by its `id`.
  // Be sure to include its associated Product data.
  // Methods are asynchronous and return promises.
  // Added catch to handle specific error.
});

router.post('/', (req, res) => {
  // Creates a new tag.
});

router.put('/:id', (req, res) => {
  // Updates a tag's name by its `id` value.
});

router.delete('/:id', (req, res) => {
  // Delete on tag by its `id` value.
  // Methods are asynchronous and return promises.
  // Added catch to handle specific error.
});

// Exports the module.
module.exports = router;
