const Message = require('../models/messageModel');
const State = require('../models/stateModel');


const viewMessages = async (req, res) => {
    try {
        let message = await createIfNotFound();
        message = await Message.findByIdAndUpdate(message._id, {
            views: message.views + 1
        }, { new: true })
        res.status(200).json(message)
    } catch (err) {
        console.log("Error adding view")
        res.status(400).json({ error: err.message })
    }
}


const sendMessage = async (req, res) => {
    try {
        let temp = {
            text: req.body.text
        }
        if (req.body.name) temp.name = req.body.name
        const message = await Message.create(temp)

        try {
            let state = await State.findOne({});
            state = await State.findByIdAndUpdate(state._id, {
                totalMessages: state.totalMessages + 1
            }, { new: true })
        } catch (err) {
            console.log("Error updating message count")
            res.status(400).json({ error: err.message })
        }

        res.status(200).json({message: "message sent"});
    } catch (err) {
        console.log("Error sending message")
        res.status(400).json({ error: err.message })
    }
}


module.exports = { viewMessages, sendMessage }