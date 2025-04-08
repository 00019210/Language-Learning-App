const fs = require('fs')

// access global mock db file
const flashcards = require(global.flashcard)

// write service method implementations
const flashcard_service = {
    getAll() {
        return flashcards
    },
    getById(id) {
        return flashcards.find(t => t.id == id)
    },    
    create(req, res) {
        let new_id = genRandId(4)
                
        const flashcard = req.body

        const new_flashcard = {
            id: new_id,
            flashcard: flashcard
        }

        flashcards.push(new_flashcard)
        
        writeToFile(flashcards)
        
        return new_flashcard
    },
    update(id, updateData){
        const flashcardIndex = flashcards.findIndex(t => t.id == id)

        if (flashcardIndex === -1) {
            return null
        }

        flashcards[flashcardIndex].flashcard = { ...flashcards[flashcardIndex].flashcard, ...updateData }

        writeToFile(flashcards)

        return flashcards[flashcardIndex]
    },
    delete(id) {
        const index = flashcards.findIndex(u => u.id == id)
        flashcards.splice(index, 1)    
        writeToFile(flashcards)
    }
}

// create function for overwriting the db file updated db content
let writeToFile = async (users) => {
    await 
        fs.writeFileSync(
            global.flashcard,
            JSON.stringify(
                users, null, 4
            ),
            'utf8'
        )
}

// generate random id inspired by uuid
let genRandId = (count) =>{
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < count; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}

module.exports = flashcard_service
