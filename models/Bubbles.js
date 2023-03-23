const mongoose = require('mongoose');

const BubblesSchema = mongoose.Schema({
  websiteData: {
    url: {
        type: String,
        required: true
    },
    images: [{
      imageURL: {
        type: String,
        required: true
      },
      dateCreated: {
        type: Date,
        required: true,
        default: Date.now
      },
      userid: {
        type: String,
        required: true
      },
      speechBubbles: [{
        tailPos: {
          type: String,
          required: true
        },
        text: {
          type: String,
          required: true
        },
        xPos: {
          type: String,
          required: true
        },
        yPos: {
          type: String,
          required: true
        },
        uid: {
          type: String,
          required: true
        }
      }]
    }]
  }
});

module.exports = mongoose.model('Bubbles',BubblesSchema);