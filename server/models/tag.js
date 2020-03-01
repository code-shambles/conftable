const mongoose = require('mongoose');

const { Schema } = mongoose;

const TagSchema = new Schema({
  name: { type: String, required: true },
});

TagSchema.virtual('url').get(() => `tag/${this._id}`);

module.exports = mongoose.model('Tag', TagSchema);
