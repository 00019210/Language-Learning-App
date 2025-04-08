const flashcard_service = require('../../../services/flashcard')

const home_controller = {
    index: async (req, res) =>{
        res.render('home');
    },
    add: async (req, res) =>{
        res.render('home/add_update', { mode: 'Add' });
    },
    update: async (req, res) => {
        const data = await flashcard_service.getById(req.params.id);
    
        if (!data) {
            return res.status(404).send('Flashcard not found');
        }
    
        const flashcardData = {
            id: data.id,
            ...data.flashcard
        };
    
        res.render('home/add_update', { mode: 'Update', flashcardData });
    }
    
};
  
module.exports = home_controller;
