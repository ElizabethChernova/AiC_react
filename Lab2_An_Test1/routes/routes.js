const express = require('express');
const router = express.Router()

const Email = require('../models/email');
const Spammer = require("../spammer.js");
module.exports = router;

router.get('/', async (req, res) => {
    try {
        const emails = await Email.find().sort('surname');
        res.send(emails);
    }
    catch(error){
        res.status(500);
        res.send(`Error ${error}`);
    }
});

router.get('/:id', async (req, res) => {
    try{
        const email = await Email.findById(req.params.id);
        res.json(email);
    }
    catch(error){
        res.status(500);
        res.send(`Error ${error}`);
    }
})

// route for adding a new email
router.post('/', async (req, res) => {
    console.log(req.body)
    let email = new Email({
        firstName: req.body.firstName,
        surname: req.body.surname,
        fatherName: req.body.fatherName,
        email: req.body.email
    });
    try {
        const email1 = await email.save();
        res.status(200);
        res.json(email1);
    } catch (error) {
        res.status(400);
        res.send(`Error ${error}`);
    }
});

router.put('/:id', async (req, res) => {
    try{
        const email = await Email.findOneAndUpdate(req.params.id,{
            "firstName":req.body.firstName,
            "surname" : req.body.surname,
            "fatherName":req.body.fatherName,
            "email" : req.body.email});

        res.json(email);
    }catch (err){
        res.status(400);
        res.send(`Error ${err}`);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const movie = await Email.findByIdAndDelete(id);
        res.send(`Email ${movie.name} was removed`);
    }
    catch(error){
        res.status(400);
        res.send(`Error ${error}`);
    }
});

router.post('/spam', async (req, res) => {
    // console.log(req.body);
    const subject = req.body.subject;
    const title = req.body.title;
    const emails = req.body.emails;

    await Spammer(emails, title, subject);
    //res.send("success");

});


