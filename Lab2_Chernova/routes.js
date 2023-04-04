const exp1 = require('express');
const router = exp1.Router()
module.exports = router;
const Book = require('./Email');
router.post('/post', async (req, res) => {
   console.log(req.body);
    const bookone = new Email({
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
router.get('/getAll', async (req, res) => {
    try{
        const bookone = await Email.find();
        res.json(bookone)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const bookone = await Book.findById(req.params.id);
        res.json(bookone)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const idofbook = req.params.id;
        const updatedData = req.body;
        const maybe = { new: true };

        const results = await Email.findByIdAndUpdate(
            idofbook, updatedData, maybe
        )

        res.send(results)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const idofbook = req.params.id;
        const data = await Email.findByIdAndDelete(idofbook)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})