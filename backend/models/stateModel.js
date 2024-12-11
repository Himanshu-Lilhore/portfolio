const mongoose = require('mongoose');

const StateSchema = new mongoose.Schema({
    totalViews: {
        type: Number,
        default: 0
    },
    viewType: {
        mobile: {
            type: Number
        },
        tablet: {
            type: Number
        },
        laptop: {
            type: Number
        }
    },
    totalMessages: {
        type: Number,
    }
}, { timestamps: true });

module.exports = mongoose.model('State', StateSchema);
