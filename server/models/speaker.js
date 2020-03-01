const mongoose = require('mongoose');

const { Schema } = mongoose;

const SpeakerSchema = new Schema({
  name: { type: String },
  email: { type: String },
  location: { type: String },
  twitter: { type: String },
  url: { type: String },
  organization: { type: String },
  internal_notes: { type: String },
  updated_at: { type: Date },
  import: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String },
    bio: { type: String },
    twitter: { type: String },
    url: { type: String },
    organization: { type: String },
    updated_at: { type: Date },
  },
});

SpeakerSchema.virtual('url').get(() => `speaker/${this._id}`);

module.exports = mongoose.model('Speaker', SpeakerSchema);
