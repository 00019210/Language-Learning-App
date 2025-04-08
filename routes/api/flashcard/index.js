const express = require('express');
const { validationResult } = require('express-validator');
const { addFlashcardValidation, updateFlashcardValidation, deleteFlashcardValidation } = require('../../../validators/flashcard');

const router = express.Router();
const flashcard_controller = require('../../../controllers/api/flashcard');

// Define API routes
router.get('/', (req, res)=>{
    flashcard_controller.getAll(req, res);
});

router.post('/', addFlashcardValidation(), (req, res)=>{
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    flashcard_controller.create(req, res)
})

router.put('/:id', updateFlashcardValidation(), (req, res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  flashcard_controller.update(req, res)
})

router.delete('/:id', deleteFlashcardValidation(), (req, res, next)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  flashcard_controller.delete(req, res)
})

module.exports = router;
