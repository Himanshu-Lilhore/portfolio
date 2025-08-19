const State = require("../models/stateModel");

const createIfNotFound = async () => {
    let state = await State.findOne({});
    if (!state) {
        state = await State.create({
            totalViews: 0,
            viewType: {
                mobile: 0,
                tablet: 0,
                laptop: 0,
            },
            totalMessages: 0,
        });
    }
    return state.toObject();
};

const addView = async (req, res) => {
    try {
        let state = await createIfNotFound();
        let temp = state;
        temp.totalViews = temp.totalViews + 1;
        temp.viewType[req.body.viewType] = temp.viewType[req.body.viewType] + 1;
        state = await State.findByIdAndUpdate(state._id, temp, { new: true });
        res.status(200).json(state);
    } catch (err) {
        console.log("Error adding view");
        res.status(400).json({ error: err.message });
    }
};

const getViews = async (req, res) => {
    try {
        let state = await State.findOne(); // assuming only one document exists
        if (!state) {
            // if state not found, create it once
            state = await createIfNotFound();
        }
        res.status(200).json(state);
    } catch (err) {
        console.log("Error getting views:", err);
        res.status(400).json({ error: err.message });
    }
};

module.exports = { addView, getViews };
