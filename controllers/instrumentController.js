const Instrument = require('../models/Instrument');

exports.getInstruments = async (req, res) => {
    try {
        const instruments = await Instrument.find({});
        return res.status(200).json({ ok: true, instruments });
    } catch (error) {
        return res.status(500).json({ ok: false, message: 'Error B101' });
    }

}

exports.getInstrumentById = async (req, res) => {
    const { id } = req.params;
    try {
        const instrument = await Instrument.findById(id);
        return res.status(200).json({ ok: true, instrument });
    } catch (error) {
        return res.status(500).json({ ok: false, message: 'Error B102' });
    }

}

exports.createInstrument = async (req, res) => {
    try {
        const instrument = new Instrument({ ...req.body });
        const savedInstrument = await instrument.save();
        return res.status(201).json({
            ok: true,
            message: 'Instrument created successfully',
            instrument: savedInstrument
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error B103' });
    }
}

exports.updateInstrument = async (req, res) => {
    const { id } = req.params;
    try {
        const instrument = await Instrument.findById(id);
        !instrument
            && res.status(404).json({ ok: false, message: 'Instrument not found' });
        const updatedInstrument = await Instrument.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json({ ok: true, instrument: updatedInstrument });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error B104' });
    }
}

exports.deleteInstrument = async (req, res) => {
    const { id } = req.params;
    try {
        await Instrument.findByIdAndDelete(id);
        return res
            .status(200)
            .json({
                ok: true,
                message: 'Instrument deleted successfully'
            });
    } catch (error) {
        return res.status(500).json({ ok: false, message: "Error B105" });
    }
}
