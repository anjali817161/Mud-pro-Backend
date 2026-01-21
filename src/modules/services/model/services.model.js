const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String },
  unit: { type: String },
  price: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("Package", packageSchema);



const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String },
  unit: { type: String },
  price: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("Service", serviceSchema);


const engineeringSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String },
  unit: { type: String },
  price: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("Engineering", engineeringSchema);
