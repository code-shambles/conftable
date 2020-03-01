const mongoose = require('mongoose');

const { Schema } = mongoose;

const ConfSchema = new Schema({
  name: { type: String, required: true },
  cfp: {
    start: { type: Date },
    end: { type: Date },
  },
  origin_link: { type: String },
});

ConfSchema.virtual('url').get(() => `conference/${this._id}`);

module.exports = mongoose.model('Conf', ConfSchema);
