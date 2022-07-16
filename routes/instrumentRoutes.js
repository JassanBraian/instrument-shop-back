const { Router } = require('express');
const { 
    getInstruments, 
    createInstrument ,
    updateInstrument,
    deleteInstrument
} = require('../controllers/instrumentController');

const router = Router();

router.route('/')
    .get(getInstruments)
    .post(createInstrument);

router.route('/:id')
    .put(updateInstrument)
    .delete(deleteInstrument);

module.exports = router;