const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const areaSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  ServiceArea: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Area = mongoose.model('Area', areaSchema);

module.exports = Area;
