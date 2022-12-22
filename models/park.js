const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parkSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  parkCode: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  directionsUrl: {
    type: String,
    required: true,
  },
  usersArray: [
    {type: Schema.Types.ObjectId, ref: 'User'}
  ],
  images: [],
}, {
  timestamps: true
})

module.exports = mongoose.model('Park', parkSchema);