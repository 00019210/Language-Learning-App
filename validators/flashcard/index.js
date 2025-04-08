const { body, param } = require('express-validator');
const flashcard_service = require('../../services/flashcard');

// Add Flashcard
const addFlashcardValidation = () => {
  return [
    body('word')
      .notEmpty().withMessage('Word must not be empty')
      .isLength({ min: 1, max: 100 }).withMessage('Word must be between 1 and 100 characters'),

    body('translation')
      .notEmpty().withMessage('Translation must not be empty')
      .isLength({ min: 1, max: 100 }).withMessage('Translation must be between 1 and 100 characters'),

    body('definition')
      .optional()
      .isLength({ max: 500 }).withMessage('Definition can be up to 500 characters'),

    body('exampleSentence')
      .optional()
      .isLength({ max: 500 }).withMessage('Example sentence can be up to 500 characters'),
  ];
};

// Update Flashcard
const updateFlashcardValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await flashcard_service.getById(id);
      if (!exists) {
        throw new Error('Flashcard not found');
      }
    }),
    ...addFlashcardValidation() // same fields as add
  ];
};

// Delete Flashcard
const deleteFlashcardValidation = () => {
  return [
    param('id').custom(async (id) => {
      const exists = await flashcard_service.getById(id);
      if (!exists) {
        throw new Error('Flashcard not found');
      }
    })
  ];
};

module.exports = {
  addFlashcardValidation,
  updateFlashcardValidation,
  deleteFlashcardValidation
};
