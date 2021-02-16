const mongoose = require('mongoose');

const restaurantsSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  }
}, {
  timestamps: { createdAt: 'created_on', updatedAt: 'updated_on' }
});

const Restaurants = mongoose.model('Restaurants', restaurantsSchema);

module.exports = Restaurants;