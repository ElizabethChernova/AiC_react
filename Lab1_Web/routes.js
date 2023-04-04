const exp1 = require('express');
const router = exp1.Router()
module.exports = router;
const Book = require('./Book');
router.post('/books', async (req, res) => {
   console.log(req.body);
    const bookone = new Book({
        name: req.body.name,
        year_of_publication: req.body.year_of_publication
    })

    try {
        const saveData = await bookone.save();
        res.status(200).json(saveData)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
router.get('/books', async (req, res) => {
    try{
        const bookone = await Book.find();
        res.json(bookone)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//Get by ID Method
router.get('/books/:id', async (req, res) => {
    try{
        const bookone = await Book.findById(req.params.id);
        res.json(bookone)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//Update by ID Method
router.patch('/books/:id', async (req, res) => {
    try {
        const idofbook = req.params.id;
        const updatedData = req.body;
        const maybe = { new: true };

        const results = await Book.findByIdAndUpdate(
            idofbook, updatedData, maybe
        )

        res.send(results)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
//Delete by ID Method
router.delete('/books/:id', async (req, res) => {
    try {
        const idofbook = req.params.id;
        const data = await Book.findByIdAndDelete(idofbook)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})