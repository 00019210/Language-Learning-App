// import specific service class
const flashcard_service = require('../../../services/flashcard')

// mention the service's needed actions (methods)
const flashcard_controller = {
    getAll(req, res) {
        res.json(flashcard_service.getAll());
    },
    create(req, res) {
        res.status(201).json(
            flashcard_service.create(req, res)
        );
    },
    delete(req, res) {
        const flashcard = flashcard_service.getById(req.params.id);

        if (flashcard) {
            flashcard_service.delete(req.params.id);
            res.status(204).send('flashcard deleted successfully');
        } else {
            res.status(404).send('flashcard not found');
        }
    },
    update(req, res) {
        const updatedFlashcard = flashcard_service.update(req.params.id, req.body);

        if (updatedFlashcard) {
            res.json(updatedFlashcard);
        } else {
            res.status(404).send('flashcard not found');
        }
    }
};


module.exports = flashcard_controller
