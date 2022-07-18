const { Router } = require('express');
const {
    getInstruments,
    createInstrument,
    updateInstrument,
    deleteInstrument,
    getInstrumentById
} = require('../controllers/instrumentController');

const router = Router();

router.route('/')
    .get(getInstruments)
    .post(createInstrument);

router.route('/:id')
    .put(updateInstrument)
    .delete(deleteInstrument)
    .get(getInstrumentById);

module.exports = router;